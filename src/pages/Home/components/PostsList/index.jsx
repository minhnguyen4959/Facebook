import React, { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaRegComment, FaRegShareSquare } from 'react-icons/fa';
import { 
  PostsContainer, 
  PostCard, 
  PostHeader, 
  PostAvatar, 
  PostInfo, 
  PostAuthor, 
  PostTime, 
  PostContent, 
  PostText, 
  PostImage, 
  PostActions, 
  PostAction, 
  PostStats, 
  LikeCount, 
  CommentCount,
  CommentsContainer,
  CommentItem,
  CommentAvatar,
  CommentContent,
  CommentAuthor,
  CommentText,
  CommentInput,
  CommentInputWrapper,
  CommentInputAvatar,
  ReactionsContainer,
  ReactionButton,
  ReactionTooltip
} from './styles';

// Dữ liệu mẫu cho bài đăng
const postsData = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    content: 'Hôm nay trời đẹp quá! 🌞',
    image: 'https://picsum.photos/id/10/600/400',
    time: '2 giờ trước',
    likes: 25,
    comments: [
      {
        id: 1,
        author: {
          id: 2,
          name: 'Trần Thị B',
          avatar: 'https://i.pravatar.cc/150?img=12'
        },
        content: 'Đúng vậy, thời tiết hôm nay rất tuyệt!'
      },
      {
        id: 2,
        author: {
          id: 3,
          name: 'Lê Văn C',
          avatar: 'https://i.pravatar.cc/150?img=13'
        },
        content: 'Bạn đang ở đâu vậy?'
      }
    ]
  },
  {
    id: 2,
    author: {
      id: 4,
      name: 'Phạm Thị D',
      avatar: 'https://i.pravatar.cc/150?img=14'
    },
    content: 'Vừa mua điện thoại mới, cảm thấy rất hài lòng! 📱',
    image: 'https://picsum.photos/id/20/600/400',
    time: '5 giờ trước',
    likes: 42,
    comments: [
      {
        id: 3,
        author: {
          id: 5,
          name: 'Hoàng Văn E',
          avatar: 'https://i.pravatar.cc/150?img=15'
        },
        content: 'Bạn mua model gì vậy?'
      }
    ]
  },
  {
    id: 3,
    author: {
      id: 6,
      name: 'Vũ Thị F',
      avatar: 'https://i.pravatar.cc/150?img=16'
    },
    content: 'Cuối tuần này ai có kế hoạch gì không? Mình đang nghĩ đến việc đi leo núi. 🏔️',
    time: '1 ngày trước',
    likes: 18,
    comments: []
  }
];

// Dữ liệu cho các reaction
const reactions = [
  { id: 'like', icon: '👍', label: 'Thích', color: '#1877f2' },
  { id: 'love', icon: '❤️', label: 'Yêu thích', color: '#f33e58' },
  { id: 'haha', icon: '😆', label: 'Haha', color: '#f7b125' },
  { id: 'wow', icon: '😮', label: 'Wow', color: '#f7b125' },
  { id: 'sad', icon: '😢', label: 'Buồn', color: '#f7b125' },
  { id: 'angry', icon: '😠', label: 'Phẫn nộ', color: '#e78c2d' }
];

const PostsList = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [showReactions, setShowReactions] = useState(null);
  const [userReactions, setUserReactions] = useState({});

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleReaction = (postId, reactionId) => {
    setUserReactions(prev => ({
      ...prev,
      [postId]: reactionId
    }));
    setShowReactions(null);
  };

  const getReactionForPost = (postId) => {
    return userReactions[postId] || null;
  };

  const getReactionDetails = (reactionId) => {
    return reactions.find(r => r.id === reactionId) || reactions[0];
  };

  return (
    <PostsContainer>
      {postsData.map(post => {
        const userReaction = getReactionForPost(post.id);
        const reactionDetails = userReaction ? getReactionDetails(userReaction) : null;
        
        return (
          <PostCard key={post.id}>
            <PostHeader>
              <PostAvatar>
                <img src={post.author.avatar} alt={post.author.name} />
              </PostAvatar>
              <PostInfo>
                <PostAuthor>{post.author.name}</PostAuthor>
                <PostTime>{post.time}</PostTime>
              </PostInfo>
            </PostHeader>
            
            <PostContent>
              <PostText>{post.content}</PostText>
              {post.image && <PostImage src={post.image} alt="Post" />}
            </PostContent>
            
            <PostStats>
              <LikeCount>{post.likes + (likedPosts[post.id] ? 1 : 0)} lượt thích</LikeCount>
              <CommentCount>{post.comments.length} bình luận</CommentCount>
            </PostStats>
            
            <PostActions>
              <PostAction 
                onMouseEnter={() => setShowReactions(post.id)}
                onMouseLeave={() => setShowReactions(null)}
                onClick={() => handleLike(post.id)}
                active={likedPosts[post.id] || userReaction}
                color={reactionDetails?.color}
              >
                {userReaction ? (
                  <span>{getReactionDetails(userReaction).icon}</span>
                ) : (
                  likedPosts[post.id] ? <FaThumbsUp /> : <FaRegThumbsUp />
                )}
                {userReaction ? getReactionDetails(userReaction).label : 'Thích'}
                
                {showReactions === post.id && (
                  <ReactionsContainer>
                    {reactions.map(reaction => (
                      <ReactionButton 
                        key={reaction.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReaction(post.id, reaction.id);
                        }}
                      >
                        <span>{reaction.icon}</span>
                        <ReactionTooltip>{reaction.label}</ReactionTooltip>
                      </ReactionButton>
                    ))}
                  </ReactionsContainer>
                )}
              </PostAction>
              <PostAction>
                <FaRegComment />
                Bình luận
              </PostAction>
              <PostAction>
                <FaRegShareSquare />
                Chia sẻ
              </PostAction>
            </PostActions>
            
            {post.comments.length > 0 && (
              <CommentsContainer>
                {post.comments.map(comment => (
                  <CommentItem key={comment.id}>
                    <CommentAvatar>
                      <img src={comment.author.avatar} alt={comment.author.name} />
                    </CommentAvatar>
                    <CommentContent>
                      <CommentAuthor>{comment.author.name}</CommentAuthor>
                      <CommentText>{comment.content}</CommentText>
                    </CommentContent>
                  </CommentItem>
                ))}
              </CommentsContainer>
            )}
            
            <CommentInputWrapper>
              <CommentInputAvatar>
                <img src="https://i.pravatar.cc/150?img=20" alt="Your Avatar" />
              </CommentInputAvatar>
              <CommentInput placeholder="Viết bình luận..." />
            </CommentInputWrapper>
          </PostCard>
        );
      })}
    </PostsContainer>
  );
};

export default PostsList; 