import React from 'react';
import PropTypes from 'prop-types';

import Letter from './Letter';

const LettersList = props => (
  <ul className="list pb4">
    { props.letters.map(letter => (
      <Letter
        letter={letter}
        key={letter}
        onLetterSelect={props.onLetterSelect}
      />))
    }
  </ul>
);

LettersList.propTypes = {
  letters: PropTypes.arrayOf(String).isRequired,
  onLetterSelect: PropTypes.func.isRequired,
};

export default LettersList;
