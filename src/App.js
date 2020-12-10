// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Photolanding from "./Components/Photolanding";
import Aboutme from "./Components/Aboutme";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Landingpage />
      <Switch>

        <Route
          exact
          path="/Photoland"
          render={() => {
            return <Photolanding photoLand={photolanding} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
