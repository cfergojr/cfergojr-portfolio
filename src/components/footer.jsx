import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
        <footer className="section is-primary is-small has-text-centered">
          <div className="container is-narrow"><img className="logo" src="img/cf-logo-white.png" alt="Chris Fergo | Full-Stack Developer, Designer, and Learner" style={{height: '48px'}} />
            <div className="columns is-centered"> 
              <div className="column is-one-third">
                <h1 className="title is-size-4-touch">Living, learning, &amp; leveling up one day at a time.</h1>
              </div>
            </div>
            <div className="social-icons">
              <p className="field"><a className="button is-medium" href="https://www.github.com/cfergojr" target="_blank" rel="noreferrer"><span className="icon is-small"><i className="fab fa-github fa-fw" /></span></a><a className="button is-medium" href="https://dribbble.com/cfergojr" target="_blank"><span className="icon is-small"><i className="fab fa-dribbble fa-fw" /></span></a><a className="button is-medium" href="https://www.linkedin.com/in/cfergojr" target="_blank"><span className="icon is-small"><i className="fab fa-linkedin-in fa-fw" /></span></a><a className="button is-medium" href="mailto:cfergojr@gmail.com"><span className="icon is-small"><i className="far fa-envelope fa-fw" /></span></a></p>
            </div>
            <div className="copyright">Handcrafted by me<span className="icon has-white-text" style={{verticalAlign: 'middle'}}><i className="far fa-copyright" /></span><span id="year">2022</span></div>
          </div>
        </footer>
      );
    }
  };
