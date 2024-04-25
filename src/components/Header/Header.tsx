import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Work Opportunities in Japan</h1>
        <div>
          <Link href="/" className="px-4">Home</Link>
          <Link href="/about" className="px-4">About  Japan</Link>
        </div>
      </nav>
    </header>
  );
};

