# Meta Pixel Tracking Guide

## Pixel configuration

The project uses the Meta Pixel ID:

`1814362653310742`

Environment variables are defined in `.env.example`:

```bash
VITE_META_PIXEL_ID="1814362653310742"
VITE_META_PIXEL_ENABLED="true"
VITE_META_PIXEL_DEBUG="false"
```

## Initialization

The app initializes the Meta Pixel from the application entry point and also supports SPA route tracking through the layout route effect.

## Event taxonomy

Standard events:
- `PageView`
- `ViewContent`
- `Contact`
- `Lead`

Custom events:
- `RouteView`
- `ViewProjectsClick`
- `ServiceClicked`
- `ProjectClicked`
- `ProjectFilterClicked`
- `QuoteRequest`
- `WhatsAppClick`
- `PhoneClick`

## Source naming

The project uses consistent source names such as:
- `home_hero`
- `home_final_cta`
- `services_page`
- `service_detail`
- `service_card`
- `projects_page`
- `project_grid`
- `project_card`
- `contact_page`
- `floating_button`
- `navbar`
- `footer`

## Consent and privacy

This project currently does not have a consent management system, so the Pixel utility is designed to support consent gating without blocking the app. The utility exposes `grantMetaPixelConsent()` and `revokeMetaPixelConsent()` for future integration where a consent layer is added.

No PII is sent to Meta. Event payloads contain only safe non-personal metadata such as route, source, category, service slug, project category, and CTA names.

## Debugging

Enable debug mode with:

```bash
VITE_META_PIXEL_DEBUG="true"
```

This logs concise Pixel activity to the browser console in development.

## Manual testing

### Browser tools
1. Open the app and verify the Meta Pixel helper script loads.
2. Open the browser console and check `[Meta Pixel]` logs when debug mode is enabled.
3. Use Meta Pixel Helper to confirm `PageView` and custom events fire.
4. Use Meta Events Manager > Test events to validate the event stream.

### Expected flow examples

Home to WhatsApp:
- `PageView`
- `Contact`
- `WhatsAppClick`

Home to Projects:
- `PageView`
- `ViewProjectsClick`

Service click:
- `PageView`
- `ServiceClicked`
- `ViewContent`

Project filtering:
- `PageView`
- `ProjectFilterClicked`

## Important note

`Lead` is not fired on general navigation, service clicks, project clicks, or basic WhatsApp/phone clicks unless a real lead form or completed conversion step exists in the app. This keeps the event taxonomy aligned with Meta guidance and avoids fabricating invalid conversion data.
