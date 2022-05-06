import React, { Component } from 'react';
import './App.css';
import Navigation from './components/nav'
import Hero from './components/hero'
import Introduction from './components/introduction'
import Skills from './components/skills'
import Work from './components/work'
import Clients from './components/clients'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Hero></Hero>
        <Introduction></Introduction>
        <Skills></Skills>
        <Work></Work>
        <Clients></Clients>
        <Projects></Projects>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
