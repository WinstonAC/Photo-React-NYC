// four images that flip and will link to expanded image pages material UI
import React from "react";
import { Route, Switch } from "react-router-dom";

function Photolanding() {
  return (
    <div className="phlan">
      <div className="photo1">
        <img
          src="https://imgur.com/XgQHU9M"
          className="rounded float-start"
          alt="..."
        ></img>
        <img
          src="https://imgur.com/tTTwU6s"
          className="rounded float-end"
          alt="..."
        ></img>
      </div>
      <div>
        <img
          src="https://imgur.com/azP2RUU"
          className="rounded float-start"
          alt="..."
        ></img>
        <img
          src="https://imgur.com/yesVFuy"
          className="rounded float-end"
          alt="..."
        ></img>
      </div>
    </div>
  );
}

export default Photolanding;
