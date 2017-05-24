import React, { Component } from 'react';

import Level from '../Level';

import Header from './Header';
import Button from './Button';
import LettersList from './LettersList';
import WordsList from './WordsList';
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
      new Level({ level: 0, words: ['ruby', 'rails'] }),
      new Level({ level: 1, words: ['react', 'jsx'] }),
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
      let currentLevel = this.state.currentLevel + 1;

      if (currentLevel === this.state.levels.length) {
        alert('🎉🎉 THE END 🎉🎉');
        currentLevel = 0;
      } else {
        alert('🎉🎉 NEXT LEVEL 🎉🎉');
      }

      this.setState({
        currentLevel,
        wordsGuess: [],
      });
    }
  }

  render() {
    const level = this.state.currentLevel;

    return (
      <div>
        <Header
          title="Dev Game"
          numberOfGuessWords={this.state.wordsGuess.length}
          numberOfWords={this.state.levels[level].words.length}
        />

        <section className="mw6 center">
          <LettersList
            letters={this.state.levels[level].letters}
            onLetterSelect={this.guessWord}
          />

          <CurrentWord word={this.state.word} />

          <WordsList words={this.state.wordsGuess} />

          <Button
            text="Clear"
            buttonHandleClick={this.clearData}
          />
        </section>

      </div>
    );
  }
}

export default App;
