/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { images } from '../assets/images';

export const projects = [
  {
    id: 1,
    title: 'বাসার সিঁড়ির SS রেলিং কাজ',
    category: 'SS রেলিং',
    filter: 'ss-railing',
    location: 'উত্তরা, ঢাকা',
    description: 'আধুনিক ডুপ্লেক্স বাসার জন্য ৩ ইঞ্চি পাইপ এবং গ্লাস কম্বিনেশন রেলিং। নিখুঁত ফিনিশিং এবং সর্বোচ্চ নিরাপত্তার নিশ্চয়তা।',
    image: images.projects.project1,
    tags: ['SS Work', 'Residential', 'Luxury']
  },
  {
    id: 2,
    title: 'বারান্দার প্রিমিয়াম SS রেলিং',
    category: 'SS রেলিং',
    filter: 'ss-railing',
    location: 'বনানী, ঢাকা',
    description: 'মজবুত ও লাক্সারি ডিজাইনের ২.৫ ইঞ্চি এসএস বারান্দা রেলিং। দীর্ঘস্থায়ী ও মরিচারোধী মেটেরিয়াল।',
    image: images.projects.project2,
    tags: ['SS Work', 'Balcony', 'Modern']
  },
  {
    id: 3,
    title: 'দোকানের গ্লাস ডোর ফিটিং',
    category: 'গ্লাস ডোর',
    filter: 'glass-door',
    location: 'যমুনা ফিউচার পার্ক',
    description: '১২মিমি টেম্পারড গ্লাস এবং হায়দ্রাবাদি ফিটিংয়ের গ্লাস ডোর। প্রফেশনাল ইন্সটলেশন।',
    image: images.projects.project3,
    tags: ['Glass Door', 'Commercial', 'Tempered']
  },
  {
    id: 4,
    title: 'অফিস গ্লাস পার্টিশন',
    category: 'অফিস পার্টিশন',
    filter: 'office-partition',
    location: 'মতিঝিল, ঢাকা',
    description: 'অ্যালুমিনিয়াম ফ্রেমলেস গ্লাস পার্টিশন এবং সাউন্ড প্রুুফ সলিউশন। কাজের পরিবেশের জন্য আদর্শ।',
    image: images.projects.project4,
    tags: ['Partition', 'Office', 'Aluminium']
  },
  {
    id: 5,
    title: 'Thai Aluminium Window Installation',
    category: 'থাই জানালা',
    filter: 'thai-window',
    location: 'গুলশান, ঢাকা',
    description: 'প্রিমিয়াম কালার থাই অ্যালুমিনিয়াম স্লাইডিং উইন্ডো প্রজেক্ট। প্রিমিয়াম লুক এবং দীর্ঘস্থায়িত্ব।',
    image: images.projects.project5,
    tags: ['Thai Aluminium', 'Window', 'Premium']
  },
  {
    id: 6,
    title: 'শোরুম ফ্রন্ট গ্লাস কাজ',
    category: 'দোকান/শোরুম',
    filter: 'shop-showroom',
    location: 'মিরপুর, ঢাকা',
    description: 'শোরুমের সামনের অংশের পূর্ণাঙ্গ গ্লাস ডেকোরেশন ও ফিটিং। ব্র্যান্ড ভ্যালু বৃদ্ধিতে সাহায্য করে।',
    image: images.projects.project6,
    tags: ['Commercial', 'Glass Solution', 'Showroom']
  },
  {
    id: 7,
    title: 'কাস্টম অ্যালুমিনিয়াম শোকেস',
    category: 'কাস্টম কাজ',
    filter: 'custom-work',
    location: 'মোহাম্মদপুর, ঢাকা',
    description: 'দোকানের জন্য ক্যাশ কাউন্টার এবং কাস্টম ডিজাইনের শোকেস। মজবুত ও মার্জিত লুক।',
    image: images.projects.project7,
    tags: ['Custom', 'Showcase', 'Aluminium']
  },
  {
    id: 8,
    title: 'বাসার গ্লাস ও অ্যালুমিনিয়াম কম্বাইন কাজ',
    category: 'কাস্টম কাজ',
    filter: 'custom-work',
    location: 'ধানমন্ডি, ঢাকা',
    description: 'ড্রয়িং রুমের জন্য বিশেষ মেটাল ও গ্লাসের পার্টিশন কাজ। ইন্টেরিয়রের সৌন্দর্য বৃদ্ধিতে অনন্য।',
    image: images.placeholders.project,
    tags: ['Residential', 'Custom', 'Glass']
  },
];

export const beforeAfterProjects = [
  {
    id: 1,
    title: 'বারান্দা নবায়ন (Renovation)',
    before: images.beforeAfter.railing.before,
    after: images.beforeAfter.railing.after,
    desc: 'পুরানো মরিচা ধরা গ্রিল পরিবর্তন করে আধুনিক এসএস রেলিং স্থাপন।'
  },
  {
    id: 2,
    title: 'অফিস স্পেস রূপান্তর',
    before: images.beforeAfter.window.before,
    after: images.beforeAfter.window.after,
    desc: 'খোলা জায়গাকে গ্লাস পার্টিশনের মাধ্যমে আধুনিক অফিস কক্ষে রূপান্তর।'
  }
];
