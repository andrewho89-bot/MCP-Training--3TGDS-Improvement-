import { ServiceItem, ChannelItem, NewsArticle, TeamMember, ProductAsset } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'electronic',
    iconName: 'QrCode',
    titleKey: 'service_electronic_title',
    descKey: 'service_electronic_desc',
    detailKey: 'Converts physical tickets, coupons, vouchers, and membership cards into cryptographically signed digital tokens with dynamic anti-screenshot QR codes.',
    featuresKey: [
      'Dynamic anti-counterfeit QR codes updated every 30 seconds',
      'Instant Apple Wallet & Google Pay pass integration',
      'Zero-latency offline validation support for gate turnstiles',
      'Batch issuance API capable of 10,000 passes / minute'
    ],
    badge: 'Core Protocol'
  },
  {
    id: 'quality',
    iconName: 'ShoppingBag',
    titleKey: 'service_quality_title',
    descKey: 'service_quality_desc',
    detailKey: 'Direct access to 5,000+ verified Asian and global travel inventory items, including high-demand theme park entry, bullet train passes, and Michelin dining vouchers.',
    featuresKey: [
      'Direct API contracts with major attractions & theme parks',
      'Guaranteed inventory allocation during peak seasons',
      'Wholesale pricing with real-time margin management',
      'Multi-tier merchant authorization levels'
    ],
    badge: '5,000+ Products'
  },
  {
    id: 'trust',
    iconName: 'ShieldCheck',
    titleKey: 'service_trust_title',
    descKey: 'service_trust_desc',
    detailKey: 'Built on Travel Trust Ticket (TTT) standard. Ensures zero double-redemption, multi-sig authorization between channel OTAs and local merchants, and instant cryptographic settlement.',
    featuresKey: [
      'TTT cryptographic verification protocol',
      'Automated chargeback prevention & audit logging',
      'Real-time status callback hooks across channels',
      'Escrow fund protection for supplier payout security'
    ],
    badge: 'TTT Standard'
  },
  {
    id: 'channel',
    iconName: 'Globe2',
    titleKey: 'service_channel_title',
    descKey: 'service_channel_desc',
    detailKey: 'Single API connection unlocks top-tier Asian & international distribution networks including Trip.com, Fliggy, Meituan, Shopee, ezTravel, and banking reward platforms.',
    featuresKey: [
      '15+ Major global OTA connections out of the box',
      'Automated inventory & price updates across all connected storefronts',
      'Unified booking notification pipeline',
      'Channel-specific promotion and voucher bundle controls'
    ],
    badge: '15+ Channels'
  },
  {
    id: 'operations',
    iconName: 'Layers',
    titleKey: 'service_operations_title',
    descKey: 'service_operations_desc',
    detailKey: 'Centralized cloud operations suite allowing merchants to monitor multi-channel sales, set regional price parity rules, and control live inventory quotas in real time.',
    featuresKey: [
      'Omni-channel sales reporting & dynamic analytics dashboard',
      'Custom rate plans and seasonal pricing rule engine',
      'Automated ticket redemption turnstile hardware bridge',
      'Multi-user role access controls & audit logs'
    ],
    badge: 'Unified SaaS'
  },
  {
    id: 'management',
    iconName: 'Sliders',
    titleKey: 'service_management_title',
    descKey: 'service_management_desc',
    detailKey: 'Simplifies complex cross-border financial reconciliation, automated refund processing according to merchant cancellation policies, and multi-currency tax compliance.',
    featuresKey: [
      'Automated multi-currency clearing (TWD, USD, JPY, KRW, SGD, EUR)',
      '1-click automated refund processing based on policy rules',
      'Cross-border e-invoice generation and tax compliance reports',
      'Dedicated 24/7 technical and merchant support desk'
    ],
    badge: 'Fintech Automation'
  }
];

export const channelsData: ChannelItem[] = [
  {
    id: 'trip',
    name: 'Trip.com Group',
    category: 'OTA',
    region: 'Global / APAC',
    activeProducts: 3200,
    syncLatency: '< 150ms',
    supportedCurrencies: ['USD', 'TWD', 'HKD', 'JPY', 'SGD', 'EUR'],
    status: 'High Volume',
    logoText: 'Trip.com',
    descriptionKey: 'Global online travel giant with over 400M users across Europe, Asia, and North America.',
    accentColor: '#2563eb'
  },
  {
    id: 'meituan',
    name: 'Meituan Dianping',
    category: 'E-Commerce',
    region: 'Mainland China',
    activeProducts: 4100,
    syncLatency: '< 100ms',
    supportedCurrencies: ['CNY', 'TWD', 'USD'],
    status: 'Online',
    logoText: 'Meituan',
    descriptionKey: 'China’s leading lifestyle & local service super-app with 680M+ active booking users.',
    accentColor: '#f59e0b'
  },
  {
    id: 'fliggy',
    name: 'Fliggy (Alibaba)',
    category: 'OTA',
    region: 'Greater China',
    activeProducts: 3800,
    syncLatency: '< 120ms',
    supportedCurrencies: ['CNY', 'HKD', 'USD'],
    status: 'High Volume',
    logoText: 'Fliggy',
    descriptionKey: 'Alibaba Group’s premier online travel platform serving high-volume outbound Chinese tourists.',
    accentColor: '#ef4444'
  },
  {
    id: 'eztravel',
    name: 'ezTravel',
    category: 'OTA',
    region: 'Taiwan',
    activeProducts: 2400,
    syncLatency: '< 80ms',
    supportedCurrencies: ['TWD', 'USD'],
    status: 'Connected',
    logoText: 'ezTravel',
    descriptionKey: 'Taiwan’s pioneer online travel agency with leading market share in domestic and outbound tickets.',
    accentColor: '#10b981'
  },
  {
    id: 'shopee',
    name: 'Shopee Digital Goods',
    category: 'E-Commerce',
    region: 'Southeast Asia & Taiwan',
    activeProducts: 1900,
    syncLatency: '< 200ms',
    supportedCurrencies: ['SGD', 'TWD', 'MYR', 'THB', 'PHP', 'VND'],
    status: 'Online',
    logoText: 'Shopee',
    descriptionKey: 'Southeast Asia’s top e-commerce marketplace distributing travel passes and e-vouchers.',
    accentColor: '#ea580c'
  },
  {
    id: 'taobao',
    name: 'Taobao Travel',
    category: 'E-Commerce',
    region: 'Greater China',
    activeProducts: 2800,
    syncLatency: '< 180ms',
    supportedCurrencies: ['CNY', 'HKD'],
    status: 'Connected',
    logoText: 'Taobao',
    descriptionKey: 'Alibaba e-commerce platform reaching millions of independent travelers.',
    accentColor: '#f97316'
  },
  {
    id: 'qunar',
    name: 'Qunar.com',
    category: 'OTA',
    region: 'China & Asia',
    activeProducts: 2100,
    syncLatency: '< 160ms',
    supportedCurrencies: ['CNY', 'USD'],
    status: 'Connected',
    logoText: 'Qunar',
    descriptionKey: 'Leading travel search and booking service across mainland and regional Asia.',
    accentColor: '#06b6d4'
  },
  {
    id: 'taishin',
    name: 'Taishin Bank Rewards',
    category: 'Bank',
    region: 'Taiwan',
    activeProducts: 1200,
    syncLatency: '< 90ms',
    supportedCurrencies: ['TWD'],
    status: 'Online',
    logoText: 'Taishin Bank',
    descriptionKey: 'Major banking loyalty reward program enabling credit card points redemption for e-vouchers.',
    accentColor: '#dc2626'
  },
  {
    id: 'everrich',
    name: 'Ever Rich Duty Free',
    category: 'E-Commerce',
    region: 'Taiwan & Asia Airport',
    activeProducts: 850,
    syncLatency: '< 110ms',
    supportedCurrencies: ['TWD', 'USD', 'JPY'],
    status: 'Connected',
    logoText: 'Ever Rich',
    descriptionKey: 'Premier duty free shopping network offering integrated digital airport shopping vouchers.',
    accentColor: '#8b5cf6'
  },
  {
    id: 'happygo',
    name: 'HAPPY GO',
    category: 'Fintech',
    region: 'Taiwan',
    activeProducts: 1600,
    syncLatency: '< 130ms',
    supportedCurrencies: ['TWD'],
    status: 'Connected',
    logoText: 'HAPPY GO',
    descriptionKey: 'Largest multi-industry loyalty points system in Taiwan with 10M+ active members.',
    accentColor: '#ec4899'
  },
  {
    id: 'kkday',
    name: 'KKday Travel',
    category: 'OTA',
    region: 'Global / East Asia',
    activeProducts: 3100,
    syncLatency: '< 110ms',
    supportedCurrencies: ['TWD', 'USD', 'JPY', 'KRW', 'HKD', 'SGD'],
    status: 'High Volume',
    logoText: 'KKday',
    descriptionKey: 'Leading Asia-Pacific e-commerce travel platform specializing in local experiences and attraction tickets.',
    accentColor: '#22d3ee'
  },
  {
    id: 'payeasy',
    name: 'PayEasy Corporate',
    category: 'Fintech',
    region: 'Taiwan',
    activeProducts: 1400,
    syncLatency: '< 95ms',
    supportedCurrencies: ['TWD'],
    status: 'Online',
    logoText: 'PayEasy',
    descriptionKey: 'Taiwan’s premier corporate employee welfare benefits and e-voucher redemption platform.',
    accentColor: '#10b981'
  },
  {
    id: 'megabank',
    name: 'Mega International Commercial Bank',
    category: 'Bank',
    region: 'Taiwan & Global',
    activeProducts: 980,
    syncLatency: '< 85ms',
    supportedCurrencies: ['TWD', 'USD'],
    status: 'Connected',
    logoText: 'Mega Bank',
    descriptionKey: 'Major international banking institution integrating Travel Trust Ticket voucher clearing.',
    accentColor: '#2563eb'
  }
];

export const newsArticlesData: NewsArticle[] = [
  {
    id: 'news-1',
    date: '2025-02-10',
    titleKey: '3T GDS Surpasses $50M in Annual Cross-Border Ticket Volume',
    summaryKey: 'Milestone driven by rapid adoption of Travel Trust Ticket protocol across East and Southeast Asia.',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read',
    contentKey: '3T GDS Technology Inc. today announced that its global digital asset distribution network has officially surpassed $50 million in annualized GMV. The growth was propelled by new merchant onboardings in Taipei, Tokyo, and Seoul, leveraging instant API connectivity with Trip.com, Fliggy, and Meituan.'
  },
  {
    id: 'news-2',
    date: '2025-01-22',
    titleKey: 'Deep Integration with Trip.com Group for Real-time Ticket Issuance',
    summaryKey: 'New direct API bridge lowers voucher validation latency under 100 milliseconds.',
    category: 'Integration',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    contentKey: 'Through this strategic technical alliance, 3T GDS and Trip.com Group have established direct WebSocket and REST endpoints for Travel Trust Tickets. Local attraction operators in Taiwan and Japan can now receive real-time bookings and deliver dynamic anti-fraud QR vouchers instantly.'
  },
  {
    id: 'news-3',
    date: '2024-12-15',
    titleKey: '3T GDS Obtains Travel Trust Ticket (TTT) Security Protocol Certification',
    summaryKey: 'Rigorous 3rd-party audit certifies zero double-spending and zero-trust cryptography.',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    contentKey: 'Safety and trust are paramount in cross-border digital voucher distribution. 3T GDS has successfully completed independent penetration testing and ISO/IEC security compliance audits for the Travel Trust Ticket framework.'
  }
];

export const teamMembersData: TeamMember[] = [
  {
    id: 'team-1',
    nameKey: 'Lin Chih-Ta (David Lin) / 林志達',
    roleKey: 'Founder & Chairman (創辦人兼董事長)',
    bioKey: 'Serial entrepreneur in travel commerce sector. Founded Ticketgo (台新 Ticketgo), Taiwan’s largest third-party gift voucher issuing platform. Former Founder of Surehigh & Overseas Sales Vice President at Xuhai International.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    experience: 'Founder of Ticketgo / Surehigh',
    location: 'Taipei & Global'
  },
  {
    id: 'team-2',
    nameKey: 'Ko Yi-Hung (Eric Ko) / 柯宜宏',
    roleKey: 'Co-Founder & CEO (共同創辦人兼執行長)',
    bioKey: 'Executive in telecom & payment systems for major conglomerates. Former Vice President at foreign investment banking firm. Co-founded 3T GDS to pioneer cross-border digital voucher switches.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    experience: 'Ex-Investment Bank VP / Telecom Exec',
    location: 'Taipei & Singapore'
  },
  {
    id: 'team-3',
    nameKey: 'Liu Shu-Hui (Marisa Liu) / 劉淑慧',
    roleKey: 'Taipei Office COO (台北辦公室營運長)',
    bioKey: 'Over 15 years of operational management experience in online casual gaming and 7 years in APP mobile payment ecosystems.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    experience: 'Ex-Gaming & APP Payment Industry Lead',
    location: 'Taipei'
  },
  {
    id: 'team-4',
    nameKey: 'Ho Ying-Chieh (Andrew Ho) / 何英杰',
    roleKey: 'Singapore Office COO (新加坡辦公室營運長)',
    bioKey: 'Former General Manager for KKBOX Southeast Asia, Director of Huawei Interactive Media, and General Manager for HTC Thailand.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    experience: 'Ex-KKBOX SEA GM / Huawei / HTC',
    location: 'Singapore'
  }
];

export const productAssetsData: ProductAsset[] = [
  {
    id: 'asset-1',
    nameKey: 'Taipei 101 Observatory Express E-Ticket',
    type: 'Attraction Pass',
    region: 'Taiwan',
    priceUSD: 19.5,
    status: 'Instant Issue',
    merchantName: 'Taipei 101 Financial Center',
    validityDays: 90,
    image: 'https://images.unsplash.com/photo-1508248467071-086d140e6b73?auto=format&fit=crop&w=600&q=80',
    sampleCode: 'TTT-TPE101-9823-90A1'
  },
  {
    id: 'asset-2',
    nameKey: 'Kyoto Sagano Romantic Train Pass',
    type: 'Transit Ticket',
    region: 'Japan',
    priceUSD: 14.0,
    status: 'Instant Issue',
    merchantName: 'Sagano Scenic Railway',
    validityDays: 30,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    sampleCode: 'TTT-KYO-TRAIN-8821-B42'
  },
  {
    id: 'asset-3',
    nameKey: 'Seoul Lotte World All-Day Pass',
    type: 'Attraction Pass',
    region: 'Korea',
    priceUSD: 32.0,
    status: 'Real-time API',
    merchantName: 'Lotte World Adventure',
    validityDays: 60,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    sampleCode: 'TTT-SEL-LOTTE-4412-X90'
  },
  {
    id: 'asset-4',
    nameKey: 'Singapore Gardens by the Bay + Cloud Forest Combo',
    type: 'Attraction Pass',
    region: 'Singapore',
    priceUSD: 24.5,
    status: 'Instant Issue',
    merchantName: 'Gardens by the Bay Singapore',
    validityDays: 180,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
    sampleCode: 'TTT-SIN-GARDEN-1102-M77'
  },
  {
    id: 'asset-5',
    nameKey: 'Din Tai Fung Michelin Gourmet Feast Voucher',
    type: 'Dining Voucher',
    region: 'Taiwan / APAC',
    priceUSD: 28.0,
    status: 'Instant Issue',
    merchantName: 'Din Tai Fung Restaurant Group',
    validityDays: 365,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    sampleCode: 'TTT-DTF-GOURMET-5510-C33'
  }
];
