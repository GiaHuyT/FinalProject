import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* --- Logo --- */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img src={logo} alt="GoalTrack Logo" className="h-12 w-auto mb-4" />
          </Link>
          <p className="text-center md:text-left text-gray-400">
            Trang cập nhật bóng đá trực tuyến, kết nối bạn với mọi trận đấu.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/live" className="hover:text-blue-400 transition">Live</Link></li>
            <li><Link to="/fixtures" className="hover:text-blue-400 transition">Fixtures</Link></li>
            <li><Link to="/results" className="hover:text-blue-400 transition">Results</Link></li>
            <li><Link to="/standings" className="hover:text-blue-400 transition">Standings</Link></li>
            <li><Link to="/news" className="hover:text-blue-400 transition">News</Link></li>
          </ul>
        </div>

        {/* --- Social Media --- */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 GoalTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
