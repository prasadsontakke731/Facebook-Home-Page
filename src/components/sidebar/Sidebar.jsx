import './Sidebar.css';
import {
  RssFeed,
  Chat,
  VideoSettings,
  Group,
  Bookmark,
  QuestionMarkSharp,
  Event,
} from '@mui/icons-material';
import React from 'react';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriends/CloseFriend';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon ' />
            <span className='sidebarListItemText'>RssFeed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon ' />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <VideoSettings className='sidebarIcon ' />
            <span className='sidebarListItemText'>Video</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon ' />
            <span className='sidebarListItemText'>Group</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon ' />
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className='sidebarListItem'>
            <QuestionMarkSharp className='sidebarIcon ' />
            <span className='sidebarListItemText'>Question</span>
          </li>

          <li className='sidebarListItem'>
            <Event className='sidebarIcon ' />
            <span className='sidebarListItemText'>Event</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          {Users.map((u) => {
            return <CloseFriend key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
