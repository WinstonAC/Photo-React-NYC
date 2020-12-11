// About me.  Q and A one image matieral UI
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./aboutme.css";

export default function Aboutme() {
  return (
    <div>
      <header>
        <h2 className="title">About Me</h2>
      </header>
      <body>
        <main>
          <div className="container">
            <img className="TextWrap"></img>
            <a href="https://imgur.com/KXqC0zz">
              {" "}
              <img
                src="https://i.imgur.com/KXqC0zz.jpg"
                title="source: imgur.com"
              />
            </a>
            <p>
              {" "}
              Benjamin depicts the everyday life of New Yorkers. He finds beauty
              in landscapes and architecture.
            </p>
            <p>
              Benjamin has an uncanny eye seeing the unseen and the ignored of
              our society. Once his camera comes out, the stories he shoots come
              to life.
            </p>
          </div>
        </main>
        <p2>
          <h3 className="QA"> Q & A with our Photographer</h3>
          <ul>
            <li>
              WHO: I am from Rogersville, MO and I have lived in New York City
              for seven years.
            </li>
            <li>What:I have been taking photos for about 5 years.</li>
            <li>
              Why: I get inspiration from a lot of things. In New York
              inspiration is never endless. From the hustle and bustle of the 9
              to 5ers, to the unfortunate homeless people of our city, and to
              the people that sit still. Lighting and shadows are mainly what
              catches my eye though.{" "}
            </li>
          </ul>
        </p2>
      </body>
    </div>
  );
}
