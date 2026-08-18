export interface Partner {
  id: string;
  name: string;
  category: string;
  shortCode?: string;
  accentColor?: string;
}

export const partnersList: Partner[] = [
  { id: 'p-mtn', name: 'MTN', category: 'Telecommunications', shortCode: 'MTN', accentColor: '#FFCC00' },
  { id: 'p-airtel', name: 'Airtel', category: 'Telecommunications', shortCode: 'airtel', accentColor: '#E60000' },
  { id: 'p-glo', name: 'Glo', category: 'Telecommunications', shortCode: 'glo', accentColor: '#28A745' },
  { id: 'p-gigl', name: 'GIG Logistics', category: 'Logistics & Supply Chain', shortCode: 'GIGL', accentColor: '#E0354E' },
  { id: 'p-gep', name: 'GEP', category: 'Enterprise & Strategy', shortCode: 'GEP', accentColor: '#0066CC' },
  { id: 'p-peak', name: 'Peak', category: 'FMCG & Nutrition', shortCode: 'Peak', accentColor: '#0055A5' },
  { id: 'p-goodmama', name: 'Good Mama', category: 'Consumer Goods', shortCode: 'GoodMama', accentColor: '#E91E63' },
  { id: 'p-cway', name: 'Cway', category: 'Beverages & Foods', shortCode: 'CWAY', accentColor: '#00BCD4' },
];
