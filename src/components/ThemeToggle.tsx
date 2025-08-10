import React from "react";
import { useTheme } from "next-themes"; // Theme management using a `class` on <html>
import { Sun, Moon } from "lucide-react"; // Icons for light/dark indicators
import { Button } from "@/components/ui/button"; // Design-system button

/**
 * ThemeToggle
 * - Toggles between light and dark themes using next-themes
 * - Uses semantic design tokens via our Button component
 * - Kept tiny so it can be reused anywhere
 */
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme(); // Access and update the current theme

  // Helper to toggle theme value when the user clicks the button
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="outline" // Uses design system outline styling
      size="sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex items-center gap-2"
      title="Toggle light/dark"
    >
      {/* Show icons to hint current state visually */}
      {theme === "dark" ? (
        <Sun className="opacity-90" />
      ) : (
        <Moon className="opacity-90" />
      )}
      <span className="hidden sm:inline">Theme</span>
    </Button>
  );
};

export default ThemeToggle;
