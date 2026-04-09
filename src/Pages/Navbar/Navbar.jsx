"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {
  HomeIcon,
  User,
  Code,
  FolderGit2,
  GraduationCap,
  Image,
  HelpCircle,
  Mail,
} from "lucide-react";

const dockItems = [
  { id: "home", to: "/#home", name: "Home", icon: HomeIcon },
  { id: "about", to: "/#about", name: "About", icon: User },
  { id: "skills", to: "/#skills", name: "Skills", icon: Code },
  { id: "projects", to: "/#projects", name: "Projects", icon: FolderGit2 },
  {
    id: "education",
    to: "/#education",
    name: "Education",
    icon: GraduationCap,
  },
  { id: "gallery", to: "/#gallery", name: "Gallery", icon: Image },
  { id: "faq", to: "/#faq", name: "Q&A", icon: HelpCircle },
  { id: "contact", to: "/#contact", name: "Contact", icon: Mail },
];

function NavIcon({ item, isActive }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <HashLink smooth to={item.to}>
      <motion.div
        className="relative flex items-center justify-center rounded-full cursor-pointer"
        style={{ width: 36, height: 36 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          backgroundColor: isActive
            ? "rgba(255,255,255,0.15)"
            : hovered
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0)",
          scale: isActive ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Active ring */}
        <AnimatePresence>
          {isActive && (
            <motion.span
              key="ring"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.5)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>

        {/* Icon */}
        <Icon
          size={17}
          color={isActive ? "#ffffff" : "rgba(255,255,255,0.55)"}
          strokeWidth={isActive ? 2.2 : 1.8}
        />

        {/* Active dot */}
        <AnimatePresence>
          {isActive && (
            <motion.span
              key="dot"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                position: "absolute",
                bottom: 3,
                left: "50%",
                transform: "translateX(-50%)",
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "#fff",
              }}
            />
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(20,20,20,0.92)",
                color: "#fff",
                fontSize: 11,
                padding: "3px 8px",
                borderRadius: 6,
                whiteSpace: "nowrap",
                pointerEvents: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                zIndex: 99,
              }}
            >
              {item.name}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </HashLink>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = dockItems.map((i) => i.id);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If scrolled to bottom, force last section active
      if (scrollY + windowHeight >= docHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find which section is most visible in viewport
      let closest = sectionIds[0];
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - windowHeight * 0.25);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed max-w-11/12 mx-auto  top-4 left-4 right-4 z-50">
      <div
        className="flex items-center bg-gray-900/70 backdrop-blur-md border border-white/10 rounded-full px-4 py-4"
        style={{ gap: 0 }}
      >
        {/* Left — Logo */}
        <span className="text-white font-medium text-sm whitespace-nowrap mr-auto">
          Acme Inc.
        </span>

        {/* Center — Icons (absolute center) */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {dockItems.map((item) => (
            <NavIcon
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
            />
          ))}
        </div>

        {/* Right — Contact button (always visible) */}
        <div className="ml-auto">
          <HashLink smooth to="/#contact">
            <button className="bg-white text-black text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-100 active:scale-95 transition-all whitespace-nowrap">
              Contact me
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}
