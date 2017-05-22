import React from 'react';

const Letter = ({ letter }) =>  {
  return (
    <div className="
      bg-light-purple
      fl
      ma3
      shadow-4
      white
      w-20
    ">
      <p className="tc">{letter}</p>
    </div>
  );
}

export default Letter;
