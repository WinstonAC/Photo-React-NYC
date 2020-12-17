import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import "./architecture.css";

class Architecture extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="carouselBody">
        <Carousel className="C1">
          {this.props.photos.map((photo, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 img-fluid"
                src={photo.photo_url}
                alt="First slide"
              />
              <Carousel.Caption className="text-left">
                <span className="title">{photo.title}</span>
                <span className="date">{photo.date}</span>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default Architecture;
