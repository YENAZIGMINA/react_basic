import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const onSubmit=(e)=>{
    e.preventDefault(); //❗새로고침 안되도록 막음
    //form은 전송후에 refresh(새로고침) 발생함
    console.log(username, password)
  }

  //✔onChange는 input의 값을 바꿀 때마다 실행하는 함수
  //✔form은 onSubmit을 사용해서 함수를 만든다
  return (
    <>
    <form onSubmit={onSubmit}>
      <input placeholder='Username' value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      /><br/>

      <input placeholder='Password' value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      /><br/>
      <button type='submit'>Update!</button>
    </form>
    </>
  );
}

export default App;
