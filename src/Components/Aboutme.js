// About me.  Q and A one image matieral UI
import React from "react";
import { Route, Switch } from "react-router-dom";
// import "aboutme.css;";

function Aboutme(props) {
  return (
    <div>
      <head>
        <title>About Me</title>
      </head>
      <body>
        <main>
          <div className="container">
            <img class="TextWrap"></img>
            <a href="https://imgur.com/KXqC0zz">
              {" "}
              <img
                src="https://i.imgur.com/KXqC0zz.jpg"
                title="source: imgur.com"
              />
            </a>
            <p>
              {" "}
              Benjamin depicts the everyday life of New Yorker- he finds the
              beauty in landscapes and arcitecture.
            </p>
            <p>
              Benjamin had an uncanny eye seeing the unseen the ignored of our
              society. Once his camera comes out the stories he shoots come to
              life.
            </p>
          </div>
        </main>
        <p2>
          <h3 className="QA"> inspired</h3>
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

export default Aboutme.js;
