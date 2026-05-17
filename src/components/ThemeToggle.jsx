import { Moon, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
    >
      {darkMode ? (
        <SunMedium size={22} />
      ) : (
        <Moon size={22} />
      )}
    </motion.button>
  );
}

export default ThemeToggle;

