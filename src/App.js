import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="POSTS" description="some random description to test Headline component"/>
        </section>
      </div>
    );
  }
}

export default App;
