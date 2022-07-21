import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './sw_style.css';

function Rightbar() {
  return (
    <div className="">
      <article className="">
        <Link to="profile">
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
                <NavLink to="#" className="button is-link is-light">
                  <i className="fa fa-search" />
                </NavLink>
              </div>
            </div>
          </section>
        </Link>
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
              <strong>Saucewire</strong>
              by
              <NavLink to="#">SaucewireInc.</NavLink>
              Our terms of services
              <NavLink to="#">Terms of service.</NavLink>
              The website content is licensed
              <NavLink to="#">license</NavLink>
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default Rightbar;
