import React from 'react';
import PropTypes from 'prop-types';

import Word from './Word';

const WordsList = ({ words, color }) => (
  <ul className="list pv4">
    { words.map(word => (
      <Word
        word={word}
        key={word}
        color={color}
      />))
    }
  </ul>
);

WordsList.propTypes = {
  words: PropTypes.arrayOf(String).isRequired,
  color: PropTypes.string.isRequired,
};

export default WordsList;
