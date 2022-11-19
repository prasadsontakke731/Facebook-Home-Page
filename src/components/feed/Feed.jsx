import Share from '../../components/share/Share';
import Post from '../post/Post';
import './Feed.css';
import { Posts } from '../../dummyData';

function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((p) => {
          return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
