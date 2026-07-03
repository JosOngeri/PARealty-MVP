export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Residential' | 'Commercial' | 'Land';
  image: string;
  beds?: number;
  baths?: number;
  sqft?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Villa in Runda',
    location: 'Runda, Nairobi',
    price: 'KSh 85,000,000',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    beds: 5,
    baths: 4,
    sqft: '4,500'
  },
  {
    id: '2',
    title: 'Prime 1/8th Acre Plot',
    location: 'Kamulu, Kangundo Road',
    price: 'KSh 1,200,000',
    type: 'Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Office Space - KomaHill Plaza',
    location: 'KomaHill, Nairobi-Kangundo Road',
    price: 'KSh 45,000/mo',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    sqft: '1,200'
  },
  {
    id: '4',
    title: 'Luxury Apartment in Kilimani',
    location: 'Kilimani, Nairobi',
    price: 'KSh 18,500,000',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    beds: 3,
    baths: 2,
    sqft: '1,800'
  }
];
