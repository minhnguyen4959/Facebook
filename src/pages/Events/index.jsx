import React, { useState } from 'react';
import { FaCalendarAlt, FaCalendarCheck, FaCalendarPlus, FaMapMarkerAlt, FaClock, FaUsers, FaEllipsisH, FaSearch, FaFilter } from 'react-icons/fa';
import {
  EventsContainer,
  EventsLeftSidebar,
  EventsContent,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  EventsHeader,
  EventsTitle,
  EventsSubtitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FilterContainer,
  FilterButton,
  FilterIcon,
  FilterText,
  EventsGrid,
  EventCard,
  EventDate,
  EventMonth,
  EventDay,
  EventImage,
  EventInfo,
  EventTitle,
  EventTime,
  EventLocation,
  EventAttendees,
  EventActions,
  EventButton,
  CreateEventCard,
  CreateEventIcon,
  CreateEventText,
  EventTabs,
  EventTab,
  NoEventsContent,
  NoEventsIcon,
  NoEventsTitle,
  NoEventsText,
  FeaturedEvent,
  FeaturedEventImage,
  FeaturedEventContent,
  FeaturedEventInfo,
  FeaturedEventTitle,
  FeaturedEventTime,
  FeaturedEventLocation,
  FeaturedEventDescription,
  FeaturedEventActions,
  FeaturedEventButton,
  FeaturedEventAttendees,
  AttendeeAvatar
} from './styles';

// Dữ liệu mẫu cho sự kiện
const eventsData = [
  {
    id: 1,
    title: 'Workshop Nhiếp ảnh cơ bản',
    date: new Date('2023-12-15T10:00:00'),
    image: 'https://picsum.photos/id/1/600/400',
    location: 'Trung tâm Văn hóa Nghệ thuật, Quận 1, TP. Hồ Chí Minh',
    attendees: 45,
    going: true,
    description: 'Workshop chia sẻ kiến thức và kỹ năng nhiếp ảnh cơ bản dành cho người mới bắt đầu. Học viên sẽ được hướng dẫn cách sử dụng máy ảnh, các nguyên tắc cơ bản về ánh sáng, bố cục và thực hành chụp ảnh thực tế.'
  },
  {
    id: 2,
    title: 'Triển lãm Công nghệ 2023',
    date: new Date('2023-12-20T09:00:00'),
    image: 'https://picsum.photos/id/2/600/400',
    location: 'Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC), Quận 7, TP. Hồ Chí Minh',
    attendees: 120,
    going: false,
    interested: true,
    description: 'Triển lãm Công nghệ lớn nhất năm 2023 với sự tham gia của hơn 100 thương hiệu công nghệ hàng đầu trong và ngoài nước. Khám phá những sản phẩm, giải pháp công nghệ mới nhất và tham gia các hoạt động trải nghiệm thú vị.'
  },
  {
    id: 3,
    title: 'Hội thảo Khởi nghiệp và Đổi mới sáng tạo',
    date: new Date('2023-12-25T14:00:00'),
    image: 'https://picsum.photos/id/3/600/400',
    location: 'Đại học Bách Khoa, Quận 10, TP. Hồ Chí Minh',
    attendees: 85,
    going: true,
    description: 'Hội thảo chia sẻ kinh nghiệm khởi nghiệp từ các doanh nhân thành công và các chuyên gia trong lĩnh vực đổi mới sáng tạo. Cơ hội kết nối với các nhà đầu tư và đối tác tiềm năng.'
  },
  {
    id: 4,
    title: 'Lễ hội Âm nhạc Mùa đông',
    date: new Date('2023-12-30T18:00:00'),
    image: 'https://picsum.photos/id/4/600/400',
    location: 'Công viên 23/9, Quận 1, TP. Hồ Chí Minh',
    attendees: 250,
    interested: true,
    description: 'Lễ hội âm nhạc ngoài trời với sự tham gia của nhiều nghệ sĩ nổi tiếng và các ban nhạc indie. Thưởng thức âm nhạc đa dạng từ pop, rock đến electronic và tham gia các hoạt động giải trí thú vị.'
  },
  {
    id: 5,
    title: 'Hội chợ Sách Quốc tế',
    date: new Date('2024-01-05T08:00:00'),
    image: 'https://picsum.photos/id/5/600/400',
    location: 'Nhà Văn hóa Thanh niên, Quận 1, TP. Hồ Chí Minh',
    attendees: 180,
    going: false,
    description: 'Hội chợ sách lớn nhất trong năm với sự tham gia của hàng trăm nhà xuất bản trong và ngoài nước. Cơ hội tìm mua sách với giá ưu đãi và tham gia giao lưu với các tác giả nổi tiếng.'
  },
  {
    id: 6,
    title: 'Workshop Thiết kế UX/UI',
    date: new Date('2024-01-10T09:30:00'),
    image: 'https://picsum.photos/id/6/600/400',
    location: 'WeWork, Quận 4, TP. Hồ Chí Minh',
    attendees: 60,
    interested: true,
    description: 'Workshop chuyên sâu về thiết kế trải nghiệm người dùng (UX) và giao diện người dùng (UI) dành cho người làm trong lĩnh vực thiết kế và phát triển sản phẩm số. Học viên sẽ được hướng dẫn quy trình thiết kế UX/UI từ A-Z và thực hành trên các dự án thực tế.'
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredEvent, setFeaturedEvent] = useState(eventsData[0]);

  const handleEventClick = (event) => {
    setFeaturedEvent(event);
  };

  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('vi-VN', options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('vi-VN', options);
  };

  const getMonth = (date) => {
    return date.toLocaleString('vi-VN', { month: 'short' });
  };

  const getDay = (date) => {
    return date.getDate();
  };

  const filteredEvents = eventsData.filter(event => {
    if (activeTab === 'going' && !event.going) {
      return false;
    }
    
    if (activeTab === 'interested' && !event.interested) {
      return false;
    }
    
    if (searchTerm && !event.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !event.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <EventsContainer>
      <EventsLeftSidebar>
        <SidebarItem active={activeTab === 'upcoming'} onClick={() => setActiveTab('upcoming')}>
          <SidebarIcon>
            <FaCalendarAlt />
          </SidebarIcon>
          <SidebarText>Sự kiện sắp tới</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'going'} onClick={() => setActiveTab('going')}>
          <SidebarIcon>
            <FaCalendarCheck />
          </SidebarIcon>
          <SidebarText>Sẽ tham gia</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'interested'} onClick={() => setActiveTab('interested')}>
          <SidebarIcon>
            <FaCalendarAlt />
          </SidebarIcon>
          <SidebarText>Quan tâm</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaCalendarPlus />
          </SidebarIcon>
          <SidebarText>Tạo sự kiện</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Sự kiện của bạn</SidebarTitle>
        
        {eventsData.filter(event => event.going).slice(0, 3).map(event => (
          <SidebarItem 
            key={event.id} 
            active={featuredEvent?.id === event.id}
            onClick={() => handleEventClick(event)}
          >
            <SidebarIcon>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </SidebarIcon>
            <SidebarText>{event.title}</SidebarText>
          </SidebarItem>
        ))}
      </EventsLeftSidebar>
      
      <EventsContent>
        <EventsHeader>
          <div>
            <EventsTitle>Sự kiện</EventsTitle>
            <EventsSubtitle>Khám phá các sự kiện phù hợp với sở thích của bạn</EventsSubtitle>
          </div>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm sự kiện" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </EventsHeader>
        
        <EventTabs>
          <EventTab active={activeTab === 'upcoming'} onClick={() => setActiveTab('upcoming')}>
            Sự kiện sắp tới
          </EventTab>
          <EventTab active={activeTab === 'going'} onClick={() => setActiveTab('going')}>
            Sẽ tham gia
          </EventTab>
          <EventTab active={activeTab === 'interested'} onClick={() => setActiveTab('interested')}>
            Quan tâm
          </EventTab>
        </EventTabs>
        
        <FilterContainer>
          <FilterButton>
            <FilterIcon>
              <FaFilter />
            </FilterIcon>
            <FilterText>Bộ lọc</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterText>Hôm nay</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterText>Tuần này</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterText>Tháng này</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterText>Online</FilterText>
          </FilterButton>
        </FilterContainer>
        
        {featuredEvent && (
          <FeaturedEvent>
            <FeaturedEventImage src={featuredEvent.image} alt={featuredEvent.title} />
            <FeaturedEventContent>
              <FeaturedEventInfo>
                <FeaturedEventTitle>{featuredEvent.title}</FeaturedEventTitle>
                <FeaturedEventTime>
                  <FaClock />
                  {formatDate(featuredEvent.date)} lúc {formatTime(featuredEvent.date)}
                </FeaturedEventTime>
                <FeaturedEventLocation>
                  <FaMapMarkerAlt />
                  {featuredEvent.location}
                </FeaturedEventLocation>
              </FeaturedEventInfo>
              
              <FeaturedEventActions>
                {featuredEvent.going ? (
                  <FeaturedEventButton primary>
                    <FaCalendarCheck />
                    Đã xác nhận tham gia
                  </FeaturedEventButton>
                ) : featuredEvent.interested ? (
                  <FeaturedEventButton secondary>
                    <FaCalendarAlt />
                    Quan tâm
                  </FeaturedEventButton>
                ) : (
                  <FeaturedEventButton primary>
                    <FaCalendarCheck />
                    Tham gia
                  </FeaturedEventButton>
                )}
                <FeaturedEventButton>
                  <FaEllipsisH />
                </FeaturedEventButton>
              </FeaturedEventActions>
            </FeaturedEventContent>
            
            <FeaturedEventDescription>
              {featuredEvent.description}
            </FeaturedEventDescription>
            
            <FeaturedEventAttendees>
              <SidebarTitle>Người tham gia ({featuredEvent.attendees})</SidebarTitle>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                {Array(5).fill().map((_, i) => (
                  <AttendeeAvatar key={i}>
                    <img src={`https://i.pravatar.cc/150?img=${i + 20}`} alt={`Attendee ${i + 1}`} />
                  </AttendeeAvatar>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#65676b' }}>
                  +{featuredEvent.attendees - 5} người khác
                </div>
              </div>
            </FeaturedEventAttendees>
          </FeaturedEvent>
        )}
        
        {filteredEvents.length > 0 ? (
          <EventsGrid>
            {filteredEvents.map(event => (
              <EventCard key={event.id} onClick={() => handleEventClick(event)}>
                <EventDate>
                  <EventMonth>{getMonth(event.date)}</EventMonth>
                  <EventDay>{getDay(event.date)}</EventDay>
                </EventDate>
                <EventImage src={event.image} alt={event.title} />
                <EventInfo>
                  <EventTitle>{event.title}</EventTitle>
                  <EventTime>
                    <FaClock />
                    {formatTime(event.date)}
                  </EventTime>
                  <EventLocation>
                    <FaMapMarkerAlt />
                    {event.location}
                  </EventLocation>
                  <EventAttendees>
                    <FaUsers />
                    {event.attendees} người tham gia
                  </EventAttendees>
                  <EventActions>
                    {event.going ? (
                      <EventButton primary>
                        <FaCalendarCheck />
                        Đã xác nhận
                      </EventButton>
                    ) : event.interested ? (
                      <EventButton secondary>
                        <FaCalendarAlt />
                        Quan tâm
                      </EventButton>
                    ) : (
                      <EventButton primary>
                        <FaCalendarCheck />
                        Tham gia
                      </EventButton>
                    )}
                  </EventActions>
                </EventInfo>
              </EventCard>
            ))}
            
            <CreateEventCard>
              <CreateEventIcon>
                <FaCalendarPlus />
              </CreateEventIcon>
              <CreateEventText>Tạo sự kiện mới</CreateEventText>
            </CreateEventCard>
          </EventsGrid>
        ) : (
          <NoEventsContent>
            <NoEventsIcon>
              <FaCalendarAlt />
            </NoEventsIcon>
            <NoEventsTitle>Không tìm thấy sự kiện</NoEventsTitle>
            <NoEventsText>
              Không tìm thấy sự kiện phù hợp với tìm kiếm của bạn. Hãy thử tìm kiếm với từ khóa khác hoặc xem tất cả các sự kiện sắp tới.
            </NoEventsText>
          </NoEventsContent>
        )}
      </EventsContent>
    </EventsContainer>
  );
};

export default Events; 