"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        initial={false}
        animate={{
          x: isDarkMode ? 10 : -10,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="absolute"
        initial={false}
        animate={{ rotate: isDarkMode ? 90 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d={isDarkMode ? "M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" : "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  );
};

export default ThemeToggleButton;
