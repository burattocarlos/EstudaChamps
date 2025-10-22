import React from 'react';
import logo from '../assets/logo.webp';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Champs Logo" className="h-10" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">TODOS</a></li>
            <li><a href="#" className="bg-black text-white px-3 py-1 rounded-full">ATUAL</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">PENDENTE</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">COMPLETO</a></li>
          </ul>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          {/* Notification Icon */}
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          {/* Profile Circle */}
          <div className="w-8 h-8 bg-red-600 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
