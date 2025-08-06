import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className = '', iconSize = 24 }: SocialLinksProps) => {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: 'https://instagram.com/surajartist',
      label: 'Instagram'
    },
    {
      icon: FaFacebook,
      href: 'https://facebook.com/surajartist',
      label: 'Facebook'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/1234567890',
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