import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (

      <section className="section is-medium is-primary has-text-centered is-long">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <img className="avatar" alt="Chris Fergo Jr" src="img/chris-fergo-jr.jpg" />
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Chris. Nice to meet you.</h1>
              <h2 className="subtitle is-size-5-desktop">Since beginning my journey as a web/graphic designer over 10 years ago, I've done work for corporate companies, startups, academia, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
};