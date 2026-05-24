/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/contactInfo';
import { images } from '../assets/images';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = images.hero.home
}) => {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - Best SS & Thai Aluminium Solution in Bangladesh`;
    
  const defaultDescription = `Bangladesh SS & Thai Enterprise provides high-quality SS railing, Thai aluminium windows, glass door fittings, and office partitions in Bangladesh. Premium quality and best price guaranteed.`;
  
  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Keywords */}
      <meta name="keywords" content="SS railing Bangladesh, Stainless steel railing price, Thai aluminium window price in BD, Glass door fitting Bangladesh, Aluminum window BD, SS grill design, Balcony railing SS, Office glass partition Dhaka, বাংলাদেশ এস এস এন্ড থাই এন্টারপ্রাইজ, এস এস রেলিং প্রাইস, থাই জানালা, গ্লাস ডোর, অ্যালুমিনিয়াম কাজ, শপ ফ্রন্ট গ্লাস" />
    </Helmet>
  );
};

export default SEO;
