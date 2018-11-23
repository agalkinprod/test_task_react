import React, { Component } from "react";
import "./checkbox.scss";

const Checkbox = ({ state, onClick }) => (
  <div className="ttr-checkbox">
    {" "}
    <div
      onClick={() => {
        onClick();
      }}
      className={
        state ? "ttr-checkbox-circle_checked" : "ttr-checkbox-circle_unchecked"
      }
    />{" "}
  </div>
);

export default Checkbox;
