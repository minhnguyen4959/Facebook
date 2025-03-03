import React, { useState } from 'react';
import { FaHistory, FaCalendarAlt, FaBookmark, FaEllipsisH, FaShare, FaThumbsUp, FaRegThumbsUp, FaRegComment } from 'react-icons/fa';
import {
  MemoriesContainer,
  MemoriesLeftSidebar,
  MemoriesContent,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  MemoryCard,
  MemoryHeader,
  MemoryTitle,
  MemoryDate,
  MemoryImage,
  MemoryContent,
  MemoryText,
  MemoryActions,
  MemoryAction,
  MemoryGrid,
  OnThisDayCard,
  OnThisDayHeader,
  OnThisDayTitle,
  OnThisDayDate,
  OnThisDayContent,
  OnThisDayImage,
  OnThisDayText,
  OnThisDayActions,
  OnThisDayAction,
  MemoryCollection,
  CollectionTitle,
  CollectionDate,
  CollectionGrid,
  CollectionItem,
  CollectionImage,
  YearInReviewCard,
  YearInReviewHeader,
  YearInReviewTitle,
  YearInReviewContent,
  YearInReviewImage,
  YearInReviewText,
  YearInReviewButton,
  MemoriesHeader,
  MemoriesTitle,
  MemoriesSubtitle
} from './styles';

// Dữ liệu mẫu cho kỷ niệm
const memoriesData = [
  {
    id: 1,
    title: 'Kỷ niệm với Nguyễn Văn A',
    date: '3 năm trước',
    image: 'https://picsum.photos/id/1/600/400',
    text: 'Chuyến du lịch Đà Lạt cùng bạn bè. Những khoảnh khắc tuyệt vời không thể nào quên!',
    likes: 25,
    comments: 8
  },
  {
    id: 2,
    title: 'Kỷ niệm với Trần Thị B và 3 người khác',
    date: '5 năm trước',
    image: 'https://picsum.photos/id/2/600/400',
    text: 'Buổi họp lớp sau 10 năm ra trường. Mọi người đều đã thay đổi rất nhiều nhưng tình bạn vẫn còn mãi.',
    likes: 42,
    comments: 15
  }
];

// Dữ liệu mẫu cho "Ngày này năm xưa"
const onThisDayData = [
  {
    id: 3,
    title: 'Ngày này năm xưa',
    date: '2 năm trước',
    image: 'https://picsum.photos/id/3/600/400',
    text: 'Kỷ niệm 2 năm ngày tốt nghiệp đại học. Thời gian trôi qua nhanh quá!',
    likes: 38,
    comments: 12
  },
  {
    id: 4,
    title: 'Ngày này năm xưa',
    date: '4 năm trước',
    image: 'https://picsum.photos/id/4/600/400',
    text: 'Chuyến đi phượt đầu tiên cùng hội bạn thân. Đây là lúc chúng mình bắt đầu đam mê du lịch.',
    likes: 56,
    comments: 23
  }
];

// Dữ liệu mẫu cho bộ sưu tập
const collectionsData = [
  {
    id: 5,
    title: 'Chuyến du lịch Hạ Long',
    date: 'Tháng 7, 2022',
    images: [
      'https://picsum.photos/id/5/300/300',
      'https://picsum.photos/id/6/300/300',
      'https://picsum.photos/id/7/300/300',
      'https://picsum.photos/id/8/300/300'
    ]
  },
  {
    id: 6,
    title: 'Sinh nhật lần thứ 25',
    date: 'Tháng 3, 2021',
    images: [
      'https://picsum.photos/id/9/300/300',
      'https://picsum.photos/id/10/300/300',
      'https://picsum.photos/id/11/300/300',
      'https://picsum.photos/id/12/300/300'
    ]
  }
];

const Memories = () => {
  const [likedMemories, setLikedMemories] = useState({});

  const handleLikeMemory = (id) => {
    setLikedMemories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <MemoriesContainer>
      <MemoriesLeftSidebar>
        <SidebarItem active>
          <SidebarIcon>
            <FaHistory />
          </SidebarIcon>
          <SidebarText>Kỷ niệm</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaCalendarAlt />
          </SidebarIcon>
          <SidebarText>Ngày này năm xưa</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaBookmark />
          </SidebarIcon>
          <SidebarText>Đã lưu</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Bộ sưu tập</SidebarTitle>
        
        {collectionsData.map(collection => (
          <SidebarItem key={collection.id}>
            <SidebarIcon>
              <img src={collection.images[0]} alt={collection.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </SidebarIcon>
            <SidebarText>{collection.title}</SidebarText>
          </SidebarItem>
        ))}
      </MemoriesLeftSidebar>
      
      <MemoriesContent>
        <MemoriesHeader>
          <MemoriesTitle>Kỷ niệm</MemoriesTitle>
          <MemoriesSubtitle>Chúng tôi sẽ thông báo khi bạn có kỷ niệm để nhìn lại và chia sẻ.</MemoriesSubtitle>
        </MemoriesHeader>
        
        <YearInReviewCard>
          <YearInReviewHeader>
            <YearInReviewTitle>Nhìn lại năm 2023</YearInReviewTitle>
          </YearInReviewHeader>
          <YearInReviewContent>
            <YearInReviewImage src="https://picsum.photos/id/20/600/400" alt="Year in Review" />
            <YearInReviewText>
              Tạo video tổng kết những khoảnh khắc đáng nhớ của bạn trong năm 2023.
            </YearInReviewText>
            <YearInReviewButton>Tạo video</YearInReviewButton>
          </YearInReviewContent>
        </YearInReviewCard>
        
        <SidebarTitle>Kỷ niệm gần đây</SidebarTitle>
        
        <MemoryGrid>
          {memoriesData.map(memory => (
            <MemoryCard key={memory.id}>
              <MemoryHeader>
                <div>
                  <MemoryTitle>{memory.title}</MemoryTitle>
                  <MemoryDate>{memory.date}</MemoryDate>
                </div>
                <FaEllipsisH />
              </MemoryHeader>
              <MemoryImage src={memory.image} alt={memory.title} />
              <MemoryContent>
                <MemoryText>{memory.text}</MemoryText>
                <MemoryActions>
                  <MemoryAction 
                    active={likedMemories[memory.id]} 
                    onClick={() => handleLikeMemory(memory.id)}
                  >
                    {likedMemories[memory.id] ? <FaThumbsUp /> : <FaRegThumbsUp />}
                    {memory.likes + (likedMemories[memory.id] ? 1 : 0)}
                  </MemoryAction>
                  <MemoryAction>
                    <FaRegComment />
                    {memory.comments}
                  </MemoryAction>
                  <MemoryAction>
                    <FaShare />
                    Chia sẻ
                  </MemoryAction>
                </MemoryActions>
              </MemoryContent>
            </MemoryCard>
          ))}
        </MemoryGrid>
        
        <SidebarTitle>Ngày này năm xưa</SidebarTitle>
        
        <MemoryGrid>
          {onThisDayData.map(memory => (
            <OnThisDayCard key={memory.id}>
              <OnThisDayHeader>
                <div>
                  <OnThisDayTitle>{memory.title}</OnThisDayTitle>
                  <OnThisDayDate>{memory.date}</OnThisDayDate>
                </div>
                <FaEllipsisH />
              </OnThisDayHeader>
              <OnThisDayImage src={memory.image} alt={memory.title} />
              <OnThisDayContent>
                <OnThisDayText>{memory.text}</OnThisDayText>
                <OnThisDayActions>
                  <OnThisDayAction 
                    active={likedMemories[memory.id]} 
                    onClick={() => handleLikeMemory(memory.id)}
                  >
                    {likedMemories[memory.id] ? <FaThumbsUp /> : <FaRegThumbsUp />}
                    {memory.likes + (likedMemories[memory.id] ? 1 : 0)}
                  </OnThisDayAction>
                  <OnThisDayAction>
                    <FaRegComment />
                    {memory.comments}
                  </OnThisDayAction>
                  <OnThisDayAction>
                    <FaShare />
                    Chia sẻ
                  </OnThisDayAction>
                </OnThisDayActions>
              </OnThisDayContent>
            </OnThisDayCard>
          ))}
        </MemoryGrid>
        
        <SidebarTitle>Bộ sưu tập kỷ niệm</SidebarTitle>
        
        {collectionsData.map(collection => (
          <MemoryCollection key={collection.id}>
            <div>
              <CollectionTitle>{collection.title}</CollectionTitle>
              <CollectionDate>{collection.date}</CollectionDate>
            </div>
            <CollectionGrid>
              {collection.images.map((image, index) => (
                <CollectionItem key={index}>
                  <CollectionImage src={image} alt={`${collection.title} ${index + 1}`} />
                </CollectionItem>
              ))}
            </CollectionGrid>
          </MemoryCollection>
        ))}
      </MemoriesContent>
    </MemoriesContainer>
  );
};

export default Memories; 