import { setUsername, setUserInfo, setRepos } from '../actions/gitHubActions';
import reducer from './gitHubReducer';

describe('gitHub reducer', () => {
  it('handles the SET_USERNAME action', () => {
    const state = {
      username: '',
    };

    const action = setUsername(
      'jerud-moyer'
    );

    const newState = reducer(state, action);

    expect(newState).toEqual({
      username: 'jerud-moyer'
    });
  });

  it('handles the SET_USER_INFO action', () => {
    const state = {
      username: 'jerud-moyer',
      userInfo: {},
      loading: true
    };

    const action = setUserInfo(
      {
        name: 'jerud moyer',
        followerCount: 2,
        followingCount: 1,
        profileLink: 'https://github.com/jerud-moyer'
      }
    );

    const newState = reducer(state, action);

    expect(newState).toEqual({
      username: 'jerud-moyer',
      userInfo: {
        name: 'jerud moyer',
        followerCount: 2,
        followingCount: 1,
        profileLink: 'https://github.com/jerud-moyer'
      },
      loading: true
    });
  });

  it('handles the SET_REPOS action', () => {
    const state = { 
      repos: {},
      loading: true
    };

    const action = setRepos(
      {
        repoName: 'rock-paper-scissors',
        reoUrl: 'github.com',
      }
    );

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: true,
      repos: {
        repoName: 'rock-paper-scissors',
        reoUrl: 'github.com',
      }
    });
  });
});
