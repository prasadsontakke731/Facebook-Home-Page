import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>FaceBook</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchBar'>
          <Search className='searchIcon' />
          <input
            placeholder='search for friends, post or videos'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarlinks'>
          <span className='topbarLink'>HomePage</span>
          <span className='topbarLink'>TimeLine</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img src='/assets/person/2.jpeg' alt='' className='topbarImg' />
      </div>
    </div>
  );
}

export default Topbar;
