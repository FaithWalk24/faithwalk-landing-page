import { Product } from '../types';

/**
 * =========================================================================
 * FAITHWALK JOURNAL — OFFICIAL WOOCOMMERCE PRODUCT DATA
 * =========================================================================
 * Source: https://faithwalk-journal.com/shop/
 * Currency: South African Rand (ZAR)
 * Note: All information is retrieved directly from published WooCommerce listings.
 * Do not invent products, prices, discounts, or images.
 * =========================================================================
 */

export const FREE_STARTER_GUIDE_PRODUCT: Product = {
  id: 'fw-starter-free',
  productName: 'FaithWalk Journey Starter Guide — FREE',
  price: 'R0.00',
  priceAmount: 0.0,
  currency: 'ZAR',
  imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/FaithWalk-Journal-Cover-One.png',
  productUrl: 'https://faithwalk-journal.com/product/faithwalk-journey-starter-guide-free/',
  description: 'A free FaithWalk starter guide with Scripture, reflection, prayer, gratitude, and faith-in-action. Instant digital PDF download.',
  badge: 'Free Starter Guide',
  isFree: true,
};

export const FAITHWALK_PRODUCTS: Product[] = [
  {
    id: 'fw-adults-30',
    productName: 'FaithWalk 30-Day Adult_Journal',
    price: 'R99.00',
    priceAmount: 99.0,
    currency: 'ZAR',
    imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/Adults-Journal-cover.png',
    productUrl: 'https://faithwalk-journal.com/product/faithwalk-30-day-adult_journal/',
    description: '30 days of Scripture, guided reflection, prayer and faith action to help you grow closer to God — one day at a time. Instant digital PDF download.',
    badge: '30-Day Guided',
    isFree: false,
  },
  {
    id: 'fw-family-bundle',
    productName: 'FaithWalk Family Bundle — Christian Journal Collection',
    price: 'R199.00',
    priceAmount: 199.0,
    currency: 'ZAR',
    imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/Faithwalk-Family-Journal-Bundle-600.jpg',
    productUrl: 'https://faithwalk-journal.com/product/faithwalk-family-bundle-christian-journal-collection/',
    description: 'A FaithWalk Christian journal collection for Kids, Teens, Young Adults and Adults. Digital PDF editions for the entire home.',
    badge: 'Complete Collection',
    isFree: false,
  },
  {
    id: 'fw-young-adults-90',
    productName: 'FaithWalk Young Adult Journal — 90-Day Christian Guided Journal',
    price: 'R99.00',
    priceAmount: 99.0,
    currency: 'ZAR',
    imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/FaithWalk-Young-Adults-Cover.png',
    productUrl: 'https://faithwalk-journal.com/product/faithwalk-young-adult-journal-90-day-christian-guided-journal/',
    description: 'A guided Christian journal for young adults navigating faith, purpose, prayer, and everyday life with weekly biblical reflections.',
    badge: '90-Day Guided',
    isFree: false,
  },
  {
    id: 'fw-teens-60',
    productName: 'FaithWalk Teens Journal — 60-Day Christian Guided Journal',
    price: 'R149.00',
    priceAmount: 149.0,
    currency: 'ZAR',
    imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/FaithWalk-Teens-Cover.png',
    productUrl: 'https://faithwalk-journal.com/product/faithwalk-teens-journal-60-day-christian-guided-journal/',
    description: 'A guided Christian journal helping teens grow through Scripture, reflection, prayer and gratitude. Builds lifelong spiritual habits.',
    badge: '60-Day Guided',
    isFree: false,
  },
  {
    id: 'fw-kids-30',
    productName: 'FaithWalk Kids Journal — 30-Day Christian Devotional Journal',
    price: 'R179.00',
    priceAmount: 179.0,
    currency: 'ZAR',
    imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/ChatGPT-Image-Aug-31-2026-06_45_43-PM.png',
    productUrl: 'https://faithwalk-journal.com/product/faithwalk-kids-journal-30-day-christian-devotional-journal/',
    description: 'A guided Christian journal helping children build habits of Scripture, prayer and gratitude with engaging daily prompts.',
    badge: 'Kids Devotional',
    isFree: false,
  },
  {
    id: 'fw-starter-free-shop',
    productName: 'FaithWalk Journey Starter Guide — FREE',
    price: 'R0.00',
    priceAmount: 0.0,
    currency: 'ZAR',
    imageUrl: 'https://faithwalk-journal.com/wp-content/uploads/2026/09/FaithWalk-Journal-Cover-One.png',
    productUrl: 'https://faithwalk-journal.com/product/faithwalk-journey-starter-guide-free/',
    description: 'A free FaithWalk starter guide with Scripture, reflection, prayer, gratitude, and faith-in-action. Perfect for starting today.',
    badge: 'Free Digital Download',
    isFree: true,
  },
];
