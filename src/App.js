import React from 'react';
import './App.css';
// import {useFirebaseApp} from 'reactfire';
import DisplayMapClass from './DisplayMapClass';
import Auth from './Auth';
import {useUser} from 'reactfire';


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

