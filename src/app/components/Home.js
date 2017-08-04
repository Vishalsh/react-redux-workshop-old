import React, {Component} from 'react';

import UserContainer from 'containers/UserContainer';
import NameContainer from 'containers/NameContainer';

const Home = () => {
  return (
    <main>
      <UserContainer/>
      <NameContainer />
    </main>
  )
};

export default Home;