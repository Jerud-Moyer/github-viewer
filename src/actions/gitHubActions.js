import { getUser } from '../services/gitHubApi';

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username
});

export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  payload: userInfo
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const fetchUser = username => dispatch => {
  getUser(username)
    .then(user => {
      dispatch(setUserInfo(user))
        .then(console.log)
    })
    .finally(() => dispatch(setLoading(false)));

};
