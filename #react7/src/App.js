import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        {/* path에 입력한 /(슬러쉬)는 기본페이지 */}
        <Route path="/" element={<Homepage />} />{" "}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
