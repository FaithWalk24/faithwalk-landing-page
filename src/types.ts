export interface Product {
  id: string;
  productName: string;
  price: string; // Formatted in ZAR, e.g. "R99.00"
  priceAmount: number;
  currency: string;
  imageUrl: string;
  productUrl: string;
  description: string;
  badge?: string;
  isFree?: boolean;
  category?: string;
  highlights?: string[];
  pageCount?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDownload {
  id: string;
  productName: string;
  fileTitle: string;
  downloadUrl: string;
  accessExpiry: string;
  downloadCount: string;
  fileFormat: string;
  size: string;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Completed' | 'Processing' | 'On hold';
  total: string;
  itemCount: number;
  items: {
    productName: string;
    quantity: number;
    price: string;
  }[];
  paymentMethod: string;
}

export interface AppSubscription {
  id: string;
  appId: 'faithwalk-daily' | 'faithwalk-companion';
  appName: string;
  plan: string;
  price: string;
  billingCycle: 'monthly' | 'annual';
  status: 'active' | 'inactive' | 'trial';
  startDate: string;
  renewalDate: string;
  autoRenew: boolean;
  features: string[];
}

export interface JournalEntry {
  id: string;
  date: string;
  passage: string;
  scripture: string;
  observation: string;
  application: string;
  prayer: string;
  tags: string[];
}

export interface SanctuaryEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Gathering' | 'Worship Night' | 'Retreat' | 'Conference';
  rsvpStatus: 'going' | 'interested' | 'none';
}

export interface CustomerProfile {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  discipleshipPhase: number;
  discipleshipPhaseName: string;
  prayerStreak: number;
  consistencyPercentage: number;
  totalJournalEntries: number;
  billingAddress: {
    addressLine1: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
}

export type AppView = 'home' | 'shop' | 'account' | 'digital-apps' | 'starter-guide';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
