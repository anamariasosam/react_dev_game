import React, { Component } from 'react';
import Header from './Header'

import LettersList from './LettersList'
import Word from './Word'
import CurrentWord from './CurrentWord'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      wordsGuess: [],
      letters: [],
      word: '',
    }

    this.guessWord = this.guessWord.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  componentDidMount() {
    this.populateWords();
  }


  populateWords() {
    let words =  ['ruby', 'rails', 'irb', 'erb'];

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
    if (this.state.words.includes(word) && !this.state.wordsGuess.includes(word)) {

      var wordsGuess = this.state.wordsGuess.slice();
      wordsGuess.push(word)

      this.setState({
        wordsGuess,
        word: '',
      });
    }

    if (this.state.wordsGuess.includes(word)) {
      this.clearData();
    }
  }

  clearData() {
    this.setState({
      word: '',
    });
  }

  render() {
    const wordsGuessed = this.state.wordsGuess.map((word, index) =>
      <Word word={word} key={index} />
    );

    return (
      <div>
        <Header title="Dev Game"/>
        <LettersList
          letters={this.state.letters}
          onLetterSelect={ this.guessWord }
        />
        <CurrentWord word={this.state.word} />

        <ul className="list pv4">
          {wordsGuessed}
        </ul>

        <p
          className="tc pointer grow"
          onClick={this.clearData}>
            Clear
        </p>
      </div>
    );
  }
}

export default App;
