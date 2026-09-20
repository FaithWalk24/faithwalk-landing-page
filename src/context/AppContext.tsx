import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  CartItem,
  CustomerProfile,
  CustomerOrder,
  CustomerDownload,
  AppSubscription,
  JournalEntry,
  SanctuaryEvent,
  AppView
} from '../types';
import { FAITHWALK_PRODUCTS, FREE_STARTER_GUIDE_PRODUCT } from '../data/products';

interface AppContextType {
  view: AppView;
  setView: (view: AppView) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotalCount: number;
  cartTotalAmount: number;
  isLoggedIn: boolean;
  customer: CustomerProfile | null;
  downloads: CustomerDownload[];
  orders: CustomerOrder[];
  subscriptions: AppSubscription[];
  journalEntries: JournalEntry[];
  savedEvents: SanctuaryEvent[];
  login: (email: string, displayName?: string) => void;
  logout: () => void;
  subscribeToApp: (
    appId: 'faithwalk-daily' | 'faithwalk-companion'
  ) => void;
  cancelSubscription: (subId: string) => void;
  isSubscribed: (
    appId: 'faithwalk-daily' | 'faithwalk-companion'
  ) => boolean;
  activeAppExperience:
    | 'faithwalk-daily'
    | 'faithwalk-companion'
    | null;
  openAppExperience: (
    appId: 'faithwalk-daily' | 'faithwalk-companion'
  ) => void;
  closeAppExperience: () => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  navigateToHome: () => void;
  navigateToShop: () => void;
  navigateToAccount: () => void;
  navigateToApps: () => void;
  navigateToStarterGuide: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_CUSTOMER_DOWNLOADS: CustomerDownload[] = [
  {
    id: 'dl-1',
    productName: 'FaithWalk 30-Day Adult_Journal',
    fileTitle: 'FaithWalk-30-Day-Adult-Journal-Interactive-Edition.pdf',
    downloadUrl: 'https://faithwalk-journal.com/my-account/downloads/',
    accessExpiry: 'Never',
    downloadCount: 'Unlimited',
    fileFormat: 'PDF (Interactive & Print)',
    size: '14.2 MB',
  },
  {
    id: 'dl-2',
    productName: 'FaithWalk Journey Starter Guide — FREE',
    fileTitle: 'FaithWalk-Journey-Starter-Guide-Edition-One.pdf',
    downloadUrl: 'https://faithwalk-journal.com/my-account/downloads/',
    accessExpiry: 'Never',
    downloadCount: 'Unlimited',
    fileFormat: 'PDF',
    size: '4.8 MB',
  },
];

const DEFAULT_CUSTOMER_ORDERS: CustomerOrder[] = [
  {
    id: 'ord-1042',
    orderNumber: '#1042',
    date: 'September 12, 2026',
    status: 'Completed',
    total: 'R99.00',
    itemCount: 1,
    items: [
      {
        productName: 'FaithWalk 30-Day Adult_Journal',
        quantity: 1,
        price: 'R99.00',
      },
    ],
    paymentMethod: 'PayFast Secure (Credit / Debit Card)',
  },
  {
    id: 'ord-1018',
    orderNumber: '#1018',
    date: 'September 2, 2026',
    status: 'Completed',
    total: 'R0.00',
    itemCount: 1,
    items: [
      {
        productName: 'FaithWalk Journey Starter Guide — FREE',
        quantity: 1,
        price: 'R0.00',
      },
    ],
    paymentMethod: 'Free Order (Instant Access)',
  },
];

const DEFAULT_SUBSCRIPTIONS: AppSubscription[] = [
  {
    id: 'sub-daily-01',
    appId: 'faithwalk-daily',
    appName: 'FaithWalk Daily',
    plan: 'Personal Spiritual Growth Sanctuary',
    price: 'R79.00 / month',
    billingCycle: 'monthly',
    status: 'active',
    startDate: 'September 1, 2026',
    renewalDate: 'October 1, 2026',
    autoRenew: true,
    features: [
      'Daily Scripture & AI Devotional Reflection',
      'Audio Text-to-Speech contemplation',
      'SOAP Journal Engine & Export',
      '6-Phase Discipleship Progression',
    ],
  },
  {
    id: 'sub-companion-02',
    appId: 'faithwalk-companion',
    appName: 'FaithWalk Daily Companion',
    plan: '180-Day Discipleship & Transformation Curriculum',
    price: 'R149.00 / month',
    billingCycle: 'monthly',
    status: 'inactive',
    startDate: 'Not Subscribed',
    renewalDate: 'N/A',
    autoRenew: false,
    features: [
      'Complete 180-Day Curriculum Across 6 Phases',
      'Multi-Translation Bible (NIV, ESV, NKJV, CSB, NLT)',
      'Fellowship Teams & Intercession Counters',
      'Local & Global Gatherings RSVP',
    ],
  },
];

const DEFAULT_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'entry-1',
    date: 'September 18, 2026',
    passage: 'Philippians 4:6–7',
    scripture:
      'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    observation:
      'Paul links peace not to the absence of trouble, but to the practice of thankful petition.',
    application:
      'Release anxieties early in the morning through specific written prayers.',
    prayer:
      'Father, quiet my restless thoughts with Your surpassing peace today.',
    tags: ['Peace', 'Anxiety', 'Gratitude'],
  },
  {
    id: 'entry-2',
    date: 'September 16, 2026',
    passage: 'Psalm 23:1–3',
    scripture:
      'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.',
    observation:
      'Spiritual restoration requires stillness and submission to the Shepherd.',
    application:
      'Schedule 15 minutes of quiet solitude before the work day begins.',
    prayer:
      'Lord, lead me beside still waters and restore my tired spirit.',
    tags: ['Rest', 'Trust', 'Shepherd'],
  },
];

const DEFAULT_SAVED_EVENTS: SanctuaryEvent[] = [
  {
    id: 'ev-1',
    title: 'Spring Worship & Prayer Night',
    date: 'October 4, 2026',
    time: '19:00 SAST',
    location: 'FaithWalk Sanctuary & Online Stream',
    type: 'Worship Night',
    rsvpStatus: 'going',
  },
  {
    id: 'ev-2',
    title: '180-Day Discipleship Cohort Gathering',
    date: 'October 15, 2026',
    time: '18:30 SAST',
    location: 'Cape Town Central & Zoom Fellowship Room',
    type: 'Gathering',
    rsvpStatus: 'interested',
  },
];

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [view, setView] = useState<AppView>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [activeAppExperience, setActiveAppExperience] = useState<
    'faithwalk-daily' | 'faithwalk-companion' | null
  >(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('faithwalk_cart');

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}

    return [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('faithwalk_logged_in') === 'true';
    } catch {
      return false;
    }
  });

  const [customer, setCustomer] =
    useState<CustomerProfile | null>(() => {
      try {
        const saved = localStorage.getItem('faithwalk_customer');

        if (saved) {
          return JSON.parse(saved);
        }
      } catch {}

      return null;
    });

  const [subscriptions, setSubscriptions] =
    useState<AppSubscription[]>(() => {
      try {
        const saved = localStorage.getItem(
          'faithwalk_subscriptions'
        );

        if (saved) {
          return JSON.parse(saved);
        }
      } catch {}

      return DEFAULT_SUBSCRIPTIONS;
    });

  useEffect(() => {
    try {
      localStorage.setItem(
        'faithwalk_cart',
        JSON.stringify(cart)
      );
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'faithwalk_subscriptions',
        JSON.stringify(subscriptions)
      );
    } catch {}
  }, [subscriptions]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          product,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.product.id !== productId
      )
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotalAmount = cart.reduce(
    (total, item) =>
      total + item.product.priceAmount * item.quantity,
    0
  );

  const login = (
    email: string,
    displayName?: string
  ) => {
    const name = displayName || email.split('@')[0];

    const profile: CustomerProfile = {
      id:
        'fw-user-' +
        Math.random().toString(36).substring(2, 9),
      email,
      firstName: name.split(' ')[0] || name,
      lastName: name.split(' ')[1] || '',
      displayName: name,
      discipleshipPhase: 2,
      discipleshipPhaseName:
        'Rooted & Established (Days 31–60)',
      prayerStreak: 14,
      consistencyPercentage: 92,
      totalJournalEntries: 18,
      billingAddress: {
        addressLine1: '14 Grace Avenue',
        city: 'Cape Town',
        province: 'Western Cape',
        postalCode: '8001',
        country: 'South Africa',
      },
    };

    setIsLoggedIn(true);
    setCustomer(profile);

    try {
      localStorage.setItem(
        'faithwalk_logged_in',
        'true'
      );

      localStorage.setItem(
        'faithwalk_customer',
        JSON.stringify(profile)
      );
    } catch {}
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCustomer(null);

    try {
      localStorage.removeItem(
        'faithwalk_logged_in'
      );

      localStorage.removeItem(
        'faithwalk_customer'
      );
    } catch {}
  };

  const subscribeToApp = (
    appId: 'faithwalk-daily' | 'faithwalk-companion'
  ) => {
    setSubscriptions((prev) =>
      prev.map((sub) =>
        sub.appId === appId
          ? {
              ...sub,
              status: 'active',
              startDate: 'Today',
              renewalDate: 'In 30 days',
              autoRenew: true,
            }
          : sub
      )
    );

    if (!isLoggedIn) {
      login(
        'subscriber@faithwalk-journal.com',
        'FaithWalk Pilgrim'
      );
    }

    setActiveAppExperience(appId);
  };

  const cancelSubscription = (subId: string) => {
    setSubscriptions((prev) =>
      prev.map((sub) =>
        sub.id === subId
          ? {
              ...sub,
              status: 'inactive',
              autoRenew: false,
            }
          : sub
      )
    );
  };

  const isSubscribed = (
    appId: 'faithwalk-daily' | 'faithwalk-companion'
  ) => {
    const sub = subscriptions.find(
      (s) => s.appId === appId
    );

    return sub
      ? sub.status === 'active'
      : false;
  };

  const openAppExperience = (
    appId: 'faithwalk-daily' | 'faithwalk-companion'
  ) => {
    setActiveAppExperience(appId);
  };

  const closeAppExperience = () => {
    setActiveAppExperience(null);
  };

  const navigateToHome = () => {
    setView('home');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // WooCommerce is the live FaithWalk storefront.
  // Do not open the old internal Vercel shop.
  const navigateToShop = () => {
    window.location.href =
      'https://faithwalk-journal.com/shop/';
  };

  const navigateToAccount = () => {
    setView('account');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToApps = () => {
    if (view !== 'home') {
      setView('home');

      setTimeout(() => {
        const el =
          document.getElementById('digital-apps');

        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      const el =
        document.getElementById('digital-apps');

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  const navigateToStarterGuide = () => {
    if (view !== 'home') {
      setView('home');

      setTimeout(() => {
        const el =
          document.getElementById('starter-guide');

        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      const el =
        document.getElementById('starter-guide');

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        view,
        setView,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotalCount,
        cartTotalAmount,
        isLoggedIn,
        customer,
        downloads: DEFAULT_CUSTOMER_DOWNLOADS,
        orders: DEFAULT_CUSTOMER_ORDERS,
        subscriptions,
        journalEntries: DEFAULT_JOURNAL_ENTRIES,
        savedEvents: DEFAULT_SAVED_EVENTS,
        login,
        logout,
        subscribeToApp,
        cancelSubscription,
        isSubscribed,
        activeAppExperience,
        openAppExperience,
        closeAppExperience,
        selectedProduct,
        setSelectedProduct,
        navigateToHome,
        navigateToShop,
        navigateToAccount,
        navigateToApps,
        navigateToStarterGuide,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'useApp must be used within an AppProvider'
    );
  }

  return context;
};
