const Footer = () => {
    return (
      <footer className="bg-slate-950 bg-pattern text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Movelazy. Tất cả quyền được bảo lưu.</p>
        <div className="space-x-4">
          <a href="https://twitter.com/Movelazy" className="hover:text-gray-300">Twitter</a>
          <a href="https://github.com/Weminal-labs/movelazy" className="hover:text-gray-300">GitHub</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;