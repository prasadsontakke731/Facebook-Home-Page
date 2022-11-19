import Feed from '../../components/feed/Feed';
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/Topbar/Topbar';
import './Profile.css';
function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src='/assets/post/1.jpeg'
                className='profileCoverImg'
                alt=''
              />
              <img
                src='/assets/person/7.jpeg'
                className='profileUserImg'
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Prasad Sontakke</h4>
              <span className='profileInfoDesc'>Hello My Friends</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
