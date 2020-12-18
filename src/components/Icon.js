import React from 'react';

const Icon = (props) => {
  var result = '';
  if (props.checked === true) {
    result = "true icon"
  } else {
    result = "false icon"
  }
  return(
    <p>{result}</p>
  )
};

export default Icon;
