import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [buttonName, setButtonName]=useState("!!클릭!!");

  const clickButton =()=>{
    setButtonName('바꾸기')
  }

  return (
    <>
    <h1>컴퍼넌트</h1>
    <div>{buttonName}</div><br/>

    <Counter click="click1_"/>
    <Counter click={2}/> 
                   {/* ✔문자는 ""로, 변수&숫자는 {}로 감싸기 */}
    <Counter click={buttonName}/>
    <Counter click={`${buttonName}4~`}/>

    <br/>
    {/* 버튼에 들어있는 클릭글자 '바꾸기'로 변경 */}
    <button onClick={clickButton}>button</button>
    </>
  );
}

export default App;
