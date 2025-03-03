import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaVideo, FaImage, FaSmile, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const HomeContainer = styled.div`
  background-color: #f0f2f5;
  min-height: calc(100vh - 60px);
  padding: 20px 0;
`;

const ContentWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 0 15px;
`;

const CreatePostCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  margin-bottom: 16px;
`;

const PostInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #e4e6eb;
  margin-bottom: 12px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  color: #65676b;
  font-size: 40px;
  display: flex;
  align-items: center;
`;

const PostInput = styled.div`
  flex: 1;
  background-color: #f0f2f5;
  border-radius: 20px;
  padding: 8px 12px;
  color: #65676b;
  font-size: 17px;
  cursor: pointer;
  
  &:hover {
    background-color: #e4e6eb;
  }
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  flex: 1;
  cursor: pointer;
  color: #65676b;
  font-size: 15px;
  font-weight: 600;
  
  &:hover {
    background-color: #f0f2f5;
  }
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
`;

const VideoButton = styled(PostActionButton)`
  svg {
    color: #f3425f;
  }
`;

const PhotoButton = styled(PostActionButton)`
  svg {
    color: #45bd62;
  }
`;

const FeelingButton = styled(PostActionButton)`
  svg {
    color: #f7b928;
  }
`;

const PostCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  overflow: hidden;
`;

const PostHeader = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
`;

const PostInfo = styled.div`
  margin-left: 8px;
`;

const PostAuthor = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #050505;
`;

const PostTime = styled.div`
  font-size: 13px;
  color: #65676b;
  margin-top: 2px;
`;

const PostContent = styled.div`
  padding: 4px 16px 16px;
  font-size: 15px;
  color: #050505;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
`;

const PostStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  color: #65676b;
  font-size: 15px;
  border-bottom: 1px solid #e4e6eb;
`;

const LikeCount = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    color: #1877f2;
    background-color: white;
    border-radius: 50%;
    font-size: 18px;
    margin-right: 5px;
  }
`;

const CommentCount = styled.div``;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;
`;

const PostFooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 6px 0;
  flex: 1;
  cursor: pointer;
  color: #65676b;
  font-size: 15px;
  font-weight: 600;
  
  &:hover {
    background-color: #f0f2f5;
  }
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
`;

const CreatePostModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2);
  width: 500px;
  max-width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e4e6eb;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #050505;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  background-color: #e4e6eb;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  
  &:hover {
    background-color: #d8dadf;
  }
`;

const ModalBody = styled.div`
  padding: 16px;
`;

const PostTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-size: 18px;
  min-height: 150px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #65676b;
  }
`;

const ModalFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #e4e6eb;
`;

const PostButton = styled.button`
  width: 100%;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 0;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: #166fe5;
  }
  
  &:disabled {
    background-color: #e4e6eb;
    color: #bcc0c4;
    cursor: not-allowed;
  }
`;

// Dữ liệu mẫu cho các bài đăng
const samplePosts = [
  {
    id: 1,
    author: 'Nguyễn Văn A',
    time: '3 giờ trước',
    content: 'Hôm nay là một ngày tuyệt vời! 😊',
    image: 'https://source.unsplash.com/random/1200x800?nature',
    likes: 120,
    comments: 24
  },
  {
    id: 2,
    author: 'Trần Thị B',
    time: '5 giờ trước',
    content: 'Vừa hoàn thành dự án mới, cảm thấy rất hạnh phúc!',
    image: 'https://source.unsplash.com/random/1200x800?work',
    likes: 85,
    comments: 12
  },
  {
    id: 3,
    author: 'Lê Văn C',
    time: '1 ngày trước',
    content: 'Cuối tuần này ai có kế hoạch gì không? Mình đang nghĩ đến việc đi leo núi.',
    image: '',
    likes: 45,
    comments: 32
  }
];

const Home = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [showModal, setShowModal] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');

  const handleCreatePost = () => {
    if (newPostContent.trim() === '') return;
    
    const newPost = {
      id: Date.now(),
      author: 'Bạn',
      time: 'Vừa xong',
      content: newPostContent,
      image: '',
      likes: 0,
      comments: 0
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setShowModal(false);
  };

  return (
    <HomeContainer>
      <ContentWrapper>
        <CreatePostCard>
          <PostInputWrapper>
            <UserAvatar>
              <FaUserCircle />
            </UserAvatar>
            <PostInput onClick={() => setShowModal(true)}>
              Bạn đang nghĩ gì?
            </PostInput>
          </PostInputWrapper>
          <PostActions>
            <VideoButton>
              <FaVideo />
              Video trực tiếp
            </VideoButton>
            <PhotoButton>
              <FaImage />
              Ảnh/Video
            </PhotoButton>
            <FeelingButton>
              <FaSmile />
              Cảm xúc
            </FeelingButton>
          </PostActions>
        </CreatePostCard>
        
        {posts.map(post => (
          <PostCard key={post.id}>
            <PostHeader>
              <UserAvatar>
                <FaUserCircle />
              </UserAvatar>
              <PostInfo>
                <PostAuthor>{post.author}</PostAuthor>
                <PostTime>{post.time}</PostTime>
              </PostInfo>
            </PostHeader>
            <PostContent>{post.content}</PostContent>
            {post.image && <PostImage src={post.image} alt="Post" />}
            <PostStats>
              <LikeCount>
                <FaThumbsUp />
                {post.likes}
              </LikeCount>
              <CommentCount>{post.comments} bình luận</CommentCount>
            </PostStats>
            <PostFooter>
              <PostFooterButton>
                <FaThumbsUp />
                Thích
              </PostFooterButton>
              <PostFooterButton>
                <FaComment />
                Bình luận
              </PostFooterButton>
              <PostFooterButton>
                <FaShare />
                Chia sẻ
              </PostFooterButton>
            </PostFooter>
          </PostCard>
        ))}
      </ContentWrapper>
      
      {showModal && (
        <CreatePostModal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Tạo bài viết</ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <PostTextarea 
                placeholder="Bạn đang nghĩ gì?"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                autoFocus
              />
            </ModalBody>
            <ModalFooter>
              <PostButton 
                disabled={newPostContent.trim() === ''}
                onClick={handleCreatePost}
              >
                Đăng
              </PostButton>
            </ModalFooter>
          </ModalContent>
        </CreatePostModal>
      )}
    </HomeContainer>
  );
};

export default Home;
