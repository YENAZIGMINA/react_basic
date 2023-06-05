import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Chidren from './components/Chidren';

function App() {
  const name = "이예나";
  
  const footProps={
    name:"김미미",
    location:"서울"
  };

  function handleClick(){
    console.log("함수형클릭")
  }

  const arrowClick=()=>{
    console.log("화살표함수 실행")
  }

  return (
    <div>
      <Header name={name}/>
      <Body name={name} location="부산시"/>
      <Footer {...footProps}/> {/* ···으로 변수 붙여넣기 */}
      <Chidren>
          <div>children 컴퍼넌트</div>
      </Chidren>
      <button onClick={handleClick}>함수형 클릭</button>
      <button onClick={arrowClick}>화살표함수 실행</button>
    </div>
  );
}

export default App;
