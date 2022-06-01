import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
      return (
  
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand"><a className="navbar-item" href="#"><img src="img/cf-logo-pride.png" alt="Chris Fergo | Full-Stack Developer, Designer, &amp; Learner" height={48} /></a>
            {/* <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu"><span aria-hidden="true" />
            <span aria-hidden="true" /><span aria-hidden="true" /></a> */}
            </div>
            <div className="navbar-menu" id="navMenu">
              <div className="navbar-start" />
              <div className="navbar-item">
                <div className="dropdown is-hoverable">
                  <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span>Games</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="/wordle.html" className="dropdown-item">
                        Wordle
                      </a>
                      <a href="/typing-test.html" className="dropdown-item">
                        Typing Test
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item"><a className="button is-primary is-outlined is-rounded" target="_blank" href="/files/chris-fergo-resume.pdf">Download CV</a></div>
            </div>
          </div>
        </nav>
      );
    }
  };