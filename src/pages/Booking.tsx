import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import BookingForm from '../components/booking/BookingForm';
import BookingInfo from '../components/booking/BookingInfo';

const Booking = () => {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Section
          title="Book Your Session"
          subtitle="Fill out the form below to start your tattoo journey"
          className="pt-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <BookingForm />
            </div>

            {/* Booking Information */}
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-2xl mb-6">
                  Booking Information
                </h2>
                <BookingInfo />
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="font-heading text-2xl mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-dark-200 p-6 rounded-lg"
                    >
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </PageTransition>
  );
};

const faqs = [
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid ID, any reference images you have, and wear comfortable clothing that provides easy access to the tattoo area."
  },
  {
    question: "How much is the deposit?",
    answer: "We require a 20% non-refundable deposit to secure your booking. This amount will be deducted from the final price of your tattoo."
  },
  {
    question: "Can I bring my own design?",
    answer: "Yes! We welcome custom designs and can also help modify or create a unique design based on your ideas during the consultation."
  },
  {
    question: "How do I prepare for my tattoo session?",
    answer: "Get plenty of rest, eat a good meal before your appointment, stay hydrated, and avoid alcohol for 24 hours before your session."
  }
];

export default Booking;