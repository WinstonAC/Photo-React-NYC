// four images that flip and will link to expanded image pages material UI
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import { Link, Route, Switch } from "react-router-dom";
import "./photolanding.css";

class Photolanding extends React.Component {
  // let encodedpic = encodeURI(pic);
  render() {
    return (
      <div className="flip">
        <div className="flip1">
          <Link to="/Photolanding/Places">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              //this.flippy.hover
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "400px", height: "300px", padding: 0, margin: 0 }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundImage: `url(${"https://imgur.com/tTTwU6s.jpg"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></FrontSide>
              <BackSide style={{ backgroundColor: "black" }}>
                I chose these photos because they were the ones that propelled
                me into the photo world of street photography. These are some of
                my favorite portraits.
              </BackSide>
            </Flippy>
          </Link>

          <Link to="/Photolanding/People">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              //this.flippy.hover
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "400px", height: "300px", marginLeft: "50px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "black",
                  backgroundImage: `url(${"https://imgur.com/UrGywFQ.jpg"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></FrontSide>
              <BackSide style={{ backgroundColor: "black" }}>
                These photos are some of my favorite places in New York. The
                train is never dull, central park for peace, Coney island for
                fun, and the rest is me walking around.
              </BackSide>
            </Flippy>
          </Link>
        </div>

        <div className="flip2">
            <Link to="/Photolanding/Architecture">
              <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                //this.flippy.hover
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: "400px", height: "300px" }} /// these are optional style, it is not necessary
              >
                <FrontSide
                  style={{
                    backgroundColor: "black",
                    backgroundImage: `url(${"https://imgur.com/azP2RUU.jpg"})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></FrontSide>
                <BackSide style={{ backgroundColor: "black" }}>
                  I think architecture was my first love. I wanted to go to
                  school to become an architect but chose a different route. I
                  chose these because its a little mix of both street style and
                  architecture.
                </BackSide>
              </Flippy>
            </Link>

            <Link to="/Photolanding/Color">
              <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                //this.flippy.hover
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{
                  width: "400px",
                  height: "300px",
                  marginLeft: "50px",
                }} /// these are optional style, it is not necessary
              >
                <FrontSide
                  style={{
                    backgroundColor: "black",
                    backgroundImage: `url(${"https://imgur.com/bdVSF8A.jpg"})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></FrontSide>
                <BackSide style={{ backgroundColor: "black" }}>
                  I prefer black and white, but I have been told these are my
                  best color photos to date. that is why I chose them.
                </BackSide>
              </Flippy>
            </Link>
        </div>
        </div>
    );
  }
}
export default Photolanding;
