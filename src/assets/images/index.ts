/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Logo Imports
import logoMain from "./logo/logo.jpg";
import logoIcon from "./logo/logo.jpg";

// Hero Imports (updated to use newly added images in the hero folder)
import heroChat1 from "./hero/ChatGPT Image May 19, 2026, 05_09_15 PM.jpg";
import heroChat2 from "./hero/ChatGPT Image May 19, 2026, 05_09_24 PM.jpg";
import heroChat3 from "./hero/ChatGPT Image May 19, 2026, 05_09_31 PM.jpg";
import heroChat4 from "./hero/ChatGPT Image May 19, 2026, 05_09_39 PM.jpg";
import heroChat5 from "./hero/ChatGPT Image May 19, 2026, 05_09_51 PM.jpg";
// If you add more hero images later, update these imports accordingly.

// Service Imports - SS Railing
import ssRailingHero1 from "./services/ss-railing/hero-1.jpg";
import ssRailingHero2 from "./services/ss-railing/hero-2.jpg";
import ssRailingG1 from "./services/ss-railing/gallery-1.jpg";
import ssRailingG2 from "./services/ss-railing/gallery-2.jpg";

// Service Imports - Balcony
import balconyHero1 from "./services/balcony-railing/hero-1.jpg";
import balconyHero2 from "./services/balcony-railing/hero-2.jpg";
import balcony1 from "./services/balcony-railing/gallery-1.jpg";
import balcony2 from "./services/balcony-railing/gallery-2.jpg";

// Service Imports - Thai Window
import thaiWindowHero1 from "./services/thai-window/hero-1.jpg";
import thaiWindowHero2 from "./services/thai-window/hero-2.jpg";
import thaiWindow1 from "./services/thai-window/gallery-1.jpg";
import thaiWindow2 from "./services/thai-window/gallery-2.jpg";

// Service Imports - Glass Door
import glassDoorHero1 from "./services/glass-door/hero-1.jpg";
import glassDoorHero2 from "./services/glass-door/hero-2.jpg";
import glassDoor1 from "./services/glass-door/gallery-1.jpg";
import glassDoor2 from "./services/glass-door/gallery-2.jpg";

// Service Imports - Office Partition
import officePartitionHero1 from "./services/office-partition/hero-1.jpg";
import officePartitionHero2 from "./services/office-partition/hero-2.jpg";
import officePartition1 from "./services/office-partition/gallery-1.jpg";
import officePartition2 from "./services/office-partition/gallery-2.jpg";

// Service Imports - Shop Front
import shopFrontHero1 from "./services/shop-front/hero-1.jpg";
import shopFrontHero2 from "./services/shop-front/hero-2.jpg";
import shopFront1 from "./services/shop-front/gallery-1.jpg";
import shopFront2 from "./services/shop-front/gallery-2.jpg";

// Projects
import project1 from "./projects/project-1.jpg";
import project2 from "./projects/project-2.jpg";
import project3 from "./projects/project-3.jpg";
import project4 from "./projects/project-4.jpg";
import project5 from "./projects/project-5.jpg";
import project6 from "./projects/project-6.jpg";
import project7 from "./projects/project-7.jpg";

// Before-After
import railingBefore from "./before-after/railing-before.jpg";
import railingAfter from "./before-after/railing-after.jpg";
import windowBefore from "./before-after/window-before.jpg";
import windowAfter from "./before-after/window-after.jpg";

// Backgrounds
import premiumBg from "./backgrounds/premium-bg.jpg";
import metalTexture from "./backgrounds/metal-texture.jpg";
import ctaBg from "./backgrounds/cta-bg.jpg";

// Placeholders
import servicePlaceholder from "./placeholders/service-placeholder-1.jpg";
import servicePlaceholder2 from "./placeholders/service-placeholder-2.jpg";
import projectPlaceholder from "./placeholders/project-placeholder.jpg";
import imagePlaceholder from "./placeholders/image-placeholder.jpg";

/**
 * Image Registry
 * All website images are stored in src/assets/images. 
 * Managed centralized mapping for better optimization and organization.
 */
export const images = {
  logos: {
    main: logoMain,
    icon: logoIcon,
  },

  hero: {
    home: heroChat1,
    about: heroChat2,
    services: heroChat3,
    projects: heroChat4,
    contact: heroChat5,
    quote: imagePlaceholder,
  },

  services: {
    ssRailing: {
      hero: ssRailingHero1,
      hero2: ssRailingHero2,
      gallery: [ssRailingG1, ssRailingG2],
    },
    balconyRailing: {
      hero: balconyHero1,
      hero2: balconyHero2,
      gallery: [balcony1, balcony2],
    },
    thaiWindow: {
      hero: thaiWindowHero1,
      hero2: thaiWindowHero2,
      gallery: [thaiWindow1, thaiWindow2],
    },
    glassDoor: {
      hero: glassDoorHero1,
      hero2: glassDoorHero2,
      gallery: [glassDoor1, glassDoor2],
    },
    officePartition: {
      hero: officePartitionHero1,
      hero2: officePartitionHero2,
      gallery: [officePartition1, officePartition2],
    },
    shopFront: {
      hero: shopFrontHero1,
      hero2: shopFrontHero2,
      gallery: [shopFront1, shopFront2],
    },
  },

  projects: {
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
  },

  beforeAfter: {
    railing: { before: railingBefore, after: railingAfter },
    window: { before: windowBefore, after: windowAfter },
  },

  backgrounds: {
    premium: premiumBg,
    metal: metalTexture,
    cta: ctaBg,
  },

  placeholders: {
    service: servicePlaceholder,
    service2: servicePlaceholder2,
    project: projectPlaceholder,
    image: imagePlaceholder,
  },
};
