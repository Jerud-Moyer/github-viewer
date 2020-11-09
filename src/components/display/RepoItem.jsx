import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repoName, repoUrl }) => {
  
  
  return (
    <>
      <a href={repoUrl}>
        <h3>{repoName}</h3>
      </a>
    </>
  );

  
};

RepoItem.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired
};

export default RepoItem;
