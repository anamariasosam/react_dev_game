import React, { Component } from 'react';

import Level from '../Level';

import Header from './Header';
import LettersList from './LettersList';
import Word from './Word';
import CurrentWord from './CurrentWord';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      levels: [
        {
          letters: [],
          level: 0,
          words: [],
        },
      ],
      wordsGuess: [],
      word: '',
      currentLevel: 0,
    };

    this.guessWord = this.guessWord.bind(this);
    this.clearData = this.clearData.bind(this);
    this.knowLevel = this.knowLevel.bind(this);
  }

  componentDidMount() {
    this.populateWords();
  }


  populateWords() {
    const levels = [
      new Level({ level: 0, words: ['ruby', 'rails', 'irb', 'erb'] }),
      new Level({ level: 1, words: ['react', 'redux', 'jsx'] }),
    ];

    this.setState({
      levels,
    });
  }

  guessWord(selectedLetter) {
    const level = this.state.currentLevel;

    this.setState({ word: this.state.word.concat(selectedLetter) });
    const word = this.state.word.concat(selectedLetter).toLowerCase();

    if (this.state.wordsGuess.includes(word)) {
      this.clearData();
    }

    if (this.state.levels[level].words.includes(word)) {
      const wordsGuess = this.state.wordsGuess.slice();
      wordsGuess.push(word);

      this.setState({
        wordsGuess,
        word: '',
      });

      this.knowLevel(wordsGuess);
    }
  }

  clearData() { this.setState({ word: '' }); }

  knowLevel(wordsGuess) {
    const level = this.state.currentLevel;
    if (wordsGuess.length === this.state.levels[level].words.length) {
      const currentLevel = this.state.currentLevel + 1;
      this.setState({
        currentLevel,
        wordsGuess: [],
      });
    }
  }

  render() {
    const wordsGuessed = this.state.wordsGuess.map(word => <Word word={word} key={word} />);
    const level = this.state.currentLevel;

    return (
      <div>
        <Header title="Dev Game" />
        <p className="tc">
          {this.state.wordsGuess.length} / {this.state.levels[level].words.length}
        </p>
        <LettersList
          letters={this.state.levels[level].letters}
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
