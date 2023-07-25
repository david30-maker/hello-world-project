// app/javascript/components/Greeting.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ greeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return <div>{greeting}</div>;
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = {
  fetchRandomGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
