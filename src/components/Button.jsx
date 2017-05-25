import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, buttonHandleClick }) => (
  <a
    className="f6 ba pv2 ph3 mb2 mh6 hot-pink tc db link dim"
    onClick={() => buttonHandleClick()}
    href="#0"
  >
    {text}
  </a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonHandleClick: PropTypes.func.isRequired,
};

export default Button;
