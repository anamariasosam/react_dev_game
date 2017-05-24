import React from 'react';
import PropTypes from 'prop-types';

const CurrentWord = ({ word }) =>
  (
    <p className="f6 f5-ns db tc hot-pink bb mh5">
      {word}
    </p>
  );

CurrentWord.propTypes = {
  word: PropTypes.string.isRequired,
};

export default CurrentWord;
