import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaShieldAlt, FaUserCog, FaLock, FaExclamationTriangle, FaChevronRight, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import {
  HelpCenterContainer,
  HelpCenterHeader,
  HelpCenterTitle,
  HelpCenterSubtitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  HelpCenterContent,
  HelpCenterLeftSidebar,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  HelpCenterMainContent,
  PopularTopics,
  PopularTopicsTitle,
  TopicsList,
  TopicItem,
  TopicTitle,
  TopicDescription,
  FAQSection,
  FAQTitle,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  ContactSection,
  ContactTitle,
  ContactDescription,
  ContactButton,
  HelpCenterCard,
  CardTitle,
  CardContent,
  CardLink
} from './styles';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQs, setExpandedFAQs] = useState({});
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'general', name: 'Câu hỏi chung', icon: <FaQuestionCircle /> },
    { id: 'account', name: 'Tài khoản', icon: <FaUserCog /> },
    { id: 'privacy', name: 'Quyền riêng tư', icon: <FaLock /> },
    { id: 'security', name: 'Bảo mật', icon: <FaShieldAlt /> },
    { id: 'report', name: 'Báo cáo vấn đề', icon: <FaExclamationTriangle /> }
  ];
  
  // Dữ liệu mẫu cho chủ đề phổ biến
  const popularTopics = [
    {
      id: 1,
      title: 'Cách bảo vệ tài khoản của bạn',
      description: 'Tìm hiểu cách thiết lập xác thực hai yếu tố và các biện pháp bảo mật khác.',
      category: 'security'
    },
    {
      id: 2,
      title: 'Quản lý quyền riêng tư của bạn',
      description: 'Kiểm soát ai có thể xem nội dung của bạn và cách bạn tương tác trên nền tảng.',
      category: 'privacy'
    },
    {
      id: 3,
      title: 'Khôi phục tài khoản bị khóa',
      description: 'Các bước để khôi phục quyền truy cập vào tài khoản của bạn.',
      category: 'account'
    },
    {
      id: 4,
      title: 'Báo cáo nội dung không phù hợp',
      description: 'Cách báo cáo bài đăng, bình luận hoặc người dùng vi phạm quy tắc cộng đồng.',
      category: 'report'
    }
  ];
  
  // Dữ liệu mẫu cho FAQ
  const faqs = [
    {
      id: 1,
      question: 'Làm thế nào để thay đổi mật khẩu của tôi?',
      answer: 'Để thay đổi mật khẩu, hãy đi đến Cài đặt > Bảo mật và đăng nhập > Thay đổi mật khẩu. Bạn sẽ cần nhập mật khẩu hiện tại và sau đó nhập mật khẩu mới hai lần để xác nhận.',
      category: 'account'
    },
    {
      id: 2,
      question: 'Ai có thể xem bài đăng của tôi?',
      answer: 'Điều này phụ thuộc vào cài đặt quyền riêng tư của bạn. Bạn có thể chọn chia sẻ bài đăng với tất cả mọi người (công khai), chỉ với bạn bè, hoặc với một nhóm người cụ thể. Bạn có thể điều chỉnh cài đặt này cho từng bài đăng hoặc thiết lập mặc định trong phần Cài đặt > Quyền riêng tư.',
      category: 'privacy'
    },
    {
      id: 3,
      question: 'Làm thế nào để bật xác thực hai yếu tố?',
      answer: 'Để bật xác thực hai yếu tố, hãy đi đến Cài đặt > Bảo mật và đăng nhập > Xác thực hai yếu tố. Bạn có thể chọn nhận mã qua SMS, sử dụng ứng dụng xác thực, hoặc sử dụng khóa bảo mật vật lý.',
      category: 'security'
    },
    {
      id: 4,
      question: 'Làm thế nào để báo cáo một tài khoản giả mạo?',
      answer: 'Để báo cáo một tài khoản giả mạo, hãy đi đến trang hồ sơ của tài khoản đó, nhấp vào biểu tượng ba chấm (...) và chọn "Báo cáo". Sau đó, chọn "Tài khoản giả mạo" và làm theo hướng dẫn để cung cấp thêm thông tin.',
      category: 'report'
    },
    {
      id: 5,
      question: 'Tôi quên mật khẩu của mình. Làm thế nào để đặt lại?',
      answer: 'Trên trang đăng nhập, nhấp vào liên kết "Quên mật khẩu". Nhập địa chỉ email hoặc số điện thoại liên kết với tài khoản của bạn, và chúng tôi sẽ gửi cho bạn hướng dẫn đặt lại mật khẩu.',
      category: 'account'
    },
    {
      id: 6,
      question: 'Làm thế nào để chặn một người dùng?',
      answer: 'Để chặn một người dùng, hãy đi đến trang hồ sơ của họ, nhấp vào biểu tượng ba chấm (...) và chọn "Chặn". Người dùng bị chặn sẽ không thể xem hồ sơ của bạn, gửi tin nhắn cho bạn, hoặc thấy bài đăng của bạn.',
      category: 'privacy'
    }
  ];
  
  const toggleFAQ = (faqId) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };
  
  const filteredFAQs = faqs.filter(faq => 
    (faq.category === activeCategory || activeCategory === 'general') &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const filteredTopics = popularTopics.filter(topic => 
    topic.category === activeCategory || activeCategory === 'general'
  );
  
  return (
    <HelpCenterContainer>
      <HelpCenterHeader>
        <HelpCenterTitle>Trung tâm trợ giúp</HelpCenterTitle>
        <HelpCenterSubtitle>Chúng tôi có thể giúp gì cho bạn?</HelpCenterSubtitle>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm câu hỏi hoặc chủ đề..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </HelpCenterHeader>
      
      <HelpCenterContent>
        <HelpCenterLeftSidebar>
          <CategoryList>
            {categories.map(category => (
              <CategoryItem 
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                <CategoryIcon active={activeCategory === category.id}>
                  {category.icon}
                </CategoryIcon>
                <CategoryText>{category.name}</CategoryText>
              </CategoryItem>
            ))}
          </CategoryList>
          
          <HelpCenterCard>
            <CardTitle>Cần thêm trợ giúp?</CardTitle>
            <CardContent>
              Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, hãy liên hệ với đội ngũ hỗ trợ của chúng tôi.
            </CardContent>
            <CardLink>
              Liên hệ hỗ trợ <FaArrowRight />
            </CardLink>
          </HelpCenterCard>
        </HelpCenterLeftSidebar>
        
        <HelpCenterMainContent>
          {filteredTopics.length > 0 && (
            <PopularTopics>
              <PopularTopicsTitle>Chủ đề phổ biến</PopularTopicsTitle>
              <TopicsList>
                {filteredTopics.map(topic => (
                  <TopicItem key={topic.id}>
                    <TopicTitle>{topic.title}</TopicTitle>
                    <TopicDescription>{topic.description}</TopicDescription>
                  </TopicItem>
                ))}
              </TopicsList>
            </PopularTopics>
          )}
          
          <FAQSection>
            <FAQTitle>Câu hỏi thường gặp</FAQTitle>
            <FAQList>
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map(faq => (
                  <FAQItem key={faq.id}>
                    <FAQQuestion onClick={() => toggleFAQ(faq.id)}>
                      {faq.question}
                      {expandedFAQs[faq.id] ? <FaChevronDown /> : <FaChevronRight />}
                    </FAQQuestion>
                    {expandedFAQs[faq.id] && (
                      <FAQAnswer>{faq.answer}</FAQAnswer>
                    )}
                  </FAQItem>
                ))
              ) : (
                <div>Không tìm thấy câu hỏi phù hợp với tìm kiếm của bạn.</div>
              )}
            </FAQList>
          </FAQSection>
          
          <ContactSection>
            <ContactTitle>Vẫn cần trợ giúp?</ContactTitle>
            <ContactDescription>
              Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ.
            </ContactDescription>
            <ContactButton>Liên hệ với chúng tôi</ContactButton>
          </ContactSection>
        </HelpCenterMainContent>
      </HelpCenterContent>
    </HelpCenterContainer>
  );
};

export default HelpCenter; 