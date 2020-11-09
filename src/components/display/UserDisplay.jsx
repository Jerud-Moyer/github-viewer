import React from 'react';
import { useSelector } from 'react-redux';

const UserDisplay = () => {
  
  const userInfo = useSelector(state => state.userInfo);


  return (
    <div>
      <h1>{userInfo.name}</h1>
      <img src={userInfo.imageUrl}/>
      <h3>followers: {userInfo.followerCount}</h3>
      <h3>following: {userInfo.followingCount}</h3>
      <a href={userInfo.profileLink}>Profile</a>
    </div>
  );
};

export default UserDisplay;
