import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./color.css";

class Color extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props,"hello");
    return (
      <div>
        <Carousel>
          {this.props.photos.map((photo, i) => (
            <Carousel.Item key={i} className="C1">
              <img
                className="d-block w-100 img-fluid"
                src={photo.photo_url}
                alt="First slide"
              />
              <Carousel.Caption className="text-left">
                <h3>{photo.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default Color;
