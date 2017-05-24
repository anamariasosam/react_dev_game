import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, numberOfGuessWords, numberOfWords, level, topic }) =>
(
  <header className="tc pv4 pv5-ns">
    <img
      src="https://emojipedia-us.s3.amazonaws.com/cache/bf/96/bf96f627ef7a073e48bc6f7c2f55df96.png"
      className="br-100 pa2 ba b--black-10 h3 w3"
      alt="dev game logo"
    />
    <h1 className="f5 f4-ns fw6 mid-gray">{title}</h1>
    <p className="f6 gray fw2 ttu tracked ">
      <span className="b">Topic:</span> {topic}
    </p>
    <p className="f6 gray fw2 ttu tracked ">
      <span className="b">Level:</span> {level}
    </p>
    <p className="f6 gray fw2 ttu tracked">
      <span className="b">Words:</span> {numberOfGuessWords} / {numberOfWords}
    </p>
  </header>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfGuessWords: PropTypes.number.isRequired,
  numberOfWords: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
};

export default Header;
