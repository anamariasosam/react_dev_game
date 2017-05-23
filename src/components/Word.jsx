import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word }) => (
  <li className="dib ma3 mb2 bg-blue w-20 shadow-4">
    <p className="f6 f5-ns b db tc white">
      {word.toUpperCase()}
    </p>
  </li>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Word;
