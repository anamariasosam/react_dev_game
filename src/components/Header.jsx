import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) =>
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
    </div>
  );

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
