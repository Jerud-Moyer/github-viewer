export const getUser = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => ({
      name: user.name,
      followerCount: user.followers,
      followingCount: user.following,
      profileLink: user.html_url
    }));
};
