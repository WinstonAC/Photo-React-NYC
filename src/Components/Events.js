import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./events.css";
import EmailForm from "./EmailForm";
import Mail from "./Mail";
import Ical from "./Ical";

export default function Events() {
  console.log("hello");
  return (
    <div className="bigi">
    <div className="top">
      <div className="contact">
        <p> Ben White Photography </p>
        <p> E: bgwhite2021@gmail.com</p>
        <p> IG:bgwhitephoto </p>
      </div>
      <div className="ical">
        <Ical></Ical>
        <div className="EF">
          <Mail className="renform"></Mail>
        </div>
      </div>

      </div>
      <div>
        
      </div>
    </div>
  );
}
