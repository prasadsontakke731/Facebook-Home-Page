import './Post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';
function Post({ post }) {
  let [like, setLike] = useState(post.like);
  let [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  console.log(post);
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=''
              className='postProfileImg'
            />
            <span className='postUserName'>
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={post.photo} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src='/assets/like.png'
              onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src='/assets/heart.png'
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people liked</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
