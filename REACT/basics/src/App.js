
import './App.css';
import User from './component/subcomponent/User';
import StateName from './component/state/StateName';
import Props from './component/Props/Props';
import PrintVal from './component/PrintInputVal/PrintVal';
import HideShow from './component/Hide&Show/HideShow';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Hello my name is Rajesh Kumar</p>
      <h1 className='U'>User Component</h1>
      <div className="content">
        <User />
        <User />
        <User />
      </div>
      <h1 className='U'>Use State in React</h1>
        <StateName />
      <h1 className='U'>Use Props in React</h1>
        <Props name={"Django"} />
        <Props name={"ReactJs"} />
        <Props name={"MySql"} />
      <h1 className="U">Input Value</h1>
        <PrintVal/>
      <h1 className="U">Hide And Show</h1>
        <HideShow/>
    </div>
  );
}

export default App;
