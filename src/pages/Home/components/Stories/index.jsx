import React from 'react';
import { FaPlus } from 'react-icons/fa';
import {
  StoriesContainer,
  StoriesWrapper,
  StoryCard,
  CreateStoryCard,
  StoryImage,
  StoryUser,
  StoryUserImage,
  StoryUsername,
  CreateStoryIcon,
  CreateStoryText
} from './styles';

// Dữ liệu mẫu cho stories
const storiesData = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Nguyễn Thu Hoài',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    image: 'https://picsum.photos/id/1/200/300'
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Kim Ngân',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    image: 'https://picsum.photos/id/2/200/300'
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Thích chụp ảnh',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    image: 'https://picsum.photos/id/3/200/300'
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Trang Huyền Lê',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    image: 'https://picsum.photos/id/4/200/300'
  },
  {
    id: 5,
    user: {
      id: 5,
      name: 'Văn',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    image: 'https://picsum.photos/id/5/200/300'
  }
];

const Stories = () => {
  return (
    <StoriesContainer>
      <StoriesWrapper>
        <CreateStoryCard>
          <StoryImage src="https://picsum.photos/id/237/200/300" alt="Create story" />
          <CreateStoryIcon>
            <FaPlus />
          </CreateStoryIcon>
          <CreateStoryText>Tạo tin</CreateStoryText>
        </CreateStoryCard>
        
        {storiesData.map(story => (
          <StoryCard key={story.id}>
            <StoryImage src={story.image} alt={story.user.name} />
            <StoryUserImage src={story.user.avatar} alt={story.user.name} />
            <StoryUsername>{story.user.name}</StoryUsername>
          </StoryCard>
        ))}
      </StoriesWrapper>
    </StoriesContainer>
  );
};

export default Stories; 