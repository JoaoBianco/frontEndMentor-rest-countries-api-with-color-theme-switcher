import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

type NavBarProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ theme, setTheme }: NavBarProps) => {
  function returnThemeTextFormated(): string {
    return theme === "dark" ? "Light" : "Dark";
  }

  return (
    <nav className="navBar">
      <div
        className={`container navBar__container | ${theme} align-items-center flex`}
      >
        <h1>Where in the world?</h1>
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="navBar__darkMode flex"
        >
          <span>
            <FontAwesomeIcon icon={theme !== "dark" ? faMoon : faSun} />
          </span>
          <p>{returnThemeTextFormated()} Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
