export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  image?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  tattooType: string;
  size: string;
  placement: string;
  preferredDate: string;
  message?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}