const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1020]/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-5">

          <h1 className="text-4xl font-extrabold text-white">
            Pushpa Kumari
          </h1>

          <div className="bg-blue-600 text-sm px-4 py-2 rounded-lg font-medium">
            Open to Work
          </div>

        </div>

        <ul className="hidden md:flex items-center gap-12 text-lg text-gray-300">

          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-white transition">
                Achievements
            </a>
            </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;