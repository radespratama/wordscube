import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useDarkSide } from "@lib/hooks/useDarkside";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light");

  const togglerTheme = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="fixed h-11 w-11 bottom-5 right-5 md:bottom-10 md:right-10 rounded-lg bg-gray-950 dark:bg-white flex items-center justify-center">
      <button type="button">
        <DarkModeSwitch
          checked={darkSide}
          onChange={togglerTheme}
          className="h-6 w-6"
          color={darkSide ? "black" : "white"}
          moonColor={darkSide ? "black" : "white"}
          sunColor={darkSide ? "black" : "white"}
        />
      </button>
    </div>
  );
}
