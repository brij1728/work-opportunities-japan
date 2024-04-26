import Link from 'next/link';
import React from 'react';

const GitHubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
const LinkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const TwitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL;

interface LinkItem {
  name: string;
  href: string;
}

export const Footer = () => {
  const link: LinkItem[] = [
    {
      name: 'About Us',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Privacy Policy',
      href: '/privacy',
    },
  ];

  const socialMediaLinks: LinkItem[] = [
    {
      name: 'Github',
      href: GitHubUrl || '',
    },
    {
      name: 'LinkedIn',
      href: LinkedInUrl || '',
    },
    {
      name: 'Twitter',
      href: TwitterUrl || '',
    },
  ];

  return (
    <footer className="bg-gray-800 px-4 py-8 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Work Opportunities in Japan</h3>
          <p className="mt-2 text-sm">
            Connecting you with the best career opportunities across Japan.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2">
            {link.map((item, index) => (
              <li key={index} className="mt-1">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Connect with us</h3>
          <ul className="mt-2">
            {socialMediaLinks.map((item, index) => (
              <li key={index} className="mt-1">
                <Link
                  href={item.href}
                  target="_blank"
                  scroll={true}
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
