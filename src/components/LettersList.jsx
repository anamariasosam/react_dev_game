import React, { Component } from 'react'

import Letter from './Letter'
import Word from './Word'

export default class LettersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      wordsGuess: [],
      letters: [],
      word: '',
    }

    this.guessWord = this.guessWord.bind(this);
  }

  componentDidMount() {
    this.populateWords();
  }


  populateWords() {
    let words =  ['ruby', 'rails'];

    var letters = words.join('').toUpperCase().split('').sort();

    letters = letters.filter(
      function( item, index, inputArray ) {
        return inputArray.indexOf(item) === index;
      }
    );

    this.setState({
      letters,
      words,
    });
  }

  guessWord(selectedLetter) {
    this.setState({ word: this.state.word.concat(selectedLetter) });

    let word = this.state.word.concat(selectedLetter).toLowerCase();
    if (this.state.words.includes(word)) {
      alert('si esta')
    }
  }

  render() {
    const lettersList = this.state.letters.map((letter, index) =>
      <Letter
        letter={letter}
        key={index}
        onLetterSelect={ this.guessWord }
       />
    );

    return (
      <div>
        <ul className="list pv4">
          {lettersList}
        </ul>

        <Word word={this.state.word} />
        <Word word={this.state.wordsGuess[0]} />
      </div>
    );
  }
}
