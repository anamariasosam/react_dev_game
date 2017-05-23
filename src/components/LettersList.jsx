import React from 'react';
import PropTypes from 'prop-types';

import Letter from './Letter';

const LettersList = props => (
  <div>
    <ul className="list pv4">
      { props.letters.map(letter => (
        <Letter
          letter={letter}
          key={letter}
          onLetterSelect={props.onLetterSelect}
        />))
      }
    </ul>
  </div>
);

LettersList.propTypes = {
  letters: PropTypes.arrayOf(String).isRequired,
  onLetterSelect: PropTypes.func.isRequired,
};

export default LettersList;
