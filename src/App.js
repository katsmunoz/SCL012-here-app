import React from 'react';
import './App.css';
import Auth from './Auth';
import {useUser} from 'reactfire';
import DisplayMapClass from './DisplayMapClass';


function App() {
  const user= useUser();
  return (
    <div className="App">
      {user && <p>Bienvenido {user.email}</p>}
      <Auth />
      <DisplayMapClass/>
    </div>
  );
}
export default App;



   


