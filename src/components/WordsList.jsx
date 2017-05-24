import React from 'react';
import PropTypes from 'prop-types';

import Word from './Word';

const WordsList = ({ words }) => (
  <ul className="list pv4">
    { words.map(word => (
      <Word
        word={word}
        key={word}
      />))
    }
  </ul>
);

WordsList.propTypes = {
  words: PropTypes.arrayOf(String).isRequired,
};

export default WordsList;
