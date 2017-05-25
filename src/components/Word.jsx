import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, color }) => (
  <li className={`dib mh2 mb2 shadow-4 bg-${color}`}>
    <p className="f6 f5-ns db tc white ph3">
      {word.toUpperCase()}
    </p>
  </li>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Word;
