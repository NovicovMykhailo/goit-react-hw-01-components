import './app.css';

import Profile from './profile/profile';
import user from './profile/user.json';

export const App = () => {
  return (
    <div className="main">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      ></Profile>
    </div>
  );
};
