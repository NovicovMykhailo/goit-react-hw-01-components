import './app.css';
// components
import Profile from './profile/profile';
import StatisticsList from './statistics/Statistics';
//data
import user from './profile/user.json';
import statsData from './statistics/data.json';

export const App = () => {
  return (
    <div className="main">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatisticsList stats={statsData} title="Statistics" />
    </div>
  );
};
