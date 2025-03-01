import React, { useState, useEffect } from 'react';
import Post from '../Post';
import CreatePost from '../CreatePost';
import Stories from '../Stories';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Thông tin người dùng hiện tại
  const currentUser = {
    id: 'current-user',
    name: 'Nguyễn Văn A',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg', // Thay đổi avatar của bạn ở đây
    avatarColor: '#1877F2'
  };
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Tạo các bài đăng tĩnh thay vì gọi API
        const staticPosts = [
          {
            id: 1,
            user: {
              name: 'John Doe',
              avatarColor: '#4267B2',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            currentUser: currentUser,
            time: '2 hours ago',
            privacy: 'Public',
            text: 'Just finished working on an amazing new project! Can\'t wait to share more details soon. #coding #webdevelopment',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            likes: 42,
            comments: [
              {
                user: {
                  name: 'Sarah Johnson',
                  avatarColor: '#FF5E3A',
                  avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
                },
                text: 'Looks awesome! Can\'t wait to see it!',
                time: '1 hour ago'
              },
              {
                user: {
                  name: 'Mike Wilson',
                  avatarColor: '#8A2BE2',
                  avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
                },
                text: 'Great work as always!',
                time: '45 minutes ago'
              }
            ],
            shares: 5
          },
          {
            id: 2,
            user: {
              name: 'Emily Davis',
              avatarColor: '#FF5E3A',
              avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
            },
            currentUser: currentUser,
            time: '5 hours ago',
            privacy: 'Friends',
            text: 'Beautiful day for a hike! 🏞️ #nature #outdoors',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            likes: 87,
            comments: [
              {
                user: {
                  name: 'David Wilson',
                  avatarColor: '#20B2AA',
                  avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
                },
                text: 'Wow, what a view! Where is this?',
                time: '4 hours ago'
              },
              {
                user: {
                  name: 'Jessica Taylor',
                  avatarColor: '#8A2BE2',
                  avatar: 'https://randomuser.me/api/portraits/women/56.jpg'
                },
                text: 'I need to go there! 😍',
                time: '3 hours ago'
              }
            ],
            shares: 12
          },
          {
            id: 3,
            user: {
              name: 'Tech News Daily',
              avatarColor: '#1877F2',
              avatar: 'https://logo.clearbit.com/technewsdaily.com'
            },
            currentUser: currentUser,
            time: '1 day ago',
            privacy: 'Public',
            text: 'Breaking: New AI breakthrough could revolutionize how we interact with technology. Researchers have developed a system that can understand and respond to complex human emotions with unprecedented accuracy.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
            likes: 324,
            comments: [
              {
                user: {
                  name: 'Alex Johnson',
                  avatarColor: '#4267B2',
                  avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
                },
                text: 'This is both exciting and a bit scary!',
                time: '20 hours ago'
              },
              {
                user: {
                  name: 'Sophia Williams',
                  avatarColor: '#FF5E3A',
                  avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
                },
                text: 'I wonder how this will affect jobs in the future.',
                time: '18 hours ago'
              }
            ],
            shares: 78
          },
          {
            id: 4,
            user: {
              name: 'Michael Brown',
              avatarColor: '#FFD700',
              avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
            },
            currentUser: currentUser,
            time: '3 days ago',
            privacy: 'Public',
            text: 'Just got my hands on the latest gadget! Review coming soon. #tech #review',
            image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80',
            likes: 156,
            comments: [
              {
                user: {
                  name: 'Lisa Chen',
                  avatarColor: '#8A2BE2',
                  avatar: 'https://randomuser.me/api/portraits/women/62.jpg'
                },
                text: 'Can\'t wait for the review!',
                time: '2 days ago'
              }
            ],
            shares: 23
          },
          {
            id: 5,
            user: {
              name: 'Food & Cooking',
              avatarColor: '#FF5E3A',
              avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
            },
            currentUser: currentUser,
            time: '4 days ago',
            privacy: 'Public',
            text: 'Try this amazing pasta recipe for dinner tonight! Quick, easy, and absolutely delicious. #food #recipe #cooking',
            image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            likes: 215,
            comments: [
              {
                user: {
                  name: 'Jennifer Lopez',
                  avatarColor: '#20B2AA',
                  avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
                },
                text: 'Made this last night and it was a hit with the family!',
                time: '3 days ago'
              },
              {
                user: {
                  name: 'Robert Smith',
                  avatarColor: '#4267B2',
                  avatar: 'https://randomuser.me/api/portraits/men/72.jpg'
                },
                text: 'Can you share the recipe?',
                time: '2 days ago'
              }
            ],
            shares: 45
          }
        ];
        
        setPosts(staticPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  return (
    <div className="feed">
      <Stories currentUser={currentUser} />
      <CreatePost currentUser={currentUser} />
      
      {loading ? (
        <div className="feed-loading">
          <div className="loading-spinner"></div>
          <p>Loading posts...</p>
        </div>
      ) : (
        posts.map(post => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Feed; 