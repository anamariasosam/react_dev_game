import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ letter, onLetterSelect }) =>
  (
    <li className="dib ma3 mb2 bg-light-purple shadow-4 pointer">
      <button
        className="f6 f5-ns b db tc white w-20"
        onClick={() => onLetterSelect(letter)}
      >
        {letter}
      </button>
    </li>
  );

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onLetterSelect: PropTypes.func.isRequired,
};

export default Letter;
