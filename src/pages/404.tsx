import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <div>Page not found.</div>
      <p>Sorry, the page you are looking for is not available.</p>
      <Link href="/" className="text-blue-500 underline">
        Go back to the Home page
      </Link>
    </>
  );
};

export default NotFound;
