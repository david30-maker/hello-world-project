import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setRandomGreeting(data.message))
      .catch((error) => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
