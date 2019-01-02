import React from 'react';

const userOutput = (props) => {
      const outputStyle = {
            width: '60%',
            padding: '16px',
            margin: '16px',
            border: '2px solid black',
            backgroundColor: '#ccc',
            textAlign: 'center',
            margin: '0 auto'
      };
      return (
            <div style={outputStyle}>
                  <p>Username: {props.userName}</p>
                  <p>I hope I'll be overwritten!</p>
            </div>
      );
}

export default userOutput;
