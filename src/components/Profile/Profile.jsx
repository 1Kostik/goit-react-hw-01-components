import PropTypes from 'prop-types';
import css from './Profile.module.css'
const ProfileUser = ({
  username,
  tag,
  location,
  imgUrl,
  followers,
   views,
   likes,
}) => {
     return (
       <div className={css.profile}>
         <div className={css.description}>
           <img src={imgUrl} alt="User avatar" className={css.avatar} />
           <p className={css.name}>{username}</p>
           <p className={css.tag}>@{tag}</p>
           <p className={css.location}>{location}</p>
         </div>

         <ul className={css.stats}>
           <li>
             <span className={css.label}>Followers</span>
             <span className={css.quantity}>{followers}</span>
           </li>
           <li>
             <span className={css.label}>Views</span>
             <span className={css.quantity}>{views}</span>
           </li>
           <li>
             <span className={css.label}>Likes</span>
             <span className={css.quantity}>{likes}</span>
           </li>
         </ul>
       </div>
     );
};

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  imgUrl: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default ProfileUser;
// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }