import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, numberOfGuessWords, numberOfWords }) =>
  (
    <div className="
      bg-pink
      mb3
      pa3
      shadow-5
      tc
      white"
    >
      <h2>
        {title}
      </h2>
      <p className="tc">
        {numberOfGuessWords} / {numberOfWords}
      </p>
    </div>
  );

Header.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfGuessWords: PropTypes.number.isRequired,
  numberOfWords: PropTypes.number.isRequired,
};

export default Header;
