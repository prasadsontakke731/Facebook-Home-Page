import Feed from '../../components/feed/Feed';
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css';
function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
