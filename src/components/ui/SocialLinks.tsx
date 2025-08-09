import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className = '', iconSize = 24 }: SocialLinksProps) => {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/suraj___artist___/',
      label: 'Instagram'
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/chotu.sharma.92560281',
      label: 'Facebook'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/8319011341',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-200 p-3 rounded-full hover:bg-primary transition-colors"
          aria-label={link.label}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;