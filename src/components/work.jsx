import React, { Component } from 'react';

export default class Work extends Component {
    render() {
      return (
        <section className="section projects is-medium is-white has-text-centered">
          <div className="container is-narrow">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
            <h2 className="subtitle is-size-5-desktop">Here are a few of my recent design and development projects.</h2>
            <div className="project-grid">  
              <div className="columns is-multiline is-mobile">
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" alt="Anna Re Fine Jewelry logo" src="img/clients/annarefinejewelry-work.png" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Local, small business jewelry store that was one of the first to carry lab-grown diamonds.</h1><a className="button is-primary is-outlined is-rounded" href="https://annare.jewelershowcase.com" target="_blank" rel="noreferrer"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right" /></span></a>
                    </figcaption>
                    <div className="overlay" />
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                  <figure className="image is-3by2"><img className="project-thumb" alt="BethpageFCU logo" src="img/clients/bethpagefcu-work.png" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">The largest Long Island based Credit Union. They care about what you care about.</h1><a className="button is-primary is-outlined is-rounded" href="http://bethpagefcu.com/" target="_blank" rel="noreferrer"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right" /></span></a>
                    </figcaption>
                    <div className="overlay" />
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" alt="Cold Spring Harbor Laborator logo" src="img/clients/cshl-work.png" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Long Island based research/education with programs in cancer, neuroscience, plant biology, &amp; quantitative biology.</h1><a className="button is-primary is-outlined is-rounded" href="https://www.cshl.edu/" target="_blank" rel="noreferrer"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right" /></span></a>
                    </figcaption>
                    <div className="overlay" />
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" alt="HFT Connect logo" src="img/clients/hftc-work.png" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">A community of technology professionals in the alternative finance space.</h1><a className="button is-primary is-outlined is-rounded" href="http://hftconnect.com" target="_blank" rel="noreferrer"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right" /></span></a>
                    </figcaption>
                    <div className="overlay" />
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                  <figure className="image is-3by2"><img className="project-thumb" alt="Saberin logo"  src="img/clients/saberin.png" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Creative solutions that bring your business’ vision to life.</h1><a className="button is-primary is-outlined is-rounded" href="http://www.saberin.com/" target="_blank" rel="noreferrer"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right" /></span></a>
                    </figcaption>
                    <div className="overlay" />
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                  <figure className="image is-3by2"><img className="project-thumb" alt="Verisk logo" src="img/clients/verisk-work.png" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">50 years of helping customers protect people, property, and financial assets around the world.</h1><a className="button is-primary is-outlined is-rounded" href="http://www.verisk.com" target="_blank" rel="noreferrer"><span>View Website</span><span className="icon"><i className="fas fa-angle-right" /></span></a>
                    </figcaption>
                    <div className="overlay" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column"><a className="button is-primary is-outlined is-rounded is-medium" href="https://github.com/cfergojr" target="_blank" rel="noreferrer"><span className="icon"><i className="fab fa-github" /></span><span>See more on Github</span></a></div>
            </div>
          </div>
        </section>
      );
    }
  };