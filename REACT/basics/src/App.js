
import './App.css';
import User from './User.js';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Hello my name is Rajesh Kumar</p>
      <User sub={'javascript'}/>
      <User sub={'Django'}/>
      <User sub={'MySQL'}/>
    </div>
  );
}

export default App;
