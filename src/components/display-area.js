import React from 'react';

const DisplayArea = ({ displayText }) => {
  return (
    <div
      className="display-area eight wide column" 
      dangerouslySetInnerHTML={ { __html: displayText } }
    />
  );
};

export default DisplayArea;