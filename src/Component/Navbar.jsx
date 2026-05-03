"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Products", path: "/products" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#63483a] text-[#edd0b9] shadow-lg border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:opacity-90 transition"
        >
          🏺 Tile Gallery
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {menuLinks.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="relative group hover:text-white transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#edd0b9] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Avatar + Name */}
              <Link
                href="/profile"
                className="flex items-center gap-2 group"
              >
                <Image
                  src={user?.image || "/default-avatar.png"}
                  alt="User"
                  width={38}
                  height={38}
                  className="rounded-full border border-white/20 object-cover"
                />

                <span className="text-sm font-medium group-hover:text-white transition">
                  {user?.name || "User"}
                </span>
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md text-white text-sm transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-[#edd0b9] text-[#63483a] px-4 py-2 rounded-md font-medium hover:scale-105 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#5a3f33] overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 space-y-3 text-sm">
          {/* Links */}
          {menuLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          {/* User Section */}
          {user ? (
            <div className="pt-3 space-y-3">
              <Link
                href="/profile"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <Image
                  src={user?.image || "/default-avatar.png"}
                  alt="User"
                  width={38}
                  height={38}
                  className="rounded-full border border-white/20 object-cover"
                />
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs opacity-70">{user?.email}</p>
                </div>
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={closeMenu}
              className="block text-center bg-[#edd0b9] text-[#63483a] py-2 rounded-md mt-3 font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
