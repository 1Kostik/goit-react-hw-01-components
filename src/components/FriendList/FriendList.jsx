import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItems from './FriendListItems';

const FriendList = ({ friends }) => {
   <ul class="friend-list"> 
   <FriendListItems>
      {friends.map(({ avatar, name, isOnline, id }) => { return (<FriendListItems key={id} avatar={avatar} name={name} isOnline={isOnline} />) }
      )}
      </FriendListItems>
      </ul>
}
export default FriendList;
