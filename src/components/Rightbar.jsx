import React from 'react';
import { Link } from 'react-router-dom';
import './sw_style.css';

function Rightbar() {
  return (
    <div className="">
      <article className="">
        <Link to="profile"></Link>

        <section className="section">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="control">
              <a className="button is-link is-light">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div>
            <h3 className="heading">Topics</h3>
          </div>
          <div className="tags">
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
          </div>
        </section>
        <section className="section">
          <div>
            <h3 className="heading">Topics</h3>
          </div>
          <div className="tags">
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
          </div>
        </section>
        <section className="section">
          <div>
            <h3 className="heading">Topics</h3>
          </div>
          <div className="tags">
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
          </div>
        </section>
        <section className="section">
          <div>
            <h3 className="heading">Topics</h3>
          </div>
          <div className="tags">
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
          </div>
        </section>
        <section className="section">
          <div>
            <h3 className="heading">Topics</h3>
          </div>
          <div className="tags">
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
            <span className="tag is-link is-light">Topics</span>
          </div>
        </section>
        <footer className="sw_footer">
          <div className="content has-text-centered">
            <p>
              <strong>Saucewire</strong> by <a href="#">SaucewireInc</a>. Our
              terms of services
              <a href="#">Terms of service</a>. The website content is licensed{" "}
              <a href="#">license</a>.
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default Rightbar;
