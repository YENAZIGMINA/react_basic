import "./App.css";

function App() {
  const num = 10;
  const double = function (number) {
    return number * 2;
  };

  return (
    <>
      <div className="app">{num}</div>
      <div>{double(2)}</div>
    </>
  );
}

export default App;
