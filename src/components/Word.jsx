import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word }) => (
  <li className="dib mh2 mb2 bg-blue shadow-4">
    <p className="f6 f5-ns db tc white ph3">
      {word.toUpperCase()}
    </p>
  </li>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Word;
