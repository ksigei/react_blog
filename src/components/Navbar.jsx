import React from "react";
import "./sw_style.css";

function Navbar() {
  return (
    <div className="col-left">
      <a className="brand has-text-grey-dark" href="https://saucewire.com">
        <img src="../.././logo_sw.png" />
        <h3>Saucewire</h3>
      </a>
      <div className="icons">
        <a className="level-item">
          <span className="icon is-large">
            <i className="uil uil-estate has-text-grey-dark fa-2x"></i>
          </span>
        </a>
        <a className="level-item">
          <span className="icon is-large">
            <i class="uil uil-bell has-text-grey-dark fa-2x"></i>
          </span>
        </a>
        <a className="level-item">
          <span className="icon is-large">
            <i class="uil uil-bookmark has-text-grey-dark fa-2x"></i>
          </span>
        </a>
        <a className="level-item">
          <span className="icon is-large">
            <i class="uil uil-newspaper has-text-grey-dark fa-2x"></i>
          </span>
        </a>
        <a className="level-item">
          <span className="icon is-large">
            <i class="uil uil-plus has-text-grey-dark fa-2x"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
