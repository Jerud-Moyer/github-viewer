import React from 'react';
import RepoItem from './RepoItem';
import { useSelector } from 'react-redux';

const repoDisplay = () => {
  const repos = useSelector(state => state.repos);
  const loading = useSelector(state => state.loading);
  

  if(loading) return <h1>Loading...</h1>;

  const repoElements = repos.map(repo => (
    <li key={repo.repoName}>
      <RepoItem {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

export default repoDisplay;
