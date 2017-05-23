import React, { Component } from 'react';
import Header from './Header'
import LettersList from './LettersList'

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Dev Game"/>
        <LettersList />
      </div>

    );
  }
}

export default App;
