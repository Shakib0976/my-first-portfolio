"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Home,
  Mail,
  Calendar,
  Camera,
  Music,
  Settings,
  FileText,
  MessageCircle,
  Globe,
  Folder,
  HelpCircle,
  Image,
  GraduationCap,
  FolderGit2,
  Code,
  User,
  HomeIcon,
} from "lucide-react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
const dockItems = [
  {
    id: "home",
    to: "/#home",
    name: "Home",
    icon: <HomeIcon size={20} color="white" />,
    color: "bg-gray-700",
  },
  {
    id: "about",
    to: "/#about",
    name: "About",
    icon: <User size={20} color="white" />,
   color: "bg-gray-700",
  },
  {
    id: "skills",
    to: "/#skills",
    name: "Skills",
    icon: <Code size={20} color="white" />,
    color: "bg-gray-700",
  },
  {
    id: "projects",
    to: "/#projects",
    name: "Projects",
    icon: <FolderGit2 size={20} color="white" />,
    color: "bg-gray-700",
  },
  {
    id: "education",
    to: "/#education",
    name: "Education",
    icon: <GraduationCap size={20} color="white" />,
    color: "bg-gray-700",
  },
  {
    id: "gallery",
    to: "/#gallery",
    name: "Gallery",
    icon: <Image size={20} color="white" />,
    color: "bg-gray-700",
  },
  {
    id: "faq",
    to: "/#faq",
    name: "Q&A",
    icon: <HelpCircle size={20} color="white" />,
    color: "bg-gray-700",
  },
  {
    id: "contact",
    to: "/#contact",
    name: "Contact",
    icon: <Mail size={20} color="white" />,
    color: "bg-gray-700",
  },
];

function DockIcon({ item, mouseY }) {
  const ref = useRef(null);

  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const sizeSync = useTransform(distance, [-150, 0, 150], [32, 52, 32]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <HashLink smooth to={item.to}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        className="aspect-square  cursor-pointer z-80 flex items-center justify-center relative group"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`w-full h-full rounded-2xl shadow-lg flex p-5 items-center justify-center text-white relative overflow-hidden ${item.color}`}
          animate={{
            x: isClicked ? -2 : isHovered ? 15 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <motion.div
            className="text-xl"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            {item.icon}
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"
            animate={{
              opacity: isHovered ? 0.3 : 0.1,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 12 : -10,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none backdrop-blur-sm"
        >
          {item.name}
        </motion.div>

        <motion.div
          className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/80 rounded-full"
          animate={{
            scale: isClicked ? 1.5 : 1,
            opacity: isClicked ? 1 : 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>
    </HashLink>
  );
}


// 

export function Dock() {
  const mouseY = useMotionValue(Infinity);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 p-8">
      <motion.div
        onMouseMove={(e) => mouseY.set(e.pageY)}
        onMouseLeave={() => mouseY.set(Infinity)}
        className="flex flex-col w-fit items-center gap-8 rounded-3xl bg-linear-to-b from-blue-500/20 via-purple-500/20 to-teal-500/20 text-white px-3.5 py-4 border-2 border-white/20 shadow-xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
      >
        {dockItems.map((item) => (
          <DockIcon key={item.id} item={item} mouseY={mouseY} />
        ))}
      </motion.div>
    </div>
  );
}
