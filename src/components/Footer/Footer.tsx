import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const link = [
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

  const socialMediaLinks = [
	{
	  name: 'Twitter',
	  href: 'https://www.twitter.com',
	},
	{
	  name: 'Facebook',
	  href: 'https://www.facebook.com',
	},
	{
	  name: 'LinkedIn',
	  href: 'https://www.linkedin.com',
	},
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Work Opportunities in Japan</h3>
          <p className="text-sm mt-2">Connecting you with the best career opportunities across Japan.</p>
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
					<Link href ={item.href}>{item.name}</Link>
				</li>
			))}
		  </ul>
		</div>
      </div>
    </footer>
  );
};

