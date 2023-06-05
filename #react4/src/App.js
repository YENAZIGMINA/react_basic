import "./App.css";
import { useState } from "react";

function App() {
  //함수이름은 통상적으로 state이름 앞에 set을 넣어서 setNumber와 같이 만든다
  //state값이 바뀌면 component(App을 말함)는 다시 랜더링이 일어난다
  //const [state값, 함수(state값을 바꿀 함수)]=useState(state값의 초기값)
  const [number, setNumber] = useState(1);

  //let number = 1;
  const increase = () => {
    setNumber(number + 2);
    console.log(number);
  };

  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
