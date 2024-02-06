import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Tugas from './components/Tugas';
import NavbarCom from "./components/navbar";
import Detail  from "./components/Detail";
import Home from "./components/Home";
import Json from './pages/json';

function App() {
  return (
    <div className="App"> {/* Perbaiki disini */}
      <Router> {/* Ganti BrowserRouter menjadi Router */}
        <main>
          {/* <Json /> */}
          <NavbarCom />
          <Switch>
            <Route path="/" component={Home} exact/>
            {/* <Route path="/Home" exact component={Home} /> */}
            <Route path="/Detail" component={Detail} exact /> {/* Ganti path yang sesuai */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
