import React from 'react';

const Word = ({ word }) =>  {
  return (
    <li
      className="dib ma3 mb2 bg-light-blue w-20 shadow-4"
    >
      <p className="f6 f5-ns b db tc white">
        {word.toUpperCase()}
      </p>
    </li>
  );
}

export default Word;
