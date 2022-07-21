import React from 'react';
import './sw_style.css';

function Slider() {
  return (
    // use bulma css framework to create an appealing banner page
    <div className="sw_main desktop">
      <div>
        {/* <div className="sw_slider">
        <div className="sw_slider_text">
          <h1 className="sw_title">Welcome to Saucewire</h1>
          <p className="sw_subtitle">
            The only place to find compelling, original content.
          </p>
        </div>
      </div> */}
        <div id="slider">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2022/05/24/04/38/study-7217599_960_720.jpg"
              alt="sw_sliders"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg"
              alt="sw_sliders"
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593357_960_720.jpg"
              alt="sw_sliders"
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg"
              alt="sw_sliders"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
export default Slider;
