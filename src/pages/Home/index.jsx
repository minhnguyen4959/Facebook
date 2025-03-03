import React from 'react';
import { HomeContainer } from './styles';
import CreatePost from './components/CreatePost';
import Stories from './components/Stories';
import PostsList from './components/PostsList';

const Home = () => {
  return (
    <HomeContainer>
      <Stories />
      <CreatePost />
      <PostsList />
    </HomeContainer>
  );
};

export default Home; 