import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
      return (
        <div>
          <section className="section is-medium is-primary has-text-centered is-long-ish">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-three-fifths">
                  <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Projects</h1>
                  <h2 className="subtitle is-size-5-desktop">I'm a bit of a hobbyist. Over the years, I've utilized hundreds of web and mobile apps in different industries. Below are some of the pro-bono projects I've built or been involved with.</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="section startups has-text-centered">
            <div className="container is-narrow">
              <div className="startup-grid">
                <div className="columns is-multiline level">
                  <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div className="box"><img className="logo" src="img/projects/python.svg" />
                      <p>A plethora of Python projects I've worked on including games, file duplicator, and data fetcher.</p><a className="button is-primary is-outlined is-rounded" href="https://github.com/cfergojr/Python-projects" target="_blank">View Repo</a>
                    </div>
                  </div>
                  <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div className="box"><img className="logo" src="img/projects/typing-test.png" />
                      <p>Who doesn't love a good typing test? This was built using vanilla JavaScript, along with some CSS and HTML.</p><a className="button is-primary is-outlined is-rounded mr-3" href="/typing-test.html">Play Game</a><a className="button is-primary is-outlined is-rounded" href="https://github.com/cfergojr/js-typing-test">View Repo</a>
                    </div>
                  </div>
                  <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div className="box"><h2>WORDLE</h2>
                      <p>Love the trendy new game? Check out my version that uses vanilla JavaScript, along with some CSS and HTML.</p><a className="button is-primary is-outlined is-rounded mr-3" href="/wordle.html" target="_blank">Play Game</a><a className="button is-primary is-outlined is-rounded" href="https://github.com/cfergojr/wordle-app" target="_blank">View Repo</a>
                    </div>
                  </div>
                  <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div className="box"><img className="logo" style={{height: '75px'}} src="img/projects/drumming.png" />
                      <p>Find me behind my drum kit, performing various covers of popular songs.</p><a className="button is-primary is-outlined is-rounded" href="https://www.youtube.com/playlist?list=PLYm5qfbqopB22Oq6ars8Qp5-ZgVE8lTFi" target="_blank">Youtube Playlist</a>
                    </div>
                  </div>
                  <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">     
                    <div className="box"><img className="logo" src="img/projects/retropie.png" />
                      <p>Built a fully working arcade cabinet using the Raspberry Pi 4b, Retropie OS, &amp; custom hardware.</p><a className="button is-primary is-outlined is-rounded" href="https://photos.google.com/album/AF1QipNVSIViPfVrvOsL1tX2nfjuhowpl9Q_rzbgcZwN">Retropie Arcade Gallery</a>
                    </div>
                  </div>
                  <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div className="box"><img className="logo" src="img/projects/goodreads.svg" />
                      <p>Fellow bookworm? Add me on Goodreads and shoot me some recommendations.</p><a className="button is-primary is-outlined is-rounded" href="https://www.goodreads.com/user/show/17724266-chris-fergo" target="_blank">Goodreads Bookshelf</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="callout">
                <div className="columns is-centered">
                  <div className="column">
                    <h1 className="title is-spaced">Interested in collaborating or investing?</h1>
                    <h2 className="subtitle is-size-5-desktop">I’m always open to discussing product design work or partnership opportunities.</h2><a className="button is-primary is-outlined is-rounded is-medium" href="mailto:cfergojr@gmail.com">Start a conversation</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  };