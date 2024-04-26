import Link from 'next/link';

export const Header = () => {
  const link = [
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
    <header className="bg-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Work Opportunities in Japan</h1>
        <div>
          <ul className="flex space-x-4">
            {link.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
