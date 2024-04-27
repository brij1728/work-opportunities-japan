import Link from 'next/link';

interface MenuProps {
  onLinkClick: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onLinkClick }) => {
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Us',
      href: '/about',
    },
  ];

  return (
    <ul className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      {links.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="text-blue-600 hover:text-blue-800"
            onClick={onLinkClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
