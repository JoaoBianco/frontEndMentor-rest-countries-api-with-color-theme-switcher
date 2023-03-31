import "./css/resetCss.scss";
import "./css/style.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Country from "./pages/Country";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} globalWrapper`}>
      <NavBar setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:country" element={<Country />}></Route>
        <Route path="*" element={<h2>Not found!</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
