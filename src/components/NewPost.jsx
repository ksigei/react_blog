// new post component based on new post form
import React from 'react';
import { NavLink } from 'react-router-dom';
import './sw_style.css';

// new post component based on new post form
function NewPost() {
  return (
    <div>
      <div className="">
        <div className="tabs">
          <ul>
            <li className="is-active">
              <NavLink to="#">Articles</NavLink>
            </li>
            <li>
              <NavLink to="#">Music</NavLink>
            </li>
            <li>
              <NavLink to="#">Videos</NavLink>
            </li>
            <li>
              <NavLink to="#">Documents</NavLink>
            </li>
          </ul>
        </div>
        <div className="sw_new_post">
          <div className="field sw-mb">
            <label htmlFor="title" className="label">
              Title
              <div id="title" className="control">
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="Enter title"
                />
              </div>
            </label>
            <p className="help">This is the field for your articles title</p>
          </div>
          <input
            className="input is-rounded sw-mb"
            type="text"
            placeholder="Category"
          />
          <div className="file is-warning is-boxed sw-mb">
            <label htmlFor="photo" className="file-label">
              <input className="file-input" type="file" name="photo" />
              <span className="file-cta" id="photo">
                <span className="file-icon">
                  <i className="fas fa-cloud-upload-alt" />
                </span>
                <span className="file-label">Cover photo</span>
              </span>
            </label>
          </div>
          <textarea
            className="textarea"
            placeholder="10 lines of textarea"
            rows="10"
            sw-mb
          />
          <label htmlFor="terms" className="checkbox sw-mb">
            <input id="terms" type="checkbox" />
            I agree to the
            <NavLink to="#">terms and conditions</NavLink>
          </label>
          <button
            className="button is-warning is-medium is-responsive"
            name="button"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
