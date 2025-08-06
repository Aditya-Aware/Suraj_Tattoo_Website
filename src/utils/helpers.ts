import { BookingFormData } from '../types';

export const formatWhatsAppMessage = (data: BookingFormData): string => {
  return `
*New Tattoo Booking Request*
---------------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

*Tattoo Details*
Type: ${data.tattooType}
Size: ${data.size}
Placement: ${data.placement}
Preferred Date: ${data.preferredDate}

*Additional Message*
${data.message || 'No additional message'}
`.trim();
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export const generateWhatsAppLink = (phone: string, message: string): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};