import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { BookingFormData } from '../../types';
import { formatWhatsAppMessage, generateWhatsAppLink } from '../../utils/helpers';
import { SITE_CONFIG } from '../../constants/config';
import Input from '../ui/Input';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const tattooTypes = [
  { value: '', label: 'Select Type' },
  { value: 'Traditional', label: 'Traditional' },
  { value: 'Modern', label: 'Modern' },
  { value: 'Minimal', label: 'Minimal' },
  { value: 'Color', label: 'Color' },
  { value: 'Custom', label: 'Custom Design' },
];

const tattooSizes = [
  { value: '', label: 'Select Size' },
  { value: 'Small', label: 'Small (2-4 inches)' },
  { value: 'Medium', label: 'Medium (4-6 inches)' },
  { value: 'Large', label: 'Large (6-8 inches)' },
  { value: 'Extra Large', label: 'Extra Large (8+ inches)' },
];

const placements = [
  { value: '', label: 'Select Placement' },
  { value: 'Arm', label: 'Arm' },
  { value: 'Leg', label: 'Leg' },
  { value: 'Back', label: 'Back' },
  { value: 'Chest', label: 'Chest' },
  { value: 'Other', label: 'Other' },
];

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    const message = formatWhatsAppMessage(data);
    const whatsappLink = generateWhatsAppLink(SITE_CONFIG.contact.whatsapp, message);
    window.open(whatsappLink, '_blank');
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-dark-200 p-6 md:p-8 rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <Input
          label="Name *"
          {...register('name', { required: 'Name is required' })}
          error={errors.name?.message}
          placeholder="Your full name"
        />

        {/* Email */}
        <Input
          label="Email *"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          error={errors.email?.message}
          placeholder="your@email.com"
        />

        {/* Phone */}
        <Input
          label="Phone *"
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: 'Invalid phone number',
            },
          })}
          error={errors.phone?.message}
          placeholder="Your phone number"
        />

        {/* Preferred Date */}
        <Input
          label="Preferred Date *"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          {...register('preferredDate', { required: 'Please select a date' })}
          error={errors.preferredDate?.message}
        />

        {/* Tattoo Type */}
        <Select
          label="Tattoo Type *"
          options={tattooTypes}
          {...register('tattooType', { required: 'Please select a tattoo type' })}
          error={errors.tattooType?.message}
        />

        {/* Size */}
        <Select
          label="Size *"
          options={tattooSizes}
          {...register('size', { required: 'Please select a size' })}
          error={errors.size?.message}
        />

        {/* Placement */}
        <Select
          label="Placement *"
          options={placements}
          {...register('placement', { required: 'Please select placement' })}
          error={errors.placement?.message}
        />
      </div>

      {/* Message */}
      <div className="mt-6">
        <TextArea
          label="Additional Details"
          rows={4}
          {...register('message')}
          placeholder="Describe your tattoo idea, reference images, or any special requirements..."
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          fullWidth
          icon={<FaWhatsapp size={20} />}
        >
          Book via WhatsApp
        </Button>
      </div>

      {/* Terms */}
      <p className="text-gray-400 text-sm text-center mt-4">
        By submitting this form, you'll be redirected to WhatsApp to confirm your booking.
      </p>
    </motion.form>
  );
};

export default BookingForm;