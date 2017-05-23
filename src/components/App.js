import React, { Component } from 'react';
import Header from './Header';

import LettersList from './LettersList';
import Word from './Word';
import CurrentWord from './CurrentWord';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      wordsGuess: [],
      letters: [],
      word: '',
    };

    this.guessWord = this.guessWord.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  componentDidMount() {
    this.populateWords();
  }


  populateWords() {
    const words = ['ruby', 'rails', 'irb', 'erb'];

    let letters = words.join('').toUpperCase().split('').sort();

    letters = letters.filter((item, index, inputArray) => inputArray.indexOf(item) === index);

    this.setState({
      letters,
      words,
    });
  }

  guessWord(selectedLetter) {
    this.setState({ word: this.state.word.concat(selectedLetter) });

    const word = this.state.word.concat(selectedLetter).toLowerCase();
    if (this.state.words.includes(word) && !this.state.wordsGuess.includes(word)) {
      const wordsGuess = this.state.wordsGuess.slice();
      wordsGuess.push(word);

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
    const wordsGuessed = this.state.wordsGuess.map(word => <Word word={word} key={word} />);

    return (
      <div>
        <Header title="Dev Game" />
        <LettersList
          letters={this.state.letters}
          onLetterSelect={this.guessWord}
        />
        <CurrentWord word={this.state.word} />

        <ul className="list pv4">
          {wordsGuessed}
        </ul>

        <a
          className="f6 ba bw1 pv2 mb2 near-black w3 tc db center no-underline dim"
          onClick={this.clearData}
          href="#0"
        >
        Clear
        </a>
      </div>
    );
  }
}

export default App;
