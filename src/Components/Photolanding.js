// four images that flip and will link to expanded image pages material UI
import React from "react";

function Photolanding() {
  return (
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
  );
}

export default Photolanding;
