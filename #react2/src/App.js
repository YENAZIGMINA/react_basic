import './App.css';
import Header from './components/header';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu text="그린"/>
      <Menu text="학원"/>
      <Header color="빨강" num={1}/>
      <Header color="파랑" num={2}/>
      <Header color="초록" num={3}/>
    </div>
  );
}

export default App;

