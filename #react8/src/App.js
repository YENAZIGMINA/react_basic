import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import HelpPage from "./pages/HelpPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">홈페이지</Link>
          </li>
          <li>
            <Link to="/contact">컨택트</Link>
          </li>
          <li>
            <Link to="/about">어바웃</Link>
          </li>
          <li>
            <Link to="/help">헬프</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
