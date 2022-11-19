import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>sanket Mane</b> and 3 others
          </span>
        </div>
        <img src='/assets/ad.png' className='rightbarAd' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'></h4>
        <div className='rightbarInfo'>
          <div className='rightInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Pune</span>
          </div>
          <div className='rightInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Solapur</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/1.jpeg'
              alt=''
              className='rightbarfollowingImg'
            />
            <span className='rightbarFollowingName'>Sanket Mane</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='rightbarfollowingImg'
            />
            <span className='rightbarFollowingName'>Sanket Mane</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/3.jpeg'
              alt=''
              className='rightbarfollowingImg'
            />
            <span className='rightbarFollowingName'>Sanket Mane</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/4.jpeg'
              alt=''
              className='rightbarfollowingImg'
            />
            <span className='rightbarFollowingName'>Sanket Mane</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/5.jpeg'
              alt=''
              className='rightbarfollowingImg'
            />
            <span className='rightbarFollowingName'>Sanket Mane</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/6.jpeg'
              alt=''
              className='rightbarfollowingImg'
            />
            <span className='rightbarFollowingName'>Sanket Mane</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='Rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
