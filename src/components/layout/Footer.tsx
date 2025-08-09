import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-200 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl text-primary mb-4">Suraj Artist</h3>
            <p className="text-gray-400">
              Creating unique and meaningful tattoos that tell your story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-heading text-xl mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/booking" className="hover:text-primary transition-colors">
                Book Appointment
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-heading text-xl mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.instagram.com/suraj___artist___/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/chotu.sharma.92560281"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/8319011341"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {currentYear} Aditya Aware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;