import React, { Component } from 'react';

export default class Skills extends Component{
    render() {
      return (
  
        <section className="section skills has-text-centered">
          <div className="container is-narrow">
            <div className="box">
              <div className="content">
                <div className="columns is-centered">
                  <div className="column">
                    <figure className="image"><img className="is-skill-icon" alt="designer skill icon" src="img/icons/designer.svg" /></figure>
                    <h1 className="title is-size-4 is-spaced">Designer</h1>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                    <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                    <ul>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>FIGMA</li>
                      <li>Adobe XD</li>
                      <li>Sketch</li>
                      <li>Pen &amp; Paper</li>
                      <li>Axure</li>
                      <li>Webflow</li>
                    </ul>
                  </div>
                  <div className="column">
                    <figure className="image"><img className="is-skill-icon" alt="developer skill icon" src="img/icons/developer.svg" /></figure>
                    <h1 className="title is-size-4 is-spaced">Full-Stack Developer</h1>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                    <p>HTML5, CSS3 (SASS/LESS), JavaScript (ReactJS, jQuery, Node.js, JSON), C#, Python</p>
                    <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                    <ul>
                      <li>Azure DevOps</li>
                      <li>Visual Studio Code</li>
                      <li>Bootstrap</li>
                      <li>Github</li>
                      <li>Bulma</li>
                      <li>Gulp</li>
                      <li>Terminal</li>
                    </ul>
                  </div>
                  <div className="column"> 
                    <figure className="image"><img className="is-skill-icon" alt="learner skill icon" src="img/icons/learner.svg" /></figure>
                    <h1 className="title is-size-4 is-spaced">Learner</h1>
                    <p>I genuinely love learning and continue to grow from fellow designers and developers.</p>
                    <p className="list-title has-text-primary has-text-weight-normal">Experiences I draw from:</p>
                    <p>UX/UI, Product design, Freelancing</p>
                    <p className="list-title has-text-primary has-text-weight-normal">Experience Stats:</p>
                    <ul>
                      <li>7 years experience</li>
                      <li>5 awards</li>
                      <li>50 design/development skills</li>
                      <li>10+ programming languages</li>
                      <li>2 bootcamps</li>
                      <li>3 volunteer experiences</li>
                      <li>8 college courses</li>
                      <li>10,000+ cups of green tea</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };