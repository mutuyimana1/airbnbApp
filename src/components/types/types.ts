export interface Reservation {
  id: string;
  images: string[];
  status: 'Pending' | 'Confirmed';
  title: string;
  hostDescription: string;
  dateRange: string;
  year: string;
  location: string;
  country: string;
}

export interface ExperienceItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}
