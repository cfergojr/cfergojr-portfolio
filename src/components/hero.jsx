import React, { Component } from 'react';

export default class Hero extends Component {
    render() {
      return (
  
        <section className="hero is-white has-text-centered">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Designer, Front-end Developer &amp; Mentee</h1>
                  <h2 className="subtitle is-size-4-desktop">I design and code beautifully simple things, and I love what I do.</h2><img className="avatar" alt="Chris Fergo Jr" src="img/chris-fergo-jr.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container"><img className="is-bottom" alt="computer, phone, tablet, and desk"  src="img/hero.svg" /></div>
          </div>
        </section>
      );
    }
  };