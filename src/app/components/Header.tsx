import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-opacity-80 backdrop-blur-md">
      <div className="text-white font-bold text-2xl">Movelazy</div>
      <div className="space-x-4 text-white">
        <Link href="/tutorial" className="hover:text-gray-300">Tutorial</Link>
        <Link href="/blog" className="hover:text-gray-300">Blog</Link>
        <Link href="https://github.com/Weminal-labs/movelazy" className="hover:text-gray-300">GitHub</Link>
      </div>
    </nav>
  );
};

export default Header;