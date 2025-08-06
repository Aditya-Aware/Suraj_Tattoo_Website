import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import Card from '../ui/Card';

const BookingInfo = () => {
  const bookingInfo = [
    {
      icon: <FaClock />,
      title: 'Studio Hours',
      details: [
        'Monday - Saturday: 11:00 AM - 8:00 PM',
        'Sunday: By Appointment Only'
      ]
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Booking Process',
      details: [
        'Fill out the booking form',
        'Receive confirmation via WhatsApp',
        'Schedule consultation if needed',
        'Confirm appointment with deposit'
      ]
    },
    {
      icon: <FaInfoCircle />,
      title: 'Important Notes',
      details: [
        'Must be 18+ with valid ID',
        'Consultation required for custom designs',
        'Deposit required to secure booking',
        'Please arrive sober and well-rested'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {bookingInfo.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-3xl mb-4">
                {info.icon}
              </div>
              <h3 className="font-heading text-xl mb-4">{info.title}</h3>
              <ul className="space-y-2 text-gray-300">
                {info.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BookingInfo;