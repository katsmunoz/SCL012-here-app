import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useFirebaseApp} from 'reactfire';
//App.js
import DisplayMapClass from './DisplayMapClass';



function App() {
  const firebase = useFirebaseApp();
  console.log(firebase)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>WheelGo!</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       <DisplayMapClass/>
    </div>
  );
}

export default App;
