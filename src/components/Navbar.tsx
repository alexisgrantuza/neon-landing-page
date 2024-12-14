"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "../lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

type SubLink = {
  name: string;
  link: string;
};

type NavItem = {
  name: string;
  link: string;
  subLinks?: SubLink[];
};

type NavbarProps = {
  className?: string;
  navItems: NavItem[];
};

export function NavbarDemo({ navItems }: { navItems: NavItem[] }) {
  return <Navbar className="top-0 max-w-7xl" navItems={navItems} />;
}

function Navbar({ className, navItems }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;

    if (current < 80) {
      setVisible(true);
    } else if (direction > 0) {
      setVisible(false);
    } else if (direction < -2000) {
      setVisible(true);
    }

    setLastScrollY(current);
  });

  return (
    <nav
      className={cn("fixed mt-12 inset-x-0 max-w-full mx-auto z-50", className)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="flex items-center justify-between px-6 py-3 bg-black md:ml-20  text-white rounded-2xl">
            {/* Logo */}

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-slate-200"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M4 12c0 4 5 8 5 8s5-4 5-8-5-8-5-8-5 4-5 8z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M5 4v4M5 16v4"
                />
              </svg>
              <span className="text-2xl font-bold">NEON</span>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden flex items-center -mr-52 md:-mr-80 p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <Menu setActive={setActive}>
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  setActive={setActive}
                  active={active}
                  item={item.name}
                >
                  {item.subLinks && (
                    <div className="flex flex-col space-y-4 text-sm">
                      <div className="text-xs text-gray-300">{item.name}</div>
                      {item.subLinks.map((subLink) => (
                        <HoveredLink key={subLink.name} href={subLink.link}>
                          {subLink.name}
                        </HoveredLink>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black bg-opacity-80 text-white w-full px-6 py-4 space-y-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-lg font-bold mb-2">{item.name}</div>
                {item.subLinks && (
                  <div className="ml-4 space-y-2">
                    {item.subLinks.map((subLink) => (
                      <HoveredLink key={subLink.name} href={subLink.link}>
                        {subLink.name}
                      </HoveredLink>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
