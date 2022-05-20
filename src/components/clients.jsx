import React, { Component } from 'react';

export default class Clients extends Component {
    render() {
      return (
  
        <section className="section clients is-medium is-white has-text-centered has-border-top">
          <div className="container is-narrow">
            <div className="columns is-centered">
              <div className="column is-half">
                <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">I'm proud to have collaborated with some awesome companies:</h1>
              </div>
            </div>
            <div className="client-grid">
              <div className="columns is-multiline is-mobile">
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="BethpageFCU logo" src="img/logos/bethpagefcu.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="Charity:Water logo" src="img/logos/charity-water.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="CSHL logo" src="img/logos/cshl.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="HFT Connect logo" src="img/logos/hftc.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="Personal Communications Devices logo" src="img/logos/pcd.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="Saberin logo" src="img/logos/saberin.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="Verisk logo" src="img/logos/verisk.webp" /></figure>
                </div>
                <div className="column is-half-mobile is-one-quarter-tablet">
                  <figure className="image is-2x1"><img className="client-logo" alt="Verizon logo" src="img/logos/verizon.webp" /></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };