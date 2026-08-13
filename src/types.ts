export type Language = 'en' | 'zh' | 'ja' | 'ko';

export interface ServiceItem {
  id: string;
  iconName: string;
  titleKey: string;
  descKey: string;
  detailKey: string;
  featuresKey: string[];
  badge?: string;
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'OTA' | 'Fintech' | 'E-Commerce' | 'Bank';
  region: string;
  activeProducts: number;
  syncLatency: string;
  supportedCurrencies: string[];
  status: 'Online' | 'Connected' | 'High Volume';
  logoText: string;
  descriptionKey: string;
  accentColor: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  titleKey: string;
  summaryKey: string;
  category: 'Integration' | 'Corporate' | 'Product' | 'Security';
  image: string;
  readTime: string;
  contentKey: string;
}

export interface TeamMember {
  id: string;
  nameKey: string;
  roleKey: string;
  bioKey: string;
  avatarUrl: string;
  experience: string;
  location: string;
}

export interface ProductAsset {
  id: string;
  nameKey: string;
  type: 'Attraction Pass' | 'Dining Voucher' | 'Transit Ticket' | 'Hotel Activity' | 'E-Gift Card';
  region: string;
  priceUSD: number;
  status: 'Instant Issue' | 'Real-time API';
  merchantName: string;
  validityDays: number;
  image: string;
  sampleCode: string;
}

export interface SupplierFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  businessType: string;
  country: string;
  targetChannels: string[];
  productCatalogDescription: string;
  estimatedMonthlyVolume: string;
}

export interface AIAdvisorResult {
  recommendation: string;
  recommendedChannels: string[];
  estimatedSpeedUp: string;
  currencyStrategy: string;
  complianceNotes: string;
}
