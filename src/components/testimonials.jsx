import React, { Component } from 'react';

export default class Testimonials extends Component {
    render() {
      return (
  
        <section className="section testimonials is-medium is-light has-text-centered has-border-top">
          <div className="container is-narrow">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Testimonials</h1>
            <h2 className="subtitle is-size-5-desktop">People I've worked with have said some nice things...</h2>
            <div className="columns is-centered">
              <div className="column is-two-thirds">
                <div className="testimonials-slider">                     
                  <input id="carousel-1" type="radio" name="carousel" defaultChecked />
                  <input id="carousel-2" type="radio" name="carousel" />
                  <input id="carousel-3" type="radio" name="carousel" />
                  <div className="carousel-slides">
                    <div className="carousel-inner">
                      <div className="carousel-item">
                        <div className="testimonial-block"><img className="avatar" alt="Kenneth Stephens" src="img/avatars/kenneth-stephens.webp" />
                          <p className="quote">“Chris is very motivated to learn new technologies and always strives to bring a fresh perspective to the workplace.”</p>
                          <h1 className="title is-size-5">Kenneth Stephens</h1>
                          <h2 className="subtitle is-size-6">Web Developer</h2>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-block"><img className="avatar" alt="PJ Moffett" src="img/avatars/pj-moffett.webp" />
                          <p className="quote">“Chris is a very talented Graphic Designer. He helped me on numerous presentation projects while we worked together at PCD.”</p>
                          <h1 className="title is-size-5">PJ Moffett</h1>
                          <h2 className="subtitle is-size-6">Global Logistics & Supply Chain</h2>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-block"><img className="avatar" alt="Rachel Bianco" src="img/avatars/rachel-bianco.webp" />
                          <p className="quote">“Chris was an absolute pleasure to work with at PCD! He brought many skills to the Marketing &amp; Creative Design teams.”</p>
                          <h1 className="title is-size-5">Rachel Giannini-Bianco</h1>
                          <h2 className="subtitle is-size-6">Virtual Exectutive Assistant</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-nav">
                    <label htmlFor="carousel-1" />
                    <label htmlFor="carousel-2" />
                    <label htmlFor="carousel-3" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };