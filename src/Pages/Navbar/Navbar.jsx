"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Home } from "lucide-react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";

const dockItems = [
  {
    id: "linkedin",
    to: "https://www.linkedin.com/feed/",
    name: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    id: "github",
    to: "https://github.com/Shakib0976",
    name: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    id: "facebook",
    to: "https://www.facebook.com/md.shakib.khan.809698",
    name: "Facebook",
    icon: FaFacebook,
    external: true,
  },
  {
    id: "twitter",
    to: "https://x.com/ShakibMd5698",
    name: "Twitter",
    icon: FaXTwitter,
    external: true,
  },
];

function NavIcon({ item, isActive }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  const iconContent = (
    <motion.div
      className="relative flex items-center justify-center gap-5  rounded-full cursor-pointer"
      style={{ width: 36, height: 36 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        backgroundColor: isActive
          ? "rgba(255,255,255,0.12)"
          : hovered
            ? "rgba(255,255,255,0.07)"
            : "rgba(255,255,255,0)",
        scale: isActive ? 1.08 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Icon */}
      <Icon size={25} strokeWidth={isActive ? 2.2 : 1.8} />

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
              background: "rgba(15,15,15,0.85)",
              color: "#fff",
              fontSize: 11,
              padding: "3px 8px",
              borderRadius: 6,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              zIndex: 99,
            }}
          >
            {item.name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer">
        {iconContent}
      </a>
    );
  }

  return (
    <HashLink smooth to={item.to}>
      {iconContent}
    </HashLink>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= docHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed max-w-11/12  mx-auto top-4 left-4 right-4 z-50">
      <div
        className="flex items-center bg-linear-to-l from-blue-500/20 via-purple-500/20 to-teal-500/20 text-black rounded-full px-4 py-4"
        style={{
          gap: 0,

          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "0 4px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Left — Logo */}
        <span className="font-medium text-sm whitespace-nowrap mr-auto">
          <IoLogoSkype size={35} />
        </span>

        {/* Center — Icons */}
        <div
          style={{
            position: "absolute",
            right: "10%",
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

        {/* Right — Contact button */}
        <div className="ml-auto">
          <HashLink smooth to="/#contact">
            <button
              className="text-xs font-medium px-4 py-1.5 rounded-full active:scale-95 transition-all whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.92)",
                color: "#111",
                border: "none",
              }}
            >
              Contact me
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}
