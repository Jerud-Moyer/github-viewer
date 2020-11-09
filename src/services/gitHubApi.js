export const getUser = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => ({
      name: user.name,
      followerCount: user.followers,
      followingCount: user.following,
      profileLink: user.html_url,
      imageUrl: user.avatar_url
    }));
};

export const getRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      repoName: repo.name,
      repoUrl: repo.html_url
    })));
};
