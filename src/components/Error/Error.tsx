import React from 'react';

interface ErrorProps {
    message: string
}

const Error = ({ message }: ErrorProps) => (
  <div className='weather-app__error'>
    The following error occurred: {message}
  </div>
);

export default Error;