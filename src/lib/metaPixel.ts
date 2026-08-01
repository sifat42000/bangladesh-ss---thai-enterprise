export type MetaEventValue = string | number | boolean | string[] | undefined;
export type MetaEventParams = Record<string, MetaEventValue>;

type MetaPixelFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: MetaPixelFn;
    _fbq?: unknown[];
  }
}

const DEFAULT_PIXEL_ID = '1814362653310742';
const PIXEL_SCRIPT_ID = 'facebook-pixel-script';
const PIXEL_SCRIPT_URL = 'https://connect.facebook.net/en_US/fbevents.js';
const DEBUG_MODE = import.meta.env.VITE_META_PIXEL_DEBUG === 'true';
const PIXEL_ENABLED = import.meta.env.VITE_META_PIXEL_ENABLED !== 'false';
const PIXEL_ID = (import.meta.env.VITE_META_PIXEL_ID || DEFAULT_PIXEL_ID).replace(/\D+/g, '').slice(0, 20);
const META_PIXEL_INIT_FLAG = '__meta_pixel_initialized__';

let hasInitializedPixel = false;
let lastTrackedRoute: string | null = null;
const dedupKeySet = new Set<string>();

const logMetaPixel = (...messages: unknown[]) => {
  if (DEBUG_MODE && typeof console !== 'undefined') {
    console.info('[Meta Pixel]', ...messages);
  }
};

const normalizeRoute = (pathname: string, search = '') => {
  if (typeof pathname !== 'string' || pathname.length === 0) {
    return '/';
  }

  const queryString = typeof search === 'string' ? search.replace(/^\?/, '') : '';
  const safeParts = queryString
    .split('&')
    .filter(Boolean)
    .filter((part) => {
      const key = part.split('=')[0]?.toLowerCase() ?? '';
      return !/^(utm_|fbclid|gclid|mc_|msclkid|mkt_tok|hsa_|twclid|dclid|igshid|ref|source)=/i.test(key);
    });

  if (safeParts.length === 0) {
    return pathname;
  }

  return `${pathname}?${safeParts.join('&')}`;
};

const isValidPixelId = (value: string) => /^\d{10,20}$/.test(value);

const sanitizeEventValue = (value: MetaEventValue): MetaEventValue => {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return undefined;
    }
    return trimmed.slice(0, 200);
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : undefined;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (Array.isArray(value)) {
    const cleaned = value
      .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
      .map((item) => item.trim().slice(0, 100));

    return cleaned.length > 0 ? cleaned.slice(0, 10) : undefined;
  }

  return undefined;
};

export const sanitizeMetaEventParams = (params: MetaEventParams = {}): MetaEventParams => {
  const safeParams: MetaEventParams = {};

  Object.entries(params).forEach(([key, value]) => {
    if (!key || !/^[a-zA-Z0-9_]+$/.test(key)) {
      return;
    }

    const cleanedValue = sanitizeEventValue(value);
    if (cleanedValue !== undefined) {
      safeParams[key] = cleanedValue;
    }
  });

  return safeParams;
};

const shouldFireOnce = (identifier: string) => {
  if (dedupKeySet.has(identifier)) {
    return false;
  }

  dedupKeySet.add(identifier);
  return true;
};

export const grantMetaPixelConsent = () => {
  if (typeof window === 'undefined') {
    return;
  }

  logMetaPixel('Meta Pixel consent granted');
};

export const revokeMetaPixelConsent = () => {
  if (typeof window === 'undefined') {
    return;
  }

  logMetaPixel('Meta Pixel consent revoked');
};

export const initMetaPixel = () => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!PIXEL_ENABLED) {
    logMetaPixel('Meta Pixel disabled by environment configuration.');
    return;
  }

  if (!isValidPixelId(PIXEL_ID)) {
    logMetaPixel('Meta Pixel ID is invalid or missing; Pixel tracking disabled.');
    return;
  }

  const globalWindow = window as typeof window & {
    [META_PIXEL_INIT_FLAG]?: boolean;
  };

  if (globalWindow[META_PIXEL_INIT_FLAG]) {
    logMetaPixel('Meta Pixel already initialized once for this runtime.');
    return;
  }

  if (typeof window.fbq === 'function') {
    logMetaPixel('fbq already exists; skipping duplicate Pixel initialization.');
    globalWindow[META_PIXEL_INIT_FLAG] = true;
    return;
  }

  globalWindow[META_PIXEL_INIT_FLAG] = true;

  const existingScript = document.getElementById(PIXEL_SCRIPT_ID) as HTMLScriptElement | null;

  if (existingScript) {
    logMetaPixel('Meta Pixel script already present on the page.');
    return;
  }

  const script = document.createElement('script');
  script.id = PIXEL_SCRIPT_ID;
  script.type = 'text/javascript';
  script.async = true;
  script.src = PIXEL_SCRIPT_URL;
  script.onload = () => {
    if (typeof window.fbq === 'function' && !hasInitializedPixel) {
      window.fbq('init', PIXEL_ID);
      hasInitializedPixel = true;
      logMetaPixel('Meta Pixel script loaded and initialized.');
    }
  };
  script.onerror = () => {
    hasInitializedPixel = true;
    logMetaPixel('Meta Pixel script failed to load; continuing without crashing.');
  };
  document.head.appendChild(script);
};

export const trackStandardEvent = (eventName: string, params: MetaEventParams = {}) => {
  if (typeof window === 'undefined' || !PIXEL_ENABLED || !isValidPixelId(PIXEL_ID)) {
    return;
  }

  if (typeof window.fbq !== 'function') {
    return;
  }

  const safeParams = sanitizeMetaEventParams(params);
  window.fbq('track', eventName, safeParams);
  logMetaPixel('Standard event:', eventName, safeParams);
};

export const trackCustomEvent = (eventName: string, params: MetaEventParams = {}) => {
  if (typeof window === 'undefined' || !PIXEL_ENABLED || !isValidPixelId(PIXEL_ID)) {
    return;
  }

  if (typeof window.fbq !== 'function') {
    return;
  }

  const safeParams = sanitizeMetaEventParams(params);
  window.fbq('trackCustom', eventName, safeParams);
  logMetaPixel('Custom event:', eventName, safeParams);
};

export const trackPageView = (pathname: string, search = '', pageTitle = '') => {
  if (typeof window === 'undefined' || !PIXEL_ENABLED || !isValidPixelId(PIXEL_ID)) {
    return;
  }

  const route = normalizeRoute(pathname, search);

  if (lastTrackedRoute === route) {
    return;
  }

  lastTrackedRoute = route;

  const pageTitleText = typeof pageTitle === 'string' && pageTitle.trim().length > 0 ? pageTitle : document.title || 'Untitled page';

  trackStandardEvent('PageView', {
    route,
    page_title: pageTitleText,
  });

  trackCustomEvent('RouteView', {
    route,
    page_title: pageTitleText,
  });
};

export const trackViewContent = (
  contentName: string,
  contentCategory: string,
  params: MetaEventParams = {},
  dedupeKey?: string,
) => {
  const uniqueKey = dedupeKey ?? `viewcontent:${contentCategory}:${contentName}`;

  if (!shouldFireOnce(uniqueKey)) {
    return;
  }

  trackStandardEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
    ...sanitizeMetaEventParams(params),
  });
};

export const trackContact = (
  contactMethod: 'whatsapp' | 'phone',
  source: string,
  params: MetaEventParams = {},
) => {
  trackStandardEvent('Contact', {
    contact_method: contactMethod,
    source,
    ...sanitizeMetaEventParams(params),
  });

  if (contactMethod === 'whatsapp') {
    trackCustomEvent('WhatsAppClick', {
      contact_method: 'whatsapp',
      source,
      ...sanitizeMetaEventParams(params),
    });
    return;
  }

  trackCustomEvent('PhoneClick', {
    contact_method: 'phone',
    source,
    ...sanitizeMetaEventParams(params),
  });
};

export const trackLead = (params: MetaEventParams = {}) => {
  trackStandardEvent('Lead', sanitizeMetaEventParams(params));
};

export const trackServiceClick = (serviceName: string, serviceSlug: string, source = 'service_card') => {
  trackCustomEvent('ServiceClicked', {
    service_name: serviceName,
    service_slug: serviceSlug,
    content_category: 'service',
    content_type: 'service_card',
    source,
  });
};

export const trackProjectClick = (projectName: string, projectCategory: string, source = 'project_grid') => {
  trackCustomEvent('ProjectClicked', {
    project_name: projectName,
    project_category: projectCategory,
    content_category: 'project',
    content_type: 'project_card',
    source,
  });
};

export const trackProjectFilter = (filterName: string, source = 'projects_page') => {
  trackCustomEvent('ProjectFilterClicked', {
    filter_name: filterName,
    project_category: filterName,
    source,
  });
};

export const trackQuoteRequest = (source: string, params: MetaEventParams = {}) => {
  trackCustomEvent('QuoteRequest', {
    source,
    ...sanitizeMetaEventParams(params),
  });
};

export const getMetaPixelStatus = () => ({
  enabled: PIXEL_ENABLED,
  isInitialized: hasInitializedPixel,
  pixelId: PIXEL_ID,
  debug: DEBUG_MODE,
});
