import React, { Component } from 'react'

import Letter from './Letter'

export default class LettersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      letters: [],
      selectedLetter: null,
      word: '',
    }

    this.guessWord = this.guessWord.bind(this);
  }

  componentDidMount() {
    this.populateWords();
  }


  populateWords() {
    let words =  ['Ruby', 'Rails'];

    var letters = words.join("").toUpperCase().split("").sort();

    letters = letters.filter(
      function( item, index, inputArray ) {
        return inputArray.indexOf(item) === index;
      }
    );

    this.setState({
      letters,
    });
  }

  guessWord(selectedLetter) {
    this.setState({ word: this.state.word.concat(selectedLetter) });
  }

  render() {
    return (
      <div className="ex">
        <ul className="list pv4">
          {this.state.letters.map((letter, index) => (
            <Letter
              letter={letter}
              key={index}
              onLetterSelect={ this.guessWord }
             />
          ))}
        </ul>
      </div>
    );
  }
}
