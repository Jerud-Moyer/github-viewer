import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserInfo,
  setUsername,
  fetchUser
}
  from '../../actions/gitHubActions';


const Controls = () => {
  const dispatch = useDispatch();

  const username = useSelector(state => state.username);
  
  const handleChange = ({ target }) => {
    dispatch(setUsername(target.value));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">User Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={username}
        onChange={handleChange}
      />
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};

export default Controls;
