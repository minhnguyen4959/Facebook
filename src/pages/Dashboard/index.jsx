import React, { useState } from 'react';
import { FaPlus, FaEllipsisH, FaHeart, FaRegHeart, FaComment, FaShare, FaBookmark, FaRegBookmark, FaGlobeAsia, FaUserFriends, FaLock, FaImage, FaVideo, FaSmile, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import {
  NewsfeedContainer,
  StoriesSection,
  StoriesHeader,
  StoriesTitle,
  StoriesViewAll,
  StoriesContainer,
  StoryCard,
  StoryImage,
  StoryUser,
  StoryUserImage,
  StoryUserName,
  CreateStoryCard,
  CreateStoryIcon,
  CreateStoryText,
  FeedSection,
  PostCard,
  PostHeader,
  PostAuthor,
  PostAuthorImage,
  PostAuthorInfo,
  PostAuthorName,
  PostMeta,
  PostTime,
  PostPrivacy,
  PostOptions,
  PostContent,
  PostText,
  PostImage,
  PostActions,
  PostAction,
  PostStats,
  PostLikes,
  PostComments,
  PostShares,
  CommentSection,
  CommentForm,
  CommentInput,
  CommentButton,
  SidebarSection,
  SidebarCard,
  SidebarTitle,
  SidebarContent,
  EventItem,
  EventDate,
  EventInfo,
  EventTitle,
  EventMeta,
  BirthdayItem,
  BirthdayIcon,
  BirthdayText,
  SuggestedFriend,
  SuggestedFriendImage,
  SuggestedFriendInfo,
  SuggestedFriendName,
  SuggestedFriendMeta,
  SuggestedFriendActions,
  FriendButton,
  DismissButton,
  NewsfeedContent,
  MainContent,
  RightSidebar,
  CreatePostCard,
  CreatePostHeader,
  CreatePostInput,
  CreatePostActions,
  CreatePostAction,
  CreatePostButton,
  CreatePostUserImage,
  LeftSidebar,
  SidebarLink,
  SidebarIcon,
  SidebarText,
  SidebarLinkActive
} from './styles';

const Newsfeed = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [commentText, setCommentText] = useState('');
  const [postText, setPostText] = useState('');
  
  // Dữ liệu mẫu cho stories
  const stories = [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Nguyễn Văn A',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Trần Thị B',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482'
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Lê Văn C',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
      },
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b'
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Phạm Thị D',
        image: 'https://randomuser.me/api/portraits/women/17.jpg'
      },
      image: 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478'
    },
    {
      id: 5,
      user: {
        id: 5,
        name: 'Hoàng Văn E',
        image: 'https://randomuser.me/api/portraits/men/91.jpg'
      },
      image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8'
    }
  ];
  
  // Dữ liệu mẫu cho bài viết
  const posts = [
    {
      id: 1,
      author: {
        id: 2,
        name: 'Trần Thị B',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      time: '2 giờ trước',
      privacy: 'public',
      content: 'Hôm nay thật là một ngày tuyệt vời! Tôi vừa hoàn thành dự án lớn và được sếp khen ngợi. Cảm thấy rất hạnh phúc và tự hào về bản thân. 😊',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      likes: 124,
      comments: 32,
      shares: 8
    },
    {
      id: 2,
      author: {
        id: 3,
        name: 'Lê Văn C',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
      },
      time: '5 giờ trước',
      privacy: 'friends',
      content: 'Vừa khám phá một quán cà phê mới toanh ở quận 1. Không gian cực kỳ ấm cúng và đồ uống thì ngon tuyệt! Mọi người có thời gian ghé qua thử nhé. Đảm bảo không làm các bạn thất vọng đâu. 👍',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0',
      likes: 87,
      comments: 21,
      shares: 5
    },
    {
      id: 3,
      author: {
        id: 5,
        name: 'Hoàng Văn E',
        image: 'https://randomuser.me/api/portraits/men/91.jpg'
      },
      time: '1 ngày trước',
      privacy: 'public',
      content: 'Chia sẻ với mọi người một vài mẹo nhỏ để giữ sức khỏe trong mùa dịch:\n\n1. Uống đủ nước mỗi ngày\n2. Tập thể dục ít nhất 30 phút\n3. Đảm bảo ngủ đủ 7-8 tiếng\n4. Ăn nhiều rau xanh và trái cây\n5. Hạn chế đồ ngọt và đồ chiên rán\n\nHãy cùng nhau giữ gìn sức khỏe nhé!',
      image: null,
      likes: 215,
      comments: 45,
      shares: 32
    },
    {
      id: 4,
      author: {
        id: 4,
        name: 'Phạm Thị D',
        image: 'https://randomuser.me/api/portraits/women/17.jpg'
      },
      time: '2 ngày trước',
      privacy: 'public',
      content: 'Cuối tuần vừa rồi mình đã có chuyến du lịch Đà Lạt tuyệt vời. Thời tiết se lạnh, phong cảnh thì đẹp mê ly. Đặc biệt là được thưởng thức những món ăn đặc sản nơi đây. Nhất định sẽ quay lại vào dịp cuối năm! ❤️',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      likes: 178,
      comments: 38,
      shares: 12
    }
  ];
  
  // Dữ liệu mẫu cho sự kiện
  const events = [
    {
      id: 1,
      title: 'Hội thảo Công nghệ AI 2023',
      date: {
        day: '15',
        month: 'Th10'
      },
      location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
      attendees: 128
    },
    {
      id: 2,
      title: 'Workshop Thiết kế UX/UI cho người mới bắt đầu',
      date: {
        day: '22',
        month: 'Th10'
      },
      location: 'Dreamplex Coworking Space, TP.HCM',
      attendees: 56
    },
    {
      id: 3,
      title: 'Offline Meeting - Cộng đồng React Vietnam',
      date: {
        day: '29',
        month: 'Th10'
      },
      location: 'Gong Cha Coffee, Đà Nẵng',
      attendees: 42
    }
  ];
  
  // Dữ liệu mẫu cho sinh nhật
  const birthdays = [
    {
      id: 1,
      name: 'Nguyễn Thị Hương',
      relation: 'bạn của bạn'
    },
    {
      id: 2,
      name: 'Trần Văn Minh',
      relation: 'đồng nghiệp'
    }
  ];
  
  // Dữ liệu mẫu cho gợi ý kết bạn
  const suggestedFriends = [
    {
      id: 1,
      name: 'Lê Thị Hoa',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      mutualFriends: 5
    },
    {
      id: 2,
      name: 'Phạm Văn Tuấn',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      mutualFriends: 3
    },
    {
      id: 3,
      name: 'Ngô Thị Mai',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      mutualFriends: 2
    }
  ];
  
  const handleLikePost = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  const handleSavePost = (postId) => {
    setSavedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (commentText.trim()) {
      console.log(`Đã bình luận "${commentText}" vào bài viết ${postId}`);
      setCommentText('');
    }
  };
  
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (postText.trim()) {
      console.log(`Đã tạo bài viết mới: "${postText}"`);
      setPostText('');
    }
  };
  
  const getPrivacyIcon = (privacy) => {
    switch (privacy) {
      case 'public':
        return <FaGlobeAsia />;
      case 'friends':
        return <FaUserFriends />;
      case 'private':
        return <FaLock />;
      default:
        return <FaGlobeAsia />;
    }
  };
  
  return (
    <NewsfeedContainer>
      <NewsfeedContent>
        <LeftSidebar>
          <SidebarLinkActive>
            <SidebarIcon>
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" />
            </SidebarIcon>
            <SidebarText>Nguyễn Văn A</SidebarText>
          </SidebarLinkActive>
          
          <SidebarLink>
            <SidebarIcon>
              <FaUserFriends />
            </SidebarIcon>
            <SidebarText>Bạn bè</SidebarText>
          </SidebarLink>
          
          <SidebarLink>
            <SidebarIcon>
              <FaBookmark />
            </SidebarIcon>
            <SidebarText>Đã lưu</SidebarText>
          </SidebarLink>
          
          <SidebarLink>
            <SidebarIcon>
              <FaVideo />
            </SidebarIcon>
            <SidebarText>Watch</SidebarText>
          </SidebarLink>
          
          <SidebarLink>
            <SidebarIcon>
              <FaCalendarAlt />
            </SidebarIcon>
            <SidebarText>Sự kiện</SidebarText>
          </SidebarLink>
          
          <SidebarLink>
            <SidebarIcon>
              <FaUsers />
            </SidebarIcon>
            <SidebarText>Nhóm</SidebarText>
          </SidebarLink>
        </LeftSidebar>
        
        <MainContent>
          <StoriesSection>
            <StoriesHeader>
              <StoriesTitle>Stories</StoriesTitle>
              <StoriesViewAll>Xem tất cả</StoriesViewAll>
            </StoriesHeader>
            
            <StoriesContainer>
              <CreateStoryCard>
                <StoryImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="Your Story" />
                <CreateStoryIcon>
                  <FaPlus />
                </CreateStoryIcon>
                <CreateStoryText>Tạo story</CreateStoryText>
              </CreateStoryCard>
              
              {stories.map(story => (
                <StoryCard key={story.id}>
                  <StoryImage src={story.image} alt={story.user.name} />
                  <StoryUser>
                    <StoryUserImage src={story.user.image} alt={story.user.name} />
                    <StoryUserName>{story.user.name}</StoryUserName>
                  </StoryUser>
                </StoryCard>
              ))}
            </StoriesContainer>
          </StoriesSection>
          
          <FeedSection>
            <CreatePostCard>
              <CreatePostHeader>
                <CreatePostUserImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="Your Profile" />
                <CreatePostInput 
                  placeholder="Bạn đang nghĩ gì?" 
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
              </CreatePostHeader>
              
              <CreatePostActions>
                <CreatePostAction>
                  <FaImage /> Ảnh/Video
                </CreatePostAction>
                <CreatePostAction>
                  <FaSmile /> Cảm xúc
                </CreatePostAction>
                <CreatePostAction>
                  <FaMapMarkerAlt /> Check in
                </CreatePostAction>
                <CreatePostButton onClick={handleCreatePost}>
                  Đăng
                </CreatePostButton>
              </CreatePostActions>
            </CreatePostCard>
            
            {posts.map(post => (
              <PostCard key={post.id}>
                <PostHeader>
                  <PostAuthor>
                    <PostAuthorImage src={post.author.image} alt={post.author.name} />
                    <PostAuthorInfo>
                      <PostAuthorName>{post.author.name}</PostAuthorName>
                      <PostMeta>
                        <PostTime>{post.time}</PostTime>
                        <PostPrivacy>{getPrivacyIcon(post.privacy)}</PostPrivacy>
                      </PostMeta>
                    </PostAuthorInfo>
                  </PostAuthor>
                  <PostOptions>
                    <FaEllipsisH />
                  </PostOptions>
                </PostHeader>
                
                <PostContent>
                  <PostText>{post.content}</PostText>
                  {post.image && <PostImage src={post.image} alt="Post" />}
                </PostContent>
                
                <PostStats>
                  <PostLikes>
                    <FaHeart /> {likedPosts[post.id] ? post.likes + 1 : post.likes} lượt thích
                  </PostLikes>
                  <div>
                    <PostComments>{post.comments} bình luận</PostComments>
                    <PostShares>{post.shares} chia sẻ</PostShares>
                  </div>
                </PostStats>
                
                <PostActions>
                  <PostAction onClick={() => handleLikePost(post.id)}>
                    {likedPosts[post.id] ? <FaHeart className="liked" /> : <FaRegHeart />}
                    Thích
                  </PostAction>
                  <PostAction>
                    <FaComment />
                    Bình luận
                  </PostAction>
                  <PostAction>
                    <FaShare />
                    Chia sẻ
                  </PostAction>
                  <PostAction onClick={() => handleSavePost(post.id)}>
                    {savedPosts[post.id] ? <FaBookmark /> : <FaRegBookmark />}
                    Lưu
                  </PostAction>
                </PostActions>
                
                <CommentSection>
                  <CommentForm onSubmit={(e) => handleCommentSubmit(e, post.id)}>
                    <CommentInput 
                      placeholder="Viết bình luận..." 
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <CommentButton type="submit">Gửi</CommentButton>
                  </CommentForm>
                </CommentSection>
              </PostCard>
            ))}
          </FeedSection>
        </MainContent>
        
        <RightSidebar>
          <SidebarSection>
            <SidebarCard>
              <SidebarTitle>Người liên hệ</SidebarTitle>
              <SidebarContent>
                {suggestedFriends.map(friend => (
                  <SuggestedFriend key={friend.id}>
                    <SuggestedFriendImage src={friend.image} alt={friend.name} />
                    <SuggestedFriendInfo>
                      <SuggestedFriendName>{friend.name}</SuggestedFriendName>
                    </SuggestedFriendInfo>
                  </SuggestedFriend>
                ))}
                
                <SuggestedFriend>
                  <SuggestedFriendImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Trần Thị B" />
                  <SuggestedFriendInfo>
                    <SuggestedFriendName>Trần Thị B</SuggestedFriendName>
                  </SuggestedFriendInfo>
                </SuggestedFriend>
                
                <SuggestedFriend>
                  <SuggestedFriendImage src="https://randomuser.me/api/portraits/men/62.jpg" alt="Lê Văn C" />
                  <SuggestedFriendInfo>
                    <SuggestedFriendName>Lê Văn C</SuggestedFriendName>
                  </SuggestedFriendInfo>
                </SuggestedFriend>
                
                <SuggestedFriend>
                  <SuggestedFriendImage src="https://randomuser.me/api/portraits/women/17.jpg" alt="Phạm Thị D" />
                  <SuggestedFriendInfo>
                    <SuggestedFriendName>Phạm Thị D</SuggestedFriendName>
                  </SuggestedFriendInfo>
                </SuggestedFriend>
                
                <SuggestedFriend>
                  <SuggestedFriendImage src="https://randomuser.me/api/portraits/men/91.jpg" alt="Hoàng Văn E" />
                  <SuggestedFriendInfo>
                    <SuggestedFriendName>Hoàng Văn E</SuggestedFriendName>
                  </SuggestedFriendInfo>
                </SuggestedFriend>
              </SidebarContent>
            </SidebarCard>
          </SidebarSection>
          
          <SidebarSection>
            <SidebarCard>
              <SidebarTitle>Sinh nhật</SidebarTitle>
              <SidebarContent>
                {birthdays.map(birthday => (
                  <BirthdayItem key={birthday.id}>
                    <BirthdayIcon>🎂</BirthdayIcon>
                    <BirthdayText>
                      Hôm nay là sinh nhật của <strong>{birthday.name}</strong> ({birthday.relation})
                    </BirthdayText>
                  </BirthdayItem>
                ))}
              </SidebarContent>
            </SidebarCard>
          </SidebarSection>
          
          <SidebarSection>
            <SidebarCard>
              <SidebarTitle>Sự kiện sắp tới</SidebarTitle>
              <SidebarContent>
                {events.map(event => (
                  <EventItem key={event.id}>
                    <EventDate>
                      <div className="day">{event.date.day}</div>
                      <div className="month">{event.date.month}</div>
                    </EventDate>
                    <EventInfo>
                      <EventTitle>{event.title}</EventTitle>
                      <EventMeta>
                        <div className="location">{event.location}</div>
                        <div className="attendees">{event.attendees} người tham gia</div>
                      </EventMeta>
                    </EventInfo>
                  </EventItem>
                ))}
              </SidebarContent>
            </SidebarCard>
          </SidebarSection>
        </RightSidebar>
      </NewsfeedContent>
    </NewsfeedContainer>
  );
};

export default Newsfeed; 