import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from "react-router-dom";
import "./places.css";

class Places extends React.Component {
  // let encodedpic = encodeURI(pic);
  render() {
    console.log("hello");
    return (
      // <div>
      // <h1>Hello</h1>
      // </div>
      <Carousel>
        <Carousel.Item className ="C1">
          <img
            className="d-block w-100"
            src="https://imgur.com/tTTwU6s.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className ="C1">
          <img
            className="d-block w-100"
            src="https://imgur.com/tTTwU6s.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className ="C1">
          <img
            className="d-block w-100"
            src="https://imgur.com/tTTwU6s.jpg"
            alt="Third slide"
          />

          <Carousel.Caption >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Places;
