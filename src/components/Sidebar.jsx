const Sidebar = ({ isOpen, navLinks }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen z-50 bg-gray-900 text-white 
        pt-5 px-2 w-1/2 sm:w-1/3 sm:px-4 transform transition-transform duration-1000 md:hidden
         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
         aria-hidden={!isOpen}
    >
        <ul className="flex flex-col sticky top-0 p-4 pt-10 gap-6 sm:gap-8 items-baseline">
          {navLinks.map((link) => (
            <li key={link.index}>
              <a
                className="flex items-center gap-1 sm:gap-4 text-s md:text-lg hover:text-blue-700"
                href={link.href}
              >
                <span className="md:text-3xl sm:text-2xl text-lg">
                  {link.icon}
                </span>
                <span className="md:text-2xl sm:text-lg text-sm sm:font-bold">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
