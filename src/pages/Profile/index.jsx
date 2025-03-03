import React, { useState } from 'react';
import { FaCamera, FaPencilAlt, FaUserFriends, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaHeart, FaEllipsisH, FaRegHeart, FaRegComment, FaShare, FaRegBookmark, FaBookmark, FaImages, FaVideo, FaCalendarAlt, FaUserTag } from 'react-icons/fa';
import {
  ProfileContainer,
  ProfileHeader,
  CoverPhoto,
  CoverPhotoOverlay,
  CoverPhotoButton,
  ProfileAvatar,
  ProfileAvatarOverlay,
  ProfileAvatarButton,
  ProfileInfo,
  ProfileName,
  ProfileBio,
  ProfileStats,
  ProfileStat,
  ProfileStatNumber,
  ProfileStatLabel,
  ProfileActions,
  ProfileActionButton,
  ProfileContent,
  ProfileLeftSidebar,
  ProfileAbout,
  ProfileAboutTitle,
  ProfileAboutItem,
  ProfileAboutIcon,
  ProfileAboutText,
  ProfilePhotos,
  ProfilePhotosTitle,
  ProfilePhotosGrid,
  ProfilePhotoItem,
  ProfileFriends,
  ProfileFriendsTitle,
  ProfileFriendsGrid,
  ProfileFriendItem,
  ProfileFriendAvatar,
  ProfileFriendName,
  ProfileFriendMutual,
  ProfileMainContent,
  CreatePostContainer,
  CreatePostInput,
  CreatePostActions,
  CreatePostAction,
  PostsContainer,
  PostCard,
  PostHeader,
  PostAuthor,
  PostAvatar,
  PostInfo,
  PostName,
  PostTime,
  PostVisibility,
  PostContent,
  PostText,
  PostImage,
  PostStats,
  PostActions,
  PostAction,
  ProfileTabs,
  ProfileTab
} from './styles';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  
  // Dữ liệu mẫu cho người dùng
  const user = {
    id: 1,
    name: 'Nguyễn Văn A',
    avatar: 'https://picsum.photos/id/1005/200/200',
    coverPhoto: 'https://picsum.photos/id/1015/1200/400',
    bio: 'Nhiếp ảnh gia | Người yêu thích du lịch | Kỹ sư phần mềm',
    location: 'Hà Nội, Việt Nam',
    work: 'Kỹ sư phần mềm tại Tech Company',
    education: 'Đại học Bách Khoa Hà Nội',
    relationship: 'Độc thân',
    friends: 1250,
    followers: 3500,
    following: 450
  };
  
  // Dữ liệu mẫu cho bài đăng
  const posts = [
    {
      id: 1,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      time: '2 giờ trước',
      visibility: 'public',
      text: 'Chuyến du lịch cuối tuần tại Đà Lạt. Thời tiết thật tuyệt vời!',
      image: 'https://picsum.photos/id/1036/800/600',
      likes: 124,
      comments: 36,
      shares: 5
    },
    {
      id: 2,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      time: '1 ngày trước',
      visibility: 'friends',
      text: 'Vừa hoàn thành dự án mới. Rất vui khi được làm việc với một đội ngũ tuyệt vời!',
      image: 'https://picsum.photos/id/1066/800/600',
      likes: 89,
      comments: 14,
      shares: 2
    },
    {
      id: 3,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      time: '1 tuần trước',
      visibility: 'public',
      text: 'Buổi họp mặt lớp cuối năm. Thật vui khi gặp lại mọi người sau nhiều năm!',
      image: 'https://picsum.photos/id/1059/800/600',
      likes: 215,
      comments: 42,
      shares: 8
    }
  ];
  
  // Dữ liệu mẫu cho ảnh
  const photos = [
    'https://picsum.photos/id/1001/150/150',
    'https://picsum.photos/id/1002/150/150',
    'https://picsum.photos/id/1003/150/150',
    'https://picsum.photos/id/1004/150/150',
    'https://picsum.photos/id/1005/150/150',
    'https://picsum.photos/id/1006/150/150',
    'https://picsum.photos/id/1008/150/150',
    'https://picsum.photos/id/1009/150/150',
    'https://picsum.photos/id/1010/150/150'
  ];
  
  // Dữ liệu mẫu cho bạn bè
  const friends = [
    {
      id: 1,
      name: 'Trần Thị B',
      avatar: 'https://picsum.photos/id/1011/100/100',
      mutualFriends: 15
    },
    {
      id: 2,
      name: 'Lê Văn C',
      avatar: 'https://picsum.photos/id/1012/100/100',
      mutualFriends: 8
    },
    {
      id: 3,
      name: 'Phạm Thị D',
      avatar: 'https://picsum.photos/id/1013/100/100',
      mutualFriends: 12
    },
    {
      id: 4,
      name: 'Hoàng Văn E',
      avatar: 'https://picsum.photos/id/1014/100/100',
      mutualFriends: 5
    },
    {
      id: 5,
      name: 'Vũ Thị F',
      avatar: 'https://picsum.photos/id/1016/100/100',
      mutualFriends: 20
    },
    {
      id: 6,
      name: 'Đặng Văn G',
      avatar: 'https://picsum.photos/id/1018/100/100',
      mutualFriends: 3
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
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <PostsContainer>
            <CreatePostContainer>
              <CreatePostInput placeholder="Bạn đang nghĩ gì?" />
              <CreatePostActions>
                <CreatePostAction>
                  <FaImages /> Ảnh/Video
                </CreatePostAction>
                <CreatePostAction>
                  <FaUserTag /> Gắn thẻ bạn bè
                </CreatePostAction>
                <CreatePostAction>
                  <FaRegBookmark /> Lưu
                </CreatePostAction>
              </CreatePostActions>
            </CreatePostContainer>
            
            {posts.map(post => (
              <PostCard key={post.id}>
                <PostHeader>
                  <PostAuthor>
                    <PostAvatar src={post.author.avatar} alt={post.author.name} />
                    <PostInfo>
                      <PostName>{post.author.name}</PostName>
                      <PostTime>
                        {post.time} · 
                        <PostVisibility>
                          {post.visibility === 'public' ? ' Công khai' : ' Bạn bè'}
                        </PostVisibility>
                      </PostTime>
                    </PostInfo>
                  </PostAuthor>
                  <FaEllipsisH />
                </PostHeader>
                
                <PostContent>
                  <PostText>{post.text}</PostText>
                  <PostImage src={post.image} alt="" />
                </PostContent>
                
                <PostStats>
                  <div>
                    <FaRegHeart /> {likedPosts[post.id] ? post.likes + 1 : post.likes}
                  </div>
                  <div>
                    {post.comments} bình luận · {post.shares} chia sẻ
                  </div>
                </PostStats>
                
                <PostActions>
                  <PostAction 
                    active={likedPosts[post.id]} 
                    onClick={() => handleLikePost(post.id)}
                  >
                    {likedPosts[post.id] ? <FaHeart /> : <FaRegHeart />} Thích
                  </PostAction>
                  <PostAction>
                    <FaRegComment /> Bình luận
                  </PostAction>
                  <PostAction>
                    <FaShare /> Chia sẻ
                  </PostAction>
                  <PostAction 
                    active={savedPosts[post.id]} 
                    onClick={() => handleSavePost(post.id)}
                  >
                    {savedPosts[post.id] ? <FaBookmark /> : <FaRegBookmark />} Lưu
                  </PostAction>
                </PostActions>
              </PostCard>
            ))}
          </PostsContainer>
        );
      case 'about':
        return (
          <ProfileAbout>
            <ProfileAboutTitle>Giới thiệu</ProfileAboutTitle>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaBriefcase />
              </ProfileAboutIcon>
              <ProfileAboutText>Làm việc tại {user.work}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaGraduationCap />
              </ProfileAboutIcon>
              <ProfileAboutText>Học tại {user.education}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaMapMarkerAlt />
              </ProfileAboutIcon>
              <ProfileAboutText>Sống tại {user.location}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaHeart />
              </ProfileAboutIcon>
              <ProfileAboutText>{user.relationship}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaCalendarAlt />
              </ProfileAboutIcon>
              <ProfileAboutText>Tham gia vào tháng 3 năm 2015</ProfileAboutText>
            </ProfileAboutItem>
          </ProfileAbout>
        );
      case 'friends':
        return (
          <ProfileFriends>
            <ProfileFriendsTitle>Bạn bè ({user.friends})</ProfileFriendsTitle>
            <ProfileFriendsGrid>
              {friends.map(friend => (
                <ProfileFriendItem key={friend.id}>
                  <ProfileFriendAvatar src={friend.avatar} alt={friend.name} />
                  <ProfileFriendName>{friend.name}</ProfileFriendName>
                  <ProfileFriendMutual>{friend.mutualFriends} bạn chung</ProfileFriendMutual>
                </ProfileFriendItem>
              ))}
            </ProfileFriendsGrid>
          </ProfileFriends>
        );
      case 'photos':
        return (
          <ProfilePhotos>
            <ProfilePhotosTitle>Ảnh</ProfilePhotosTitle>
            <ProfilePhotosGrid>
              {photos.map((photo, index) => (
                <ProfilePhotoItem key={index} src={photo} alt="" />
              ))}
            </ProfilePhotosGrid>
          </ProfilePhotos>
        );
      default:
        return null;
    }
  };
  
  return (
    <ProfileContainer>
      <ProfileHeader>
        <CoverPhoto src={user.coverPhoto} alt="Cover Photo">
          <CoverPhotoOverlay>
            <CoverPhotoButton>
              <FaCamera /> Chỉnh sửa ảnh bìa
            </CoverPhotoButton>
          </CoverPhotoOverlay>
        </CoverPhoto>
        
        <ProfileAvatar>
          <img src={user.avatar} alt={user.name} />
          <ProfileAvatarOverlay>
            <ProfileAvatarButton>
              <FaCamera />
            </ProfileAvatarButton>
          </ProfileAvatarOverlay>
        </ProfileAvatar>
        
        <ProfileInfo>
          <ProfileName>{user.name}</ProfileName>
          <ProfileBio>{user.bio}</ProfileBio>
          
          <ProfileStats>
            <ProfileStat>
              <ProfileStatNumber>{user.friends}</ProfileStatNumber>
              <ProfileStatLabel>Bạn bè</ProfileStatLabel>
            </ProfileStat>
            <ProfileStat>
              <ProfileStatNumber>{user.followers}</ProfileStatNumber>
              <ProfileStatLabel>Người theo dõi</ProfileStatLabel>
            </ProfileStat>
            <ProfileStat>
              <ProfileStatNumber>{user.following}</ProfileStatNumber>
              <ProfileStatLabel>Đang theo dõi</ProfileStatLabel>
            </ProfileStat>
          </ProfileStats>
          
          <ProfileActions>
            <ProfileActionButton primary>
              <FaPencilAlt /> Chỉnh sửa trang cá nhân
            </ProfileActionButton>
            <ProfileActionButton>
              <FaEllipsisH />
            </ProfileActionButton>
          </ProfileActions>
        </ProfileInfo>
      </ProfileHeader>
      
      <ProfileTabs>
        <ProfileTab 
          active={activeTab === 'posts'} 
          onClick={() => setActiveTab('posts')}
        >
          Bài viết
        </ProfileTab>
        <ProfileTab 
          active={activeTab === 'about'} 
          onClick={() => setActiveTab('about')}
        >
          Giới thiệu
        </ProfileTab>
        <ProfileTab 
          active={activeTab === 'friends'} 
          onClick={() => setActiveTab('friends')}
        >
          Bạn bè
        </ProfileTab>
        <ProfileTab 
          active={activeTab === 'photos'} 
          onClick={() => setActiveTab('photos')}
        >
          Ảnh
        </ProfileTab>
      </ProfileTabs>
      
      <ProfileContent>
        <ProfileLeftSidebar>
          <ProfileAbout>
            <ProfileAboutTitle>Giới thiệu</ProfileAboutTitle>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaBriefcase />
              </ProfileAboutIcon>
              <ProfileAboutText>Làm việc tại {user.work}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaGraduationCap />
              </ProfileAboutIcon>
              <ProfileAboutText>Học tại {user.education}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaMapMarkerAlt />
              </ProfileAboutIcon>
              <ProfileAboutText>Sống tại {user.location}</ProfileAboutText>
            </ProfileAboutItem>
            <ProfileAboutItem>
              <ProfileAboutIcon>
                <FaHeart />
              </ProfileAboutIcon>
              <ProfileAboutText>{user.relationship}</ProfileAboutText>
            </ProfileAboutItem>
          </ProfileAbout>
          
          <ProfilePhotos>
            <ProfilePhotosTitle>Ảnh</ProfilePhotosTitle>
            <ProfilePhotosGrid>
              {photos.slice(0, 9).map((photo, index) => (
                <ProfilePhotoItem key={index} src={photo} alt="" />
              ))}
            </ProfilePhotosGrid>
          </ProfilePhotos>
          
          <ProfileFriends>
            <ProfileFriendsTitle>Bạn bè</ProfileFriendsTitle>
            <ProfileFriendsGrid>
              {friends.slice(0, 6).map(friend => (
                <ProfileFriendItem key={friend.id}>
                  <ProfileFriendAvatar src={friend.avatar} alt={friend.name} />
                  <ProfileFriendName>{friend.name}</ProfileFriendName>
                </ProfileFriendItem>
              ))}
            </ProfileFriendsGrid>
          </ProfileFriends>
        </ProfileLeftSidebar>
        
        <ProfileMainContent>
          {renderTabContent()}
        </ProfileMainContent>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile; 