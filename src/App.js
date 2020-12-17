// import logo from './logo.svg';
import React, { Component } from "react";
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: true,
      photos: [],
      collections: [],
      people: [],
      places: [],
      architecture: [],
      color: [],
    };
  }

  async componentDidMount() {
    let url = "https://photonyc.herokuapp.com/collections";
    const collecitonsRes = await fetch(url)
      .then((res) => res.json())
      .then((collections) => this.setState({ collections: collections }));

    let data = "https://photonyc.herokuapp.com/photos";
    const photosRes = await fetch(data)
      .then((res) => res.json())
      .then((photos) => this.setState({ photos: photos }));
    this.organizeData();
    console.log(this.organizeData)
  }
  organizeData() {
    let peopleData = [];
    let placesData = [];
    let architectureData = [];
    let colorData = [];

    for (let i = 0; i < this.state.photos.length; i++) {
      console.log(this.state.photos[i])
      if (this.state.photos[i].collection == 1) {
        peopleData.push(this.state.photos[i]);
      }
      if (this.state.photos[i].collection == 2) {
        placesData.push(this.state.photos[i]);
      } 
      if (this.state.photos[i].collection == 3) {
        architectureData.push(this.state.photos[i]);
      //   console.log(architectureData)
      } 
      if (this.state.photos[i].collection == 4) {
        colorData.push(this.state.photos[i]);
      //   console.log(colorData)
      }
      // console.log(peopleData)
      // console.log(placesData)
      // console.log(architectureData)
      // console.log(colorData)
      this.setState({
        people: peopleData,
        places: placesData,
        architecture: architectureData,
        color: colorData,
      });
    }
  }
  render() {
    console.log(this.state.photos);
    console.log(this.state.architecture);
    console.log(this.state.color);
    console.log(this.state.people)
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

          <Route
            exact
            path="/Photolanding/Places"
            render={() => <Places photos={this.state.places} />}
          />

          <Route
            exact
            path="/Photolanding/People"
            render={() => <People photos={this.state.people} />}
          />

          <Route
            exact
            path="/Photolanding/Architecture"
            render={() => <Architecture photos={this.state.architecture} />}
          />
          <Route
            exact
            path="/Photolanding/Color"
            render={() => <Color photos={this.state.color} />}
          />

          <Route exact path="/Photolanding">
            <Photolanding />
          </Route>

          <Route exact path="/Aboutme">
            <Aboutme />
          </Route>

          <Route exact path="/Events">
            <Events />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
