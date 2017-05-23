import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ letter, onLetterSelect }) =>
  (
    <li className="dib">
      <a
        className="dim f6 bb bt bl ph3 mh2 mv2 pv2 dib near-white bg-light-purple w3 tc link"
        onClick={() => onLetterSelect(letter)}
        href="#0"
      >
        {letter}
      </a>
    </li>
  );

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onLetterSelect: PropTypes.func.isRequired,
};

export default Letter;
