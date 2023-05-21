import user from 'path/to/user.json';
import ProfileUser from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from 'path/to/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (<>
    <ProfileUser
      username={user.username}
      tag={user.tag}
      location={user.location}
      imgUrl={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes} />    
    <Statistics title="Upload stats" stats={data} />   
    <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
    </>
  );
};


