import './Online.css';

function Online({ user }) {
  return (
    <li className='rightbarFriend'>
      <div className='rightbarProfileImageContainer'>
        <img src={user.profilePicture} className='rightbarProfileImg' alt='' />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUsername'>{user.username} </span>
    </li>
  );
}

export default Online;
