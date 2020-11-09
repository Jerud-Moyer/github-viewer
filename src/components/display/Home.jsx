import React from 'react';
import Controls from '../controls/Controls';
import UserDisplay from './UserDisplay';
import RepoDisplay from './RepoDisplay';

const Home = () => {
  return (
    <div>
      <Controls />
      <UserDisplay />
      <RepoDisplay />
      
    </div>
  );
};

export default Home;
