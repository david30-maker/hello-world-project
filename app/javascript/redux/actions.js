export const fetchRandomGreeting = () => {
    return (dispatch) => {
      fetch('/api/random_greeting')
        .then((response) => response.json())
        .then((data) => dispatch(setRandomGreeting(data.message)))
        .catch((error) => console.error('Error fetching greeting:', error));
    };
  };
  
  export const setRandomGreeting = (greeting) => ({
    type: 'SET_RANDOM_GREETING',
    payload: greeting,
  });
  