import { getRepos, getUser } from '../services/gitHubApi';

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

export const SET_REPOS = 'SET_REPOS';
export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
});



export const fetchUser = username => dispatch => {
  getUser(username)
    .then(user => {
      dispatch(setUserInfo(user));
    })
    .finally(() => dispatch(setLoading(false)));

};

export const fetchRepos = username => dispatch => {
  getRepos(username)
    .then(repos => {
      dispatch(setRepos(repos))
        .finally(() => dispatch(setLoading(false)));
    });
};
