import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, buttonHandleClick }) => (
  <a
    className="f6 ba pv2 mb2 hot-pink w3 tc db center link dim"
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
