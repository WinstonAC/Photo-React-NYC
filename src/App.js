// import logo from './logo.svg';
import { Link, Route, Switch } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Photolanding from "./Components/Photolanding";
import Aboutme from "./Components/Aboutme";
import Places from "./Components/Places";
import Events from "./Components/Events";
import People from "./Components/People";
import Architecture from "./Components/Architecture";
import Color from "./Components/Color";
import "./App.css";
// import { useState } from "react";

export default function App() {
  // const [photolanding, setPhotolanding] = useState([]);
  // const [aboutme, setAboutme] = useState([]);

  return (
    <div className="app">
      <Link
        to="/Landingpage"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h1>Benjamin White Photography </h1>
      </Link>

      <Switch>
        <Route exact path="/Landingpage">
          <Landingpage />
        </Route>

        <Route exact path="/Photolanding/Places" render={() => <Places />} />
        <Route exact path="/Photolanding/People" render={() => <People />} />
        <Route
          exact
          path="Photolanding/Architecture"
          render={() => <Architecture />}
        />
        <Route exact path="Photolanding/Color" render={() => <Color />} />

        <Route exact path="/Photolanding">
          <Photolanding />
        </Route>

        <Route exact path="/Aboutme">
          <Aboutme />
        </Route>
      </Switch>
    </div>
  );
}
