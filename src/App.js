// import logo from './logo.svg';
import {Link, Route, Switch } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Photolanding from "./Components/Photolanding";
import Aboutme from "./Components/Aboutme";
import "./App.css";
// import { useState } from "react";

export default function App() {
  // const [photolanding, setPhotolanding] = useState([]);
  // const [aboutme, setAboutme] = useState([]);

  return (
    <div className="app">
      <Link to="/landingpage" style={{textDecoration: 'none',color:'black'}}>
        <h1>Benjamin White Photography </h1>
      </Link>

      <Switch>
        <Route exact path="/landingpage">
          <Landingpage />
        </Route>

        <Route exact path="/photolanding">
          <Photolanding />
        </Route>

        <Route exact path="/aboutme">
          <Aboutme />
        </Route>
      </Switch>
    </div>
  );
}
