// components/Navbar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const settingsRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setSettingsOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Left: Main navigation links */}
      <div className="flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Properties
        </Link>

        <Link href="/plot-finder" className="text-gray-700 hover:text-blue-600">
          Plot Finder
        </Link>

        <Link href="/area-guides" className="text-gray-700 hover:text-blue-600">
          Area Guides
        </Link>

        <Link href="/maps" className="text-gray-700 hover:text-blue-600">
          Maps
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Property ID"
          className="border rounded px-2 py-1"
        />

        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Add Property
        </button>

        {/* Settings Dropdown */}
        <div className="relative" ref={settingsRef}>
          <button
            className="p-2 hover:bg-gray-200 rounded"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            ⚙️
          </button>
          {settingsOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded border z-50">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Settings 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Settings 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Settings 3
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            className="p-2 hover:bg-gray-200 rounded"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            👤
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded border z-50">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
