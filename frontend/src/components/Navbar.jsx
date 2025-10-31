import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Menu, User, Search } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Load trạng thái Dark Mode từ localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", newMode);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "LIVE", path: "/live" },
    { name: "Fixtures", path: "/fixtures" },
    { name: "Results", path: "/results" },
    { name: "Standings", path: "/standings" },
    { name: "News", path: "/news" },
  ];

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-screen-xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold">GoalTrack</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-12 font-semibold text-lg">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-orange-500 pb-1 transition"
                  : "hover:text-orange-500 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-6 text-xl">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-blue-500 transition"
          >
            <Search className="w-6 h-6" />
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="hover:text-green-500 transition"
            >
              <User className="w-6 h-6" />
            </button>
            {isProfileMenuOpen && (
              <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg overflow-hidden transition ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <NavLink to="/login" onClick={() => setIsProfileMenuOpen(false)} className="block px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition">Login</NavLink>
                <NavLink to="/register" onClick={() => setIsProfileMenuOpen(false)} className="block px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition">Register</NavLink>
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="hover:text-yellow-500 transition"
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2">
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden transition-colors ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} backdrop-blur-lg`}>
          <ul className="flex flex-col items-center gap-6 py-5 font-semibold text-lg">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  onClick={() => setIsMobileMenuOpen(false)}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-orange-500 pb-1" : "hover:text-orange-500 transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/login" className="hover:text-green-500 transition">Login</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/register" className="hover:text-blue-500 transition">Register</NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Search popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className={`p-6 rounded-lg w-11/12 max-w-lg relative transition-colors ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-3 right-3 text-xl">✕</button>
            <h3 className="text-lg font-semibold mb-4">Tìm kiếm trận đấu, cầu thủ...</h3>
            <input
              type="text"
              placeholder="Nhập từ khóa..."
              className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
