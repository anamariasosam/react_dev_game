import React from 'react';

const Letter = ({ letter, onLetterSelect }) =>  {
  return (
    <li
      className="dib ma3 mb2 bg-light-purple w-20 shadow-4"
      onClick={ () => onLetterSelect(letter) }
    >
      <p className="f6 f5-ns b db tc white">
        {letter}
      </p>
    </li>
  );
}

export default Letter;
