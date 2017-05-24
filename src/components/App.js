import React, { Component } from 'react';

import Level from '../Level';

import Header from './Header';
import Button from './Button';
import LettersList from './LettersList';
import WordsList from './WordsList';
import CurrentWord from './CurrentWord';
import GitHubRibbon from './GitHubRibbon';
import Footer from './Footer';

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
      wordsGuessed: 0,
    };

    this.guessWord = this.guessWord.bind(this);
    this.removeLast = this.removeLast.bind(this);
    this.knowLevel = this.knowLevel.bind(this);
  }

  componentDidMount() {
    this.populateWords();
  }


  populateWords() {
    const levels = [
      new Level({ topic: 'HTML', words: ['ul', 'li', 'p', 'img', 'div'] }),
      new Level({ topic: 'Ruby', words: ['ruby', 'rails', 'irb', 'rb', 'erb'] }),
      new Level({ topic: 'React', words: ['react', 'jsx', 'state', 'this'] }),
    ];

    this.setState({
      levels,
    });
  }

  guessWord(selectedLetter) {
    const level = this.state.currentLevel;
    const word = this.state.word.concat(selectedLetter);

    this.setState({ word });

    if (this.state.levels[level].words.includes(word) && !this.state.wordsGuess.includes(word)) {
      const wordsGuess = this.state.wordsGuess.slice();
      wordsGuess.push(word);

      const wordsGuessed = this.state.wordsGuessed + 1;

      this.setState({
        wordsGuess,
        word: '',
        wordsGuessed,
      });

      this.knowLevel(wordsGuess);
    }
  }

  removeLast() {
    this.setState({ word: this.state.word.slice(0, -1) });
  }

  knowLevel(wordsGuess) {
    const level = this.state.currentLevel;

    if (wordsGuess.length === this.state.levels[level].words.length) {
      let currentLevel = this.state.currentLevel + 1;

      if (currentLevel === this.state.levels.length) {
        currentLevel = 0;
        if (window.confirm('🎉 THE END 🎉 \n Do you want to Tweet your score?')) {
          window.open(`http://twitter.com/share?text=I%20found%20${this.state.wordsGuessed}%20words%20in&url=${window.location.origin}&hashtags=dev,game`)
        }
      } else {
        alert(`🎉 NEXT LEVEL : ${currentLevel + 1} 🎉`);
      }

      this.setState({
        currentLevel,
        wordsGuess: [],
      });
    }
  }

  render() {
    const level = this.state.currentLevel;
    const topic = this.state.levels[level].topic;

    return (
      <div>
        <Header
          title="Dev Game"
          numberOfGuessWords={this.state.wordsGuess.length}
          numberOfWords={this.state.levels[level].words.length}
          level={level + 1}
          topic={topic}
        />

        <GitHubRibbon />

        <section className="mw6 center">
          <LettersList
            letters={this.state.levels[level].letters}
            onLetterSelect={this.guessWord}
          />

          <CurrentWord word={this.state.word} />

          <Button
            text="Delete"
            buttonHandleClick={this.removeLast}
          />

          <WordsList words={this.state.wordsGuess} />
        </section>

        <Footer words={this.state.wordsGuessed} />
      </div>
    );
  }
}

export default App;
