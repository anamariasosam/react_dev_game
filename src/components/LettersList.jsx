import React from 'react';

import Letter from './Letter';

const LettersList = (props) =>  {
  const lettersList = props.letters.map((letter, index) =>
    <Letter
      letter={letter}
      key={index}
      onLetterSelect={ props.onLetterSelect }
     />
  );

  return (
    <div>
      <ul className="list pv4">
        {lettersList}
      </ul>
    </div>
  );
}

export default LettersList;
