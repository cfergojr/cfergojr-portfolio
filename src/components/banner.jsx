import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
      return (
        <section className="hero pt-0 is-black has-text-centered">
        <div className="hero-body p-4">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <span className="title is-4 pr-5"><a href="https://marchforourlives.com/" rel="noreferrer" target="_blank"><img src="/img/logos/March-For-Our-Lives.png" className="pr-2"></img>March For Our Lives</a></span>
                <span className="subtitle is-6">Help end senseless gun violence in America.</span>
                </div>
            </div>
          </div>
        </div>
      </section>
      );
    }
  };