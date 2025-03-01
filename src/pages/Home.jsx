import React, { useState } from 'react';
import { Icon, Button } from '@blueprintjs/core';
import Post from '../components/Post';
import Story from '../components/Story';
import Composer from '../components/Composer';
import { useTheme } from '../hooks/useTheme.jsx';
import './Home.css';

const Home = ({ currentUser }) => {
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('foryou');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: 'user-1',
        name: 'Nguyễn Văn B',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      content: 'Hôm nay tôi vừa học xong khóa React cơ bản. Rất hữu ích!',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: '2 giờ trước',
      likes: 24,
      comments: 5,
      shares: 2
    },
    {
      id: 2,
      user: {
        id: 'user-2',
        name: 'Trần Thị C',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      content: 'Cuối tuần đi Đà Lạt, không khí thật mát mẻ!',
      image: 'https://images.unsplash.com/photo-1589197331516-4d84b72bb202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      time: '5 giờ trước',
      likes: 45,
      comments: 8,
      shares: 3
    },
    {
      id: 3,
      user: {
        id: 'user-3',
        name: 'Lê Văn D',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      content: 'Vừa mua máy ảnh mới, chụp đẹp quá!',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80',
      time: '1 ngày trước',
      likes: 67,
      comments: 12,
      shares: 5
    }
  ]);
  
  const stories = [
    {
      id: 'create',
      image: currentUser.avatar,
      isCreateStory: true
    },
    {
      id: 1,
      user: {
        id: 'user-1',
        name: 'Nguyễn Văn B',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
      id: 2,
      user: {
        id: 'user-2',
        name: 'Trần Thị C',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 3,
      user: {
        id: 'user-3',
        name: 'Lê Văn D',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      image: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
    },
    {
      id: 4,
      user: {
        id: 'user-4',
        name: 'Phạm Thị E',
        avatar: 'https://i.pravatar.cc/150?img=9'
      },
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 5,
      user: {
        id: 'user-5',
        name: 'Hoàng Văn F',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
  ];
  
  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  
  return (
    <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="stories-container">
        {stories.map(story => (
          <Story 
            key={story.id} 
            story={story} 
            isCreateStory={story.id === 'create'}
          />
        ))}
      </div>
      
      <Composer currentUser={currentUser} onPost={handleCreatePost} />
      
      <div className="feed-filters">
        <div 
          className={`feed-filter ${activeFilter === 'foryou' ? 'active' : ''}`}
          onClick={() => setActiveFilter('foryou')}
        >
          Dành cho bạn
        </div>
        <div 
          className={`feed-filter ${activeFilter === 'following' ? 'active' : ''}`}
          onClick={() => setActiveFilter('following')}
        >
          Đang theo dõi
        </div>
      </div>
      
      <div className="feed-posts">
        {posts.map(post => (
          <Post key={post.id} post={post} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
};

export default Home; 