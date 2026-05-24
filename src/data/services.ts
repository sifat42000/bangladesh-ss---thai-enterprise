/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Home, DoorOpen, Hammer } from 'lucide-react';
import { images } from '../assets/images';

export const detailedServices = [
  {
    id: 'ss-stair-railing',
    slug: 'ss-stair-railing',
    title: 'SS Stair Railing',
    bnTitle: 'SS সিঁড়ি রেলিং',
    category: 'SS Work',
    icon: Shield,
    isFeatured: true,
    shortDescription: 'সিঁড়ি, বারান্দা ও প্রতিষ্ঠানের জন্য মজবুত ও সুন্দর SS railing কাজ।',
    longDescription: 'স্টেইনলেস স্টিল রেলিং আপনার জায়গার নিরাপত্তা ও সৌন্দর্য দুইটাই বাড়ায়। আমরা মাপ অনুযায়ী কাস্টম ডিজাইন, ভালো মেটেরিয়াল এবং পরিষ্কার ফিনিশিং সহ কাজ করে থাকি। আমাদের প্রতিটি কাজে ৩০৪ গ্রেড বা তারও ভালো মানের মেটেরিয়াল ব্যবহার করা হয় যা আজীবন টেকসই।',
    heroImage: images.services.ssRailing.hero,
    galleryImages: [
      {
        image: images.services.ssRailing.gallery[0],
        title: 'সিঁড়ির SS রেলিং',
        description: 'বাসা, ফ্ল্যাট ও ডুপ্লেক্স সিঁড়ির জন্য নিরাপদ ও দৃষ্টিনন্দন রেলিং।'
      },
      {
        image: images.services.ssRailing.gallery[1],
        title: 'বারান্দার SS রেলিং',
        description: 'বারান্দার নিরাপত্তা ও সৌন্দর্যের জন্য মাপ অনুযায়ী কাস্টম SS railing।'
      },
      {
        image: images.services.ssRailing.gallery[2],
        title: 'প্রিমিয়াম ফিনিশিং',
        description: 'চকচকে polish, smooth welding এবং পরিষ্কার fitting নিশ্চিত করা হয়।'
      }
    ],
    features: [
      'মাপ অনুযায়ী কাস্টম ডিজাইন',
      'দীর্ঘস্থায়ী ও মজবুত মেটেরিয়াল',
      'চকচকে ও পরিষ্কার ফিনিশিং',
      'মরিচারোধী এস এস মেটেরিয়াল'
    ],
    uses: ['সিঁড়ি', 'বারান্দা', 'ডুপ্লেক্স বাড়ি', 'অফিস', 'শোরুম'],
    whyNeeded: [
      'নিরাপত্তা নিশ্চিত করতে',
      'বাসার সৌন্দর্য বাড়াতে',
      'দীর্ঘদিন কোনো মেইনটেন্যান্স ছাড়া ব্যবহারের জন্য'
    ],
    process: [
      'জায়গার মাপ বা ছবি দেখা',
      'ডিজাইন ও মেটেরিয়াল নির্বাচন',
      'কাজের কোটেশন দেওয়া',
      'তৈরি ও fitting সম্পন্ন করা'
    ]
  },
  {
    id: 'balcony-railing',
    slug: 'balcony-railing',
    title: 'Balcony Railing',
    bnTitle: 'বারান্দা রেলিং',
    category: 'SS Work',
    shortDescription: 'বারান্দার নিরাপত্তা ও সৌন্দর্যের জন্য আধুনিক SS Railing সলিউশন।',
    longDescription: 'বারান্দার জন্য রেলিং শুধুমাত্র সৌন্দর্যের জন্য নয়, বরং এটি আপনার পরিবারের নিরাপত্তা নিশ্চিত করে। আমরা দিচ্ছি আধুনিক ডিজাইনের এমন কিছু রেলিং যা আপনার বারান্দার লুক টোটালি বদলে দেবে।',
    heroImage: images.services.balconyRailing.hero,
    galleryImages: [
      {
        image: images.services.balconyRailing.gallery[0],
        title: 'মডার্ন বারান্দা রেলিং',
        description: 'সিম্পল অথচ প্রিমিয়াম ডিজাইনের বারান্দা রেলিং।'
      }
    ],
    features: [
      'উচ্চ মানের ফিনিশিং',
      'নিখুঁত ওয়েল্ডিং',
      'কাস্টম ডিজাইন অপশন',
      'দ্রুত ডেলিভারি ও ফিটিং'
    ],
    uses: ['বাসার বারান্দা', 'ছাদের সীমানা', 'কমার্শিয়াল টেরেস'],
    whyNeeded: [
      'উম্মুক্ত জায়গার নিরাপত্তা',
      'আধুনিক লুক নিশ্চিত করা',
      'দীর্ঘস্থায়ী স্থায়িত্ব'
    ],
    process: ['জায়গা পরিদর্শন', 'ডিজাইন সিলেকশন', 'কোয়ালিটি চেক', 'ইনস্টলেশন']
  },
  {
    id: 'ss-gate-grill',
    slug: 'ss-gate-grill',
    title: 'SS Gate & Grill',
    bnTitle: 'SS গেট ও গ্রিল',
    category: 'SS Work',
    shortDescription: 'ঘরের বাড়তি নিরাপত্তার জন্য মজবুত এস এস গেট ও গ্রিল সলিউশন।',
    longDescription: 'আপনার প্রিয় ঘরের নিরাপত্তার সাথে আপোষ করবেন না। আমরা তৈরি করি মজবুত ও ড্রিম ডিজাইনের এস এস গেট এবং গ্রিল যা আপনার বাড়িকে করে তুলবে সুরক্ষিত ও আকর্ষণীয়। জং ধরার ভয়হীন আজীবন নিশ্চিন্ত মেটেরিয়াল।',
    heroImage: images.placeholders.service,
    galleryImages: [
      {
        image: images.placeholders.service2,
        title: 'মজবুত এস এস গেট',
        description: 'মেইন এন্ট্রান্সের জন্য ডিজাইনকৃত গর্জিয়াস এস এস গেট।'
      }
    ],
    features: [
      'মরিচারোধী প্রিমিয়াম এস এস',
      'অত্যাধুনিক ওয়েল্ডিং ফিনিশ',
      'হেভি ডিউটি ফ্রেম',
      'কাস্টম ডিজাইন অপশন'
    ],
    uses: ['মেইন গেট', 'বারান্দা গ্রিল', 'জানালা গ্রিল', 'বাউন্ডারি গেট'],
    whyNeeded: [
      'সর্বোচ্চ নিরাপত্তা নিশ্চিতকরণ',
      'দীর্ঘদিন টেকসই রাখা',
      'বাহ্যিক সৌন্দর্য বাড়ানো'
    ],
    process: ['ডিজাইন ক্যাটালগ থেকে পছন্দ', 'জায়গার মাপ নির্ধারণ', 'কাটিং ও ওয়েল্ডিং', 'পলিশ ও ডেলিভারি']
  },
  {
    id: 'thai-aluminium-window',
    slug: 'thai-aluminium-window',
    title: 'Thai Aluminium Window',
    bnTitle: 'থাই অ্যালুমিনিয়াম জানালা',
    category: 'Aluminium Work',
    icon: Home,
    isFeatured: true,
    shortDescription: 'টেকসই ও আধুনিক থাই অ্যালুমিনিয়াম জানালা ও স্লাইডিং সিস্টেম।',
    longDescription: 'আধুনিক বাসা বা অফিসের জন্য থাই অ্যালুমিনিয়াম জানালা একটি আদর্শ পছন্দ। এটি যেমন টেকসই, তেমনি এর মেইনটেন্যান্স খরচও অনেক কম। আমরা দিচ্ছি প্রিমিয়াম কোয়ালিটির গ্লাস ও স্ট্রং অ্যালুমিনিয়াম ফ্রেম।',
    heroImage: images.services.thaiWindow.hero,
    galleryImages: [
      {
        image: images.services.thaiWindow.gallery[0],
        title: 'স্লাইডিং জানালা',
        description: 'মসৃণ চলাচলের জন্য উন্নত মানের স্লাইডিং চাকা ও ফ্রেম।'
      }
    ],
    features: [
      'মজবুত ফ্রেমওয়ার্ক',
      'উন্নত মানের গ্লাস',
      'এয়ারটাইট ও ওয়াটারপ্রুফ',
      'সাউন্ড ইনসুলেশন'
    ],
    uses: ['ডায়নিং রুম', 'বেডরুম', 'অফিস স্পেস', 'হাই রাইজ বিল্ডিং'],
    whyNeeded: [
      'প্রাকৃতিক আলো নিশ্চিত করতে',
      'সহজেই খোলা ও বন্ধ করা যায়',
      'আধুনিক ডেকোরেশন ভ্যালু'
    ],
    process: ['মাপ নেওয়া', 'ফ্রেম তৈরি', 'গ্লাস ফিটিং', 'সাইটে ইনস্টলেশন']
  },
  {
    id: 'thai-door',
    slug: 'thai-door',
    title: 'Thai Door',
    bnTitle: 'থাই দরজা',
    category: 'Aluminium Work',
    shortDescription: 'লাইট ওয়েট ও গর্জিয়াস থাই ডোর সলিউশন বাসা ও অফিসের জন্য।',
    longDescription: 'শৌখিন ও টেকসই দরজার সন্ধানে থাকলে থাই অ্যালুমিনিয়াম ডোর হতে পারে আপনার সেরা পছন্দ। বিশেষ করে বাথরুম, কিচেন বা বারান্দার জন্য এটি অত্যন্ত কার্যকরী। আধুনিক ডিজাইনের এই দরজাতে জং ধরে না এবং পানি লাগলে নষ্ট হয় না।',
    heroImage: images.placeholders.service,
    galleryImages: [
      {
        image: images.placeholders.service2,
        title: 'আধুনিক থাই ডোর',
        description: 'স্টাইলিশ লুক এবং স্মুদ ফিনিশিং।'
      }
    ],
    features: [
      'সম্পূর্ণ মরিচারোধী',
      'হালকা ও টেকসই',
      'পানি ও পোকা থেকে সুরক্ষিত',
      'বাজেট ফ্রেন্ডলি'
    ],
    uses: ['বাথরুম ডোর', 'কিচেন ডোর', 'বারান্দার দরজা', 'অফিস কেবিন'],
    whyNeeded: [
      'দীর্ঘদিন টেকসই সার্ভিস',
      'সহজ পরিষ্কারযোগ্যতা',
      'কম স্পেস ব্যবহার'
    ],
    process: ['কালার ও গ্লাস পছন্দ করা', 'সঠিক মাপ নেওয়া', 'ফ্রেম তৈরি ও ফিটিং', 'লক ও হ্যান্ডেল সেটআপ']
  },
  {
    id: 'aluminium-showcase',
    slug: 'aluminium-showcase',
    title: 'Aluminium Showcase',
    bnTitle: 'অ্যালুমিনিয়াম শোকেস',
    category: 'Aluminium Work',
    shortDescription: 'দোকান বা বাড়ির জন্য কাস্টম অ্যালুমিনিয়াম শোকেস ও ডিসপ্লে।',
    longDescription: 'আপনার মূল্যবান জিনিস বা দোকানের প্রোডাক্ট সুন্দরভাবে সাজিয়ে রাখতে অ্যালুমিনিয়াম শোকেস দারুণ কার্যকর। আমরা দিচ্ছি ক্লিয়ার গ্লাস ও টেকসই ফ্রেমের সমন্বয় যা দীর্ঘ সময় নতুনের মতো থাকবে।',
    heroImage: images.placeholders.service,
    galleryImages: [
      {
        image: images.placeholders.service2,
        title: 'শোরুম শোকেস',
        description: 'পণ্য সাজানোর জন্য আধুনিক ডিসপ্লে সিস্টেম।'
      }
    ],
    features: [
      'ক্লিয়ার গ্লাস ডিসপ্লে',
      'কাস্টম সাইজ ও তাক',
      'মজবুত অ্যালুমিনিয়াম স্ট্রাকচার',
      'লকিং সিস্টেম সুবিধা'
    ],
    uses: ['জুয়েলারি শপ', 'মোবাইল শপ', 'বাসার লিভিং রুম', 'মেডিসিন কর্নার'],
    whyNeeded: [
      'জিনিসপত্র সুরক্ষিত রাখা',
      'সৌন্দর্য বাড়ানো',
      'পণ্য আকর্ষণীয়ভাবে ডিসপ্লে করা'
    ],
    process: ['মাপ অনুযায়ী ডিজাইন', 'ফ্রেম অ্যাসেম্বলি', 'গ্লাস ও র‍্যাক সেটিং', 'ডেলিভারি']
  },
  {
    id: 'glass-door',
    slug: 'glass-door',
    title: 'Glass Door',
    bnTitle: 'গ্লাস ডোর',
    category: 'Glass Solution',
    icon: DoorOpen,
    isFeatured: true,
    shortDescription: 'প্রিমিয়াম ১০/১২ মিমি টেম্পারড গ্লাস ডোর ও ফিটিংস।',
    longDescription: 'আপনার অফিস বা শোরুমের আভিজাত্য বাড়াতে টেম্পারড গ্লাস ডোরের বিকল্প নেই। আমরা দিচ্ছি ইউরোপীয় মানের মজবুত গ্লাস এবং ফ্লোর ডোর স্প্রিং সেট যা বছরের পর বছর সার্ভিস দিবে।',
    heroImage: images.services.glassDoor.hero,
    galleryImages: [
      {
        image: images.services.glassDoor.gallery[0],
        title: 'এন্ট্রান্স গ্লাস ডোর',
        description: 'অফিসের প্রবেশমুখে আধুনিক গ্লাস ডোর সলিউশন।'
      }
    ],
    features: [
      '১০-১২ মিমি পুরুত্বের টেম্পারড গ্লাস',
      'মজবুত হ্যান্ডেল ও লক সিস্টেম',
      'সুন্দর ও মার্জিত ডিজাইন',
      'নিরাপদ ব্যবহার নিশ্চিত করা'
    ],
    uses: ['অফিস মেইন ডোর', 'শোরুম এন্ট্রান্স', 'ডুপ্লেক্স হোম', 'ব্যাংক ও কর্পোরেট বিল্ডিং'],
    whyNeeded: [
      'আভিজাত্য ও আধুনিকতা প্রকাশ করতে',
      'স্বচ্ছ ও খোলামেলা পরিবেশের জন্য',
      'দীর্ঘস্থায়ী ও নিরাপদ ডোর সলিউশন'
    ],
    process: ['মাপ ও ডিজাইন চূড়ান্ত করা', 'গ্লাস টেম্পার করা', 'ফিটিংস অ্যাসেম্বলি', 'ফাইনাল ফিটিং']
  },
  {
    id: 'office-glass-partition',
    slug: 'office-glass-partition',
    title: 'Office Glass Partition',
    bnTitle: 'অফিস গ্লাস পার্টিশন',
    category: 'Office Interior',
    shortDescription: 'অফিসের কাজের পরিবেশ ভাগ করতে আধুনিক গ্লাস পার্টিশন।',
    longDescription: 'আধুনিক অফিস স্পেস ইউটিলাইজেশনের জন্য গ্লাস পার্টিশন সব থেকে প্রফেশনাল মাধ্যম। এটি অফিসকে যেমন খোলামেলা দেখায়, তেমনি কর্মীদের মধ্যে কাজের স্পৃহা বাড়ায়।',
    heroImage: images.services.officePartition.hero,
    galleryImages: [
      {
        image: images.services.officePartition.gallery[0],
        title: 'পার্টিশন ডিজাইন',
        description: 'স্লিম ফ্রেম ব্যবহার করে তৈরি আধুনিক পার্টিশন।'
      }
    ],
    features: [
      'ক্লিয়ার ও ফ্রস্টেড গ্লাস অপশন',
      'অ্যালুমিনিয়াম বা ফ্রেমলেস ডিজাইন',
      'সাউন্ড প্রুফ সুবিধা',
      'সহজেই স্থানান্তরযোগ্য'
    ],
    uses: ['কনফারেন্স রুম', 'ম্যানেজার কেবিন', 'ওপেন অফিস স্পেস'],
    whyNeeded: [
      'অফিসের প্রফেশনালিজম বাড়াতে',
      'শব্দ নিয়ন্ত্রণ ও প্রাইভেসি',
      'স্বল্প সময়ে ইনস্টলেশন সুবিধা'
    ],
    process: ['লেআউট প্ল্যানিং', 'চ্যানেল ইনস্টলেশন', 'গ্লাস প্লেসমেন্ট', 'সিলিং ও ফিনিশিং']
  },
  {
    id: 'shop-front-glass',
    slug: 'shop-front-glass',
    title: 'Shop Front Glass',
    bnTitle: 'শপ ফ্রন্ট গ্লাস',
    category: 'Commercial',
    shortDescription: 'দোকান বা শোরুমের জন্য দৃষ্টিনন্দন গ্লাস ডেকোরেশন।',
    longDescription: 'আপনার শোরুমের সেলস বাড়াতে বাইরের লুক অনেক বড় ভূমিকা রাখে। আমরা দিচ্ছি কাস্টমার ফ্রেন্ডলি শপ-ফ্রন্ট ডিজাইন যা আপনার ব্র্যাণ্ডকে আরও আকর্ষণীয় করবে।',
    heroImage: images.services.shopFront.hero,
    galleryImages: [
      {
        image: images.services.shopFront.gallery[0],
        title: 'শোরুম গ্লাস ফ্রন্ট',
        description: 'ফুল ভিউ গ্লাস ডেকোরーション শোরুম স্পেসের জন্য।'
      }
    ],
    features: [
      'নিরাপদ টেম্পারড গ্লাস',
      'আকর্ষণীয় প্রেজেন্টেশন লুক',
      'মজবুত স্ট্রাকচারাল সাপোর্ট',
      'সহজ ক্লিনিং সুবিধা'
    ],
    uses: ['শッピング মল শপ', 'রোড সাইড শোরুম', 'ব্র্যাণ্ড ডিসপ্লে জোন'],
    whyNeeded: [
      'কাস্টমার আকর্ষণ করতে',
      'প্রোডাক্ট ভিজিবিলিটি বাড়াতে',
      'প্রিমিয়াম শッピング এক্সপেরিয়েন্স'
    ],
    process: ['জায়গা ভিজিট', 'ভিউ প্ল্যান তৈরি', 'ইনস্টলেশন', 'পলিশিং ও ফিনিশিং']
  },
  {
    id: 'custom-design-work',
    slug: 'custom-design-work',
    title: 'Custom Design Work',
    bnTitle: 'কাস্টম ডিজাইন ওয়ার্ক',
    category: 'Special Project',
    shortDescription: 'আপনার কল্পনা ও মাপ অনুযায়ী একদম ইউনিক মেটাল ও গ্লাস ডিজাইন।',
    longDescription: 'মাঝে মাঝে ক্যাটালগের ডিজাইনের বাইরে স্পেশাল কিছু প্রয়োজন হয়। আমরা আপনার আইডিয়া বা মাপ অনুসারে ইউনিক মেটাল স্ট্রাকচার, ডেকোরেশন বা গ্লাসের কাজ করে দিতে সক্ষম। আমাদের দক্ষ কারিগর আপনার স্বপ্নকে বাস্তবে রূপ দিবে।',
    heroImage: images.hero.home,
    galleryImages: [
      {
        image: images.hero.services,
        title: 'কাস্টম প্রজেক্ট',
        description: 'গ্রাহকের পছন্দ অনুযায়ী বিশেষ কাজ।'
      }
    ],
    features: [
      'সম্পূর্ণ ইউনিক ডিজাইন',
      'নিজস্ব কারখানায় প্রোডাকশন',
      'উন্নত মেটেরিয়াল সিলেকশন',
      'প্রফেশনাল ফিনিশিং'
    ],
    uses: ['বিলাসবহুল ইন্টেরিয়র', 'বিশেষ স্থাপত্য নকশা', 'শোরুম ব্র্যান্ডিং', 'ইউনিক ফার্নিচার ফ্রেম'],
    whyNeeded: [
      'ভিন্নধর্মী লুক নিশ্চিত করতে',
      'জায়গার নিখুঁত ব্যবহার',
      'প্রিমিয়াম এক্সক্লুসিভিটি'
    ],
    process: ['সরাসরি আলোচনা', 'ডিজাইন ড্রয়িং তৈরি', 'বাজেট নির্ধারণ', 'নির্মাণ ও ফিটিং']
  },
  {
    id: 'commercial-ss-work',
    slug: 'commercial-ss-work',
    title: 'Commercial SS Work',
    bnTitle: 'কমার্শিয়াল SS কাজ',
    category: 'SS Work',
    shortDescription: 'ফ্যাক্টরি বা হোটেলের জন্য হেভি ডিউটি এস এস কাজ।',
    longDescription: 'বড় বাণিজ্যিক প্রজেক্টের জন্য প্রয়োজন মজবুত ও টেকসই এস এস সলিউশন। আমরা ফ্যাক্টরি, হাসপাতাল এবং হোটেলের জন্য হাই-গ্রেড এস এস স্ট্রাকচার তৈরি করি যা দীর্ঘস্থায়ী পারফরম্যান্স দেয়।',
    heroImage: images.hero.home,
    galleryImages: [
      {
        image: images.placeholders.service,
        title: 'কমার্শিয়াল প্রজেক্ট',
        description: 'শিল্প কারখানার জন্য এস এস ডেকোরেটিভ কাজ।'
      }
    ],
    features: [
      '৩১৬ গ্রেড এস এস ব্যবহারের সুবিধা',
      'হেভি লোড বিয়ারিং ক্যাপাসিটি',
      'ইন্ডাস্ট্রিয়াল স্ট্যান্ডার্ড ওয়েল্ডিং',
      'দ্রুত ডেলিভারি অপশন'
    ],
    uses: ['গার্মেন্টস ফ্যাক্টরি', 'হাসপাতাল', 'ফুড ইন্ডাস্ট্রি', 'শপিং মল'],
    whyNeeded: [
      'টপলি লেভেল ডিউরাবিলিটি',
      'হাইজিন স্ট্যান্ডার্ড বজায় রাখা',
      'মরিচারোধী দীর্ঘস্থায়ী সার্ভিস'
    ],
    process: ['রিকোয়ারমেন্ট অ্যানালাইসিস', 'ডিজাইন অ্যাপ্রুভাল', 'ম্যানুফ্যাকচারিং', 'অন-সাইট ইনস্টলেশন']
  },
  {
    id: 'kitchen-ss-work',
    slug: 'kitchen-ss-work',
    title: 'Kitchen SS Work',
    bnTitle: 'কিচেন SS কাজ',
    category: 'SS Work',
    shortDescription: 'কিচেন রেক, কাউন্টার এবং সিঙ্ক ফিটিং সমাধান।',
    longDescription: 'আধুনিক রান্নাঘরের জন্য এস এস এক্সেসরিজ সব থেকে ভালো পছন্দ। আমরা তৈরি করি পানি ও তাপ সহ্য করার ক্ষমতা সম্পন্ন কিচেন রেক, সেলফ ও স্টোরেজ সলিউশন যা আপনার রান্নাঘরকে করবে পরিষ্কার ও গোছানো।',
    heroImage: images.hero.home,
    galleryImages: [
      {
        image: images.placeholders.service,
        title: 'কিচেন রেক',
        description: 'পাত্র ও মসলা রাখার জন্য কাস্টম এস এস রেক।'
      }
    ],
    features: [
      'সম্পূর্ণ ওয়াটারপ্রুফ',
      'সহজ পরিষ্কারযোগ্যতা',
      'স্মার্ট স্পেস ম্যানেজমেন্ট',
      'তাপ নিরোধক বৈশিষ্ট্য'
    ],
    uses: ['বাসার রান্নাঘর', 'রেস্টুরেন্ট কিচেন', 'হোটেল কিচেন', 'ক্যান্টিন'],
    whyNeeded: [
      'রান্নাঘরের হাইজিন নিশ্চিত করা',
      'জায়গা সাশ্রয়ী ও গোছানো লুক',
      'আজীবন মজবুত সার্ভিস'
    ],
    process: ['কিচেন লেআউট ভিজিট', 'ডিজাইন পছন্দ করা', 'প্রোডাকশন', 'ইনস্টলেশন']
  },
  {
    id: 'hand-railing',
    slug: 'hand-railing',
    title: 'Hand Railing',
    bnTitle: 'হ্যান্ড রেলিং',
    category: 'SS Work',
    shortDescription: 'ওয়াল বা গ্লাসের সাথে টেকসই হ্যান্ড রেলিং সলিউশন।',
    longDescription: 'নিরাপদ যাতায়াতের জন্য হ্যান্ড রেলিং অত্যন্ত জরুরি। বিশেষ করে বয়স্ক বা শিশুদের যাতায়াতের সুবিধার জন্য আমরা মজবুত মেটালিক বা গ্লাস মাউন্টেড হ্যান্ড রেলিং সরবরাহ করি।',
    heroImage: images.services.ssRailing.hero,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'ওয়াল মাউন্টেড রেলিং',
            description: 'বাসার দেয়ালে ফিক্সড করা মজবুত রেলিং।'
        }
    ],
    features: ['এরগোনোমিক ডিজাইন', 'মজবুত গ্রিপ', 'সহজ ইনস্টলেশন', 'বিভিন্ন শেপ ও সাইজ'],
    uses: ['বাসার করিডোর', 'হাঁটার রাস্তা', 'র‍্যাম্প', 'বাথরুম সাপোর্ট'],
    whyNeeded: ['নিরাপদ চলাফেরা নিশ্চিত করা', 'দুর্ঘটনা রোধ করা', 'আধুনিক লুক প্রদান'],
    process: ['মডেল নির্বাচন', 'ফিক্সিং পয়েন্ট নির্ধারণ', 'ইনস্টলেশন']
  },
  {
    id: 'tempered-glass-work',
    slug: 'tempered-glass-work',
    title: 'Tempered Glass Work',
    bnTitle: 'টেম্পারড গ্লাস কাজ',
    category: 'Glass Solution',
    shortDescription: 'নিরাপদ ও শক্তিশালী টেম্পারড গ্লাসের সব ধরণের কাজ।',
    longDescription: 'সাধারণ কাঁচের থেকে টেম্পারড গ্লাস কয়েকগুণ বেশি শক্তিশালী ও নিরাপদ। আমরা দিই প্রিমিয়াম মানের টেম্পারিং সার্ভিস যা সহজে ভাঙ্গে না এবং ভাঙ্গলেও ছোট দানার মতো হয় যা আঘাত হানে না।',
    heroImage: images.services.glassDoor.hero,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'টেম্পারড গ্লাস সীমানা',
            description: 'সেফটি ও সিকিউরিটির জন্য টেম্পারড গ্লাস সলিউশন।'
        }
    ],
    features: ['অত্যধিক মজবুত', 'তাপ সহনশীল', 'নিরাপদ ভঙ্গুর স্টাইল', 'স্বচ্ছ ভিউ'],
    uses: ['বেলকনি রেলিং', 'ছাদের ঘর', 'সেফটি পার্টিশন', 'টেবিল টপ'],
    whyNeeded: ['সর্বোচ্চ সুরক্ষা নিশ্চিত করা', 'আধুনিক স্থাপত্যশৈলী', 'দীর্ঘস্থায়ী স্থায়িত্ব'],
    process: ['মাপ নেওয়া', 'টেম্পারিং প্রসেস', 'ফিনিশিং ও ফিটিং']
  },
  {
    id: 'showroom-glass-decoration',
    slug: 'showroom-glass-decoration',
    title: 'Showroom Glass Decoration',
    bnTitle: 'শোরুম গ্লাস ডেকোরেশন',
    category: 'Glass Solution',
    shortDescription: 'প্রোডাক্ট হাইলাইট করার জন্য স্পেশাল ডিজাইন গ্লাস ডেকোরেশন।',
    longDescription: 'আপনার প্রিয় শোরুমের প্রোডাক্টের সৌন্দর্য কাস্টমারের কাছে সুন্দরভাবে ফুটিয়ে তুলতে গ্লাস ডেকোরেশন দারুণ কার্যকর। আমরা দিচ্ছি আধুনিক লাইটিং সহ গ্লাস ডেকোর সলিউশন।',
    heroImage: images.services.shopFront.hero,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'ডিজাইন ডেকোরেশন',
            description: 'শোরুমের ইন্টেরিয়র গ্লাস কাজ।'
        }
    ],
    features: ['আকর্ষণীয় লুক', 'লাইটিং ফ্রেন্ডলি', 'স্মার্ট ডিসপ্লে', 'কাস্টম কাটিং'],
    uses: ['ব্র্যান্ড শপ', 'জুয়েলারি ফিক্সচার', 'কসমেটিকস শোকেস'],
    whyNeeded: ['বিক্রয় বৃদ্ধিতে সহায়তা', 'ব্র্যান্ড ইমেজ বাড়ানো', 'প্রিমিয়াম শপিং পরিবেশ'],
    process: ['ভিশন ড্রয়িং', 'প্রোডাকশন', 'ইনস্টলেশন']
  },
  {
    id: 'home-interior-work',
    slug: 'home-interior-work',
    title: 'Home Interior Metal & Glass',
    bnTitle: 'হোম ইন্টেরিয়র মেটাল ও গ্লাস',
    category: 'Special Project',
    shortDescription: 'পুরো বাসার ইন্টেরিয়রে মেটাল ও গ্লাসের শৈল্পিক ব্যবহার।',
    longDescription: 'বাসার লুক প্রিমিয়াম ও আকর্ষণীয় করতে এখন মেটাল ও গ্লাসের ব্যবহার অনেক জনপ্রিয়। আমরা আপনার রুমের ডিজাইন অনুযায়ী ইউনিক পার্টিশন, আসবাবপত্র ও লাইটিং ফিক্সচার তৈরি করি।',
    heroImage: images.hero.home,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'বাসার ইন্টেরিয়র',
            description: 'আধুনিক ঘরের ভেতরের মেটাল ও গ্লাস ডেকোর।'
        }
    ],
    features: ['পার্সোনালাইজড ডিজাইন', 'সর্বোত্তম স্পেস ইউটিলাইজেশন', 'বিলাসবহুল ফিনিশিং', 'সহজ মেইনটেন্যান্স'],
    uses: ['ড্রয়িং রুম', 'লিভিং এরিয়া', 'বেডরুম ইন্টেরিয়র'],
    whyNeeded: ['বাসাকে আধুনিক রূপ দিতে', 'কম্ফোর্ট ও আভিজাত্য', 'ইউনিক আইডেন্টিটি'],
    process: ['কন্সাল্টেশন', 'ডিজাইন মোডালিটি', 'এক্সিকিউশন']
  },
  {
    id: 'office-setup',
    slug: 'office-setup',
    title: 'Office Setup',
    bnTitle: 'অফিস সেটআপ',
    category: 'Special Project',
    shortDescription: 'নতুন অফিসের পূর্ণাঙ্গ ডেকোরেশন ও ফার্নিচার সার্ভিস।',
    longDescription: 'একটি প্রোডাক্টিভ অফিসের জন্য প্রয়োজন সঠিক এনভায়রনমেন্ট। আমরা অফিসের গ্লাস পার্টিশন থেকে শুরু করে যাবতীয় মেটাল ও গ্লাস সেটআপ প্রফেশনালি করে থাকি।',
    heroImage: images.services.officePartition.hero,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'অফিস আউটলুক',
            description: 'কর্মীবান্ধব আধুনিক অফিস পরিবেশ।'
        }
    ],
    features: ['প্রফেশনাল ফিনিশ', 'সাশ্রয়ী প্যাকেজ', 'নির্ধারিত সময়ে ডেলিভারি', 'সাউন্ড কন্ট্রোল সুবিধা'],
    uses: ['স্টার্টআপ অফিস', 'কর্পোরেট ফ্লোর', 'কো-ওয়ার্কিং স্পেস'],
    whyNeeded: ['কর্মীদের কাজের গতি বাড়ানো', 'ভিজিটরদের ওপর পজিটিভ ইমপ্যাক্ট', 'ব্র্যান্ড রিপ্রেজেন্টেশন'],
    process: ['লেআউট ডিজাইন', 'বাজেটিং', 'কমপ্লিট সেটআপ']
  },
  {
    id: 'commercial-project-work',
    slug: 'commercial-project-work',
    title: 'Commercial Project Work',
    bnTitle: 'মসজিদ / স্কুল / কমার্শিয়াল প্রজেক্ট',
    category: 'Special Project',
    shortDescription: 'বড় প্রজেক্টের জন্য বিশেষ মেটাল ও গ্লাস সলিউশন।',
    longDescription: 'পাবলিক প্লেস বা বড় ইন্সটিটিউশনে দরকার হেভি ডিউটি ও সিকিউর সলিউশন। আমরা মসজিদ, মাদ্রাসা, স্কুল এবং কমার্শিয়াল বিল্ডিংয়ের জন্য দীর্ঘস্থায়ী গ্লাস ও মেটালিক কাজ করে থাকি।',
    heroImage: images.hero.home,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'মসজিদ প্রজেক্ট',
            description: 'মসজিদ ও মাদ্রাসার জন্য বিশেষ ডেকোরেটিভ কাজ।'
        }
    ],
    features: ['অত্যন্ত টেকসই', 'পাবলিক সেফটি ফোকাসড', 'বড় ভলিউম প্রোডাকশন', 'আজীবন সার্ভিস গ্যারান্টি'],
    uses: ['মসজিদ এন্ট্রান্স', 'স্কুল জানালা', 'লাইব্রেরি গ্লাস রুম'],
    whyNeeded: ['বৃহৎ প্রজেক্টের স্থায়িত্ব', 'নিরাপদ পাবলিক ডোমেইন', 'বাজেট সাশ্রয়ী দীর্ঘমেয়াদী সলিউশন'],
    process: ['বিল্ডিং ডিজাইন রিভিউ', 'স্পেশাল মেটেরিয়াল সিলেকশন', 'প্রোডাকশন ও ফিটিং']
  },
  {
    id: 'aluminium-sliding-window',
    slug: 'aluminium-sliding-window',
    title: 'Aluminium Sliding Window',
    bnTitle: 'অ্যালুমিনিয়াম স্লাইডিং জানালা',
    category: 'Aluminium Work',
    shortDescription: 'অল্প জায়গায় ব্যবহারের জন্য চমৎকার স্লাইডিং জানালা।',
    longDescription: 'আধুনিক বাসা বা ফ্ল্যাটের জন্য স্লাইডিং জানালা অত্যন্ত জনপ্রিয় কারণ এতে জায়গার অপচয় কম হয়। আমরা দিচ্ছি উচ্চ মানের অ্যালুমিনিয়াম চ্যাসি ও উন্নত মানের ড্রাইভ সিস্টেম যা অত্যন্ত স্মুদভাবে কাজ করে।',
    heroImage: images.services.thaiWindow.hero,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'স্মুদ স্লাইডিং জানালা',
            description: 'সবচেয়ে আরামদায়ক ব্যবহারের জন্য স্লাইডিং সিস্টেম।'
        }
    ],
    features: ['জায়গা সাশ্রয়ী', 'সহজ অপারেশন', 'অ্যালুমিনিয়াম কোয়ালিটি', 'মজবুত লক'],
    uses: ['বেডরুম', 'ড্রয়িং রুম জানালা'],
    whyNeeded: ['সহজ যাতায়াত আলো-বাতাস', 'জায়গা বাঁচানো', 'আধুনিক স্থাপত্য মান'],
    process: ['সঠিক মাপ নির্ধারণ', 'চ্যানেল কাটিং', 'গ্লাস ফিটিং', 'ডেলিভারি']
  },
  {
    id: 'aluminium-frame-work',
    slug: 'aluminium-frame-work',
    title: 'Aluminium Frame Work',
    bnTitle: 'অ্যালুমিনিয়াম ফ্রেম কাজ',
    category: 'Aluminium Work',
    shortDescription: 'যেকোনো স্ট্রাকচারের জন্য মজবুত অ্যালুমিনিয়াম ফ্রেম সলিউশন।',
    longDescription: 'মজবুত ও হালকা ওজনের ফ্রেমওয়ার্ক হিসেবে আজ অ্যালুমিনিয়াম অদ্বিতীয়। আমরা যেকোনো ধরণের ইন্ডাস্ট্রিয়াল বা ডোমেস্টিক স্ট্রাকচারের জন্য নিখুঁত অ্যালুমিনিয়াম কাজ করে থাকি।',
    heroImage: images.services.thaiWindow.hero,
    galleryImages: [
        {
            image: images.placeholders.service,
            title: 'স্ট্রাকচারাল ফ্রেম',
            description: 'অ্যালুমিনিয়ামের মজবুত ফ্রেমওয়ার্ক।'
        }
    ],
    features: ['লাইটওয়েট কিন্তু স্ট্রং', 'মরিচারোধী', 'সহজ ইনস্টলেশন', 'বাজেট সাশ্রয়ী'],
    uses: ['ফলস সিলিং', 'পার্টিশন ফ্রেম', 'ডেকোরেটিভ স্ট্রাকচার'],
    whyNeeded: ['অতিরিক্ত ওজন কমাতে', 'দীর্ঘদিন টেকসই রাখা', 'সহজে মেইনটেইনেবল'],
    process: ['ডিজাইন লেআউট', 'ফ্রেম অ্যাসেম্বলি', 'সার্ভিস ও ফিনিশিং']
  }
];

// Re-export as 'services' for unified use
export const services = detailedServices;

export const serviceCategories = [
  {
    title: 'SS / Stainless Steel Work',
    bnTitle: 'এস এস / স্টেইনলেস স্টিল কাজ',
    id: 'ss-work',
    icon: Shield,
    services: detailedServices.filter(s => s.category === 'SS Work')
  },
  {
    title: 'Thai Aluminium Work',
    bnTitle: 'থাই অ্যালুমিনিয়াম কাজ',
    id: 'thai-work',
    icon: Home,
    services: detailedServices.filter(s => s.category === 'Aluminium Work')
  },
  {
    title: 'Glass Work',
    bnTitle: 'গ্লাস সলিউশন',
    id: 'glass-work',
    icon: DoorOpen,
    services: detailedServices.filter(s => s.category === 'Glass Solution')
  },
  {
    title: 'Custom Project Work',
    bnTitle: 'কাস্টম প্রজেক্ট কাজ',
    id: 'custom-work',
    icon: Hammer,
    services: detailedServices.filter(s => s.category === 'Special Project' || s.category === 'Office Interior' || s.category === 'Commercial')
  },
];
