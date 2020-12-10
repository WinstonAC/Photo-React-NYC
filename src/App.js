// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Photolanding from "./Components/Photolanding";
import Aboutme from "./Components/Aboutme";
import "./App.css";
import { useState } from "react";

function App() {
  const [photolanding, setPhotolanding] = useState([]);
  const [aboutme, setAboutme] = useState([]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/landingpage">
          <Landingpage />
        </Route>

        <Route exact path="/photography">
          <Photolanding />
        </Route>

        <Route
          exact
          path="/about"
          render={() => {
            return <Aboutme aboutme={aboutme} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
