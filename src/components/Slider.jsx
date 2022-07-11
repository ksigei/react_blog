import React from "react";
import styled from "styled-components";

import "./sw_style.css";

function Slider() {
  return (
    // use bulma css framework to create an appealing banner page
    <div className="sw_main">
      <div className="sw_slider">
        <div className="sw_slider_text">
          <h1 className="sw_title">Welcome to Saucewire</h1>
          <p className="sw_subtitle">
            The only place to find compelling, original content.
          </p>
        </div>
      </div>
    </div>

  );
}
export default Slider;

