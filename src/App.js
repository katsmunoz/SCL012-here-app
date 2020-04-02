import React from 'react';
import './App.css';
import DisplayMapClass from './components/DisplayMapClass';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Login from './components/Login';
import Registry from './components/Registry';
import General from './components/General';
import DisplayMapFC from './components/DisplayMapFC';
import Ajustes from './components/Ajustes';
import Otros from './components/Otros';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Mapa" component={DisplayMapClass}/>
        <Route exact path="/Crear_cuenta" component={Registry} />
        <Route exact path="/Home" component={General}/>
        <Route exact path="/Mapa_dos" component={DisplayMapFC}/>
        <Route exact path="/Ajustes" component={Ajustes}/>
        <Route exact path="/Otros" component={Otros}/>
      </Switch>
    </Router>
  )
}
export default App;
