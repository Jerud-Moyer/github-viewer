import {
  SET_USERNAME,
  SET_USER_INFO,
  SET_LOADING,
  SET_REPOS
  
} from '../actions/gitHubActions';


const initialState = {
  username: '',
  userInfo: {},
  loading: true,
  repos: [],
  repoUrl: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_REPOS:
      return {
        ...state,
        repos: action.payload
      };
  
    default:
      return state;
  }
}
