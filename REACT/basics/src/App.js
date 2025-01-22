
import './App.css';
import User from './component/subcomponent/User';
import StateName from './component/state/StateName';
import Props from './component/Props/Props';
import PrintVal from './component/PrintInputVal/PrintVal';
import HideShow from './component/Hide&Show/HideShow';
import Forms from './component/Forms/Forms';
import UseeffectHooks from './component/UseEffect/UseeffectHooks';
import Mapping from './component/Array/Mapping';

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

        <div className="forms">
          <Forms/>
        </div>

        <div className="useeffect">
          <h1 className='U'>UseEffect</h1>
          <UseeffectHooks/>
        </div>
        <div className="array">
        <h1 className="U">ARRAY LIST</h1>
          <Mapping/>
        </div>
    </div>
  );
}

export default App;
