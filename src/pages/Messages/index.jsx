import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaEllipsisH, FaRegSmile, FaPaperPlane, FaImage, FaFile, FaGift, FaPhoneAlt, FaVideo, FaInfoCircle, FaRegBell, FaCheck, FaCheckDouble, FaCircle } from 'react-icons/fa';
import {
  MessagesContainer,
  MessagesLeftSidebar,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ConversationsList,
  ConversationItem,
  ConversationAvatar,
  ConversationInfo,
  ConversationName,
  ConversationLastMessage,
  ConversationTime,
  ConversationBadge,
  MessagesContent,
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderName,
  ChatHeaderStatus,
  ChatHeaderActions,
  ChatHeaderAction,
  ChatBody,
  MessageGroup,
  MessageDate,
  Message,
  MessageText,
  MessageTime,
  MessageStatus,
  ChatFooter,
  ChatInput,
  ChatInputActions,
  ChatInputAction,
  SendButton,
  EmptyMessages,
  EmptyMessagesIcon,
  EmptyMessagesText,
  EmptyMessagesSubtext,
  EmptyChat,
  EmptyChatIcon,
  EmptyChatText,
  EmptyChatSubtext
} from './styles';

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      avatar: 'https://picsum.photos/id/1001/40/40',
      online: true,
      lastMessage: 'Bạn đang làm gì vậy?',
      lastMessageTime: '10:30',
      unread: 2,
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Chào bạn, dạo này bạn thế nào?',
          time: '10:15',
          status: 'read'
        },
        {
          id: 2,
          sender: 'me',
          text: 'Chào A, mình khỏe. Còn bạn?',
          time: '10:20',
          status: 'read'
        },
        {
          id: 3,
          sender: 'them',
          text: 'Mình cũng ổn. Bạn đang làm gì vậy?',
          time: '10:30',
          status: 'read'
        }
      ]
    },
    {
      id: 2,
      name: 'Trần Thị B',
      avatar: 'https://picsum.photos/id/1002/40/40',
      online: false,
      lastSeen: '1 giờ trước',
      lastMessage: 'Hẹn gặp lại bạn vào cuối tuần nhé!',
      lastMessageTime: '09:45',
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'me',
          text: 'Cuối tuần này bạn có kế hoạch gì không?',
          time: '09:30',
          status: 'read'
        },
        {
          id: 2,
          sender: 'them',
          text: 'Mình chưa có kế hoạch gì cả. Bạn muốn đi đâu à?',
          time: '09:35',
          status: 'read'
        },
        {
          id: 3,
          sender: 'me',
          text: 'Mình đang nghĩ đến việc đi xem phim, bạn có muốn đi cùng không?',
          time: '09:40',
          status: 'read'
        },
        {
          id: 4,
          sender: 'them',
          text: 'Hẹn gặp lại bạn vào cuối tuần nhé!',
          time: '09:45',
          status: 'read'
        }
      ]
    },
    {
      id: 3,
      name: 'Lê Văn C',
      avatar: 'https://picsum.photos/id/1003/40/40',
      online: true,
      lastMessage: 'Bạn đã xem tài liệu mình gửi chưa?',
      lastMessageTime: 'Hôm qua',
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Chào bạn, mình vừa gửi cho bạn một tài liệu quan trọng qua email.',
          time: '15:20',
          status: 'read'
        },
        {
          id: 2,
          sender: 'me',
          text: 'Cảm ơn bạn, để mình kiểm tra.',
          time: '15:30',
          status: 'read'
        },
        {
          id: 3,
          sender: 'them',
          text: 'Bạn đã xem tài liệu mình gửi chưa?',
          time: '18:45',
          status: 'read'
        }
      ]
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      avatar: 'https://picsum.photos/id/1004/40/40',
      online: false,
      lastSeen: '3 giờ trước',
      lastMessage: 'Nhớ mang theo tài liệu cho buổi họp ngày mai nhé!',
      lastMessageTime: 'Thứ 2',
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Chào bạn, ngày mai chúng ta có buổi họp lúc 9h đúng không?',
          time: '14:10',
          status: 'read'
        },
        {
          id: 2,
          sender: 'me',
          text: 'Đúng rồi, tại phòng họp số 3 nhé.',
          time: '14:15',
          status: 'read'
        },
        {
          id: 3,
          sender: 'them',
          text: 'Nhớ mang theo tài liệu cho buổi họp ngày mai nhé!',
          time: '14:30',
          status: 'read'
        }
      ]
    }
  ]);
  
  const chatBodyRef = useRef(null);
  
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [activeConversation]);
  
  const handleSendMessage = () => {
    if (!message.trim() || !activeConversation) return;
    
    const newMessage = {
      id: Date.now(),
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: message,
          lastMessageTime: 'Vừa xong',
          unread: 0
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setMessage('');
    setActiveConversation(updatedConversations.find(conv => conv.id === activeConversation.id));
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleConversationClick = (conversation) => {
    // Đánh dấu đã đọc khi click vào cuộc trò chuyện
    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversation.id) {
        return {
          ...conv,
          unread: 0
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setActiveConversation(conversation);
  };
  
  const filteredConversations = conversations.filter(conversation => 
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const formatMessages = (messages) => {
    const groupedMessages = [];
    let currentGroup = null;
    
    messages.forEach(message => {
      const messageDate = new Date().toLocaleDateString();
      
      if (!currentGroup || currentGroup.sender !== message.sender || currentGroup.date !== messageDate) {
        currentGroup = {
          id: message.id,
          sender: message.sender,
          date: messageDate,
          messages: [message]
        };
        groupedMessages.push(currentGroup);
      } else {
        currentGroup.messages.push(message);
      }
    });
    
    return groupedMessages;
  };
  
  return (
    <MessagesContainer>
      <MessagesLeftSidebar>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm tin nhắn" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        {filteredConversations.length > 0 ? (
          <ConversationsList>
            {filteredConversations.map(conversation => (
              <ConversationItem 
                key={conversation.id} 
                active={activeConversation && activeConversation.id === conversation.id}
                onClick={() => handleConversationClick(conversation)}
              >
                <ConversationAvatar>
                  <img src={conversation.avatar} alt={conversation.name} />
                  {conversation.online && <FaCircle />}
                </ConversationAvatar>
                
                <ConversationInfo>
                  <ConversationName>{conversation.name}</ConversationName>
                  <ConversationLastMessage>
                    {conversation.lastMessage}
                  </ConversationLastMessage>
                </ConversationInfo>
                
                <div>
                  <ConversationTime>{conversation.lastMessageTime}</ConversationTime>
                  {conversation.unread > 0 && (
                    <ConversationBadge>{conversation.unread}</ConversationBadge>
                  )}
                </div>
              </ConversationItem>
            ))}
          </ConversationsList>
        ) : (
          <EmptyMessages>
            <EmptyMessagesIcon>
              <FaSearch />
            </EmptyMessagesIcon>
            <EmptyMessagesText>Không tìm thấy kết quả</EmptyMessagesText>
            <EmptyMessagesSubtext>Thử tìm kiếm với từ khóa khác</EmptyMessagesSubtext>
          </EmptyMessages>
        )}
      </MessagesLeftSidebar>
      
      {activeConversation ? (
        <MessagesContent>
          <ChatHeader>
            <ChatHeaderInfo>
              <ConversationAvatar>
                <img src={activeConversation.avatar} alt={activeConversation.name} />
                {activeConversation.online && <FaCircle />}
              </ConversationAvatar>
              <div>
                <ChatHeaderName>{activeConversation.name}</ChatHeaderName>
                <ChatHeaderStatus>
                  {activeConversation.online ? 'Đang hoạt động' : `Hoạt động ${activeConversation.lastSeen}`}
                </ChatHeaderStatus>
              </div>
            </ChatHeaderInfo>
            
            <ChatHeaderActions>
              <ChatHeaderAction>
                <FaPhoneAlt />
              </ChatHeaderAction>
              <ChatHeaderAction>
                <FaVideo />
              </ChatHeaderAction>
              <ChatHeaderAction>
                <FaInfoCircle />
              </ChatHeaderAction>
            </ChatHeaderActions>
          </ChatHeader>
          
          <ChatBody ref={chatBodyRef}>
            {formatMessages(activeConversation.messages).map((group, index) => (
              <MessageGroup key={index} sender={group.sender}>
                {index === 0 && <MessageDate>{group.date}</MessageDate>}
                
                {group.messages.map(message => (
                  <Message key={message.id} sender={message.sender}>
                    <MessageText sender={message.sender}>
                      {message.text}
                      <MessageTime>
                        {message.time}
                        {message.sender === 'me' && (
                          <MessageStatus>
                            {message.status === 'sent' && <FaCheck />}
                            {message.status === 'delivered' && <FaCheckDouble />}
                            {message.status === 'read' && <FaCheckDouble style={{ color: '#0084ff' }} />}
                          </MessageStatus>
                        )}
                      </MessageTime>
                    </MessageText>
                  </Message>
                ))}
              </MessageGroup>
            ))}
          </ChatBody>
          
          <ChatFooter>
            <ChatInputActions>
              <ChatInputAction>
                <FaRegSmile />
              </ChatInputAction>
              <ChatInputAction>
                <FaImage />
              </ChatInputAction>
              <ChatInputAction>
                <FaFile />
              </ChatInputAction>
              <ChatInputAction>
                <FaGift />
              </ChatInputAction>
            </ChatInputActions>
            
            <ChatInput 
              placeholder="Nhập tin nhắn..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            
            <SendButton onClick={handleSendMessage} disabled={!message.trim()}>
              <FaPaperPlane />
            </SendButton>
          </ChatFooter>
        </MessagesContent>
      ) : (
        <EmptyChat>
          <EmptyChatIcon>
            <FaPaperPlane />
          </EmptyChatIcon>
          <EmptyChatText>Tin nhắn của bạn</EmptyChatText>
          <EmptyChatSubtext>Chọn một cuộc trò chuyện để bắt đầu nhắn tin</EmptyChatSubtext>
        </EmptyChat>
      )}
    </MessagesContainer>
  );
};

export default Messages; 