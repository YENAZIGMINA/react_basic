import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./Routes";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
