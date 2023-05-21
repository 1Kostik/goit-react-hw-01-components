import PropTypes from 'prop-types';
import css from './FriendListItems.module.css';
const FriendListItems = ({ avatar, name, isOnline }) => {
   return (
      <>      <li class="item">
         <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
         <p class="name">{ name}</p>
         </li>
         </>
   )
}
export default FriendListItems;