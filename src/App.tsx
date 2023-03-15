import "./css/resetCss.scss";
import "./css/style.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Country from "./pages/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:country" element={<Country />}></Route>
      </Routes>
    </>
  );
}

export default App;
