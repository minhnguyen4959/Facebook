import React, { useState } from 'react';
import { FaLock, FaUserFriends, FaGlobe, FaUserShield, FaEye, FaEyeSlash, FaSearch, FaInfoCircle, FaChevronRight, FaToggleOn, FaToggleOff, FaExclamationTriangle } from 'react-icons/fa';
import {
  PrivacyContainer,
  PrivacyHeader,
  PrivacyTitle,
  PrivacyDescription,
  PrivacyContent,
  PrivacyLeftSidebar,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  PrivacyMainContent,
  SettingsSection,
  SectionTitle,
  SectionDescription,
  SettingsList,
  SettingItem,
  SettingInfo,
  SettingName,
  SettingDescription,
  SettingControl,
  ToggleButton,
  ToggleIcon,
  PrivacyAlert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  SelectControl,
  PrivacyOption,
  OptionIcon,
  OptionText,
  PrivacyTip,
  TipIcon,
  TipContent,
  SearchContainer,
  SearchIcon,
  SearchInput,
  PrivacyButton
} from './styles';

const PrivacySettings = () => {
  const [activeCategory, setActiveCategory] = useState('profile');
  const [searchTerm, setSearchTerm] = useState('');
  const [settings, setSettings] = useState({
    profileVisibility: 'friends',
    postVisibility: 'friends',
    friendsListVisibility: 'friends',
    tagReview: true,
    searchEngineBlock: true,
    activityStatus: true,
    readReceipts: true,
    dataCollection: false,
    locationSharing: false,
    twoFactorAuth: true
  });
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'profile', name: 'Hồ sơ và thông tin', icon: <FaUserShield /> },
    { id: 'visibility', name: 'Quyền riêng tư nội dung', icon: <FaEye /> },
    { id: 'blocking', name: 'Chặn và hạn chế', icon: <FaEyeSlash /> },
    { id: 'data', name: 'Dữ liệu và quảng cáo', icon: <FaLock /> }
  ];
  
  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const handleSelectChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };
  
  const renderSettingsContent = () => {
    switch (activeCategory) {
      case 'profile':
        return (
          <SettingsSection>
            <SectionTitle>Cài đặt hồ sơ và thông tin</SectionTitle>
            <SectionDescription>
              Quản lý ai có thể xem thông tin cá nhân của bạn và cách thông tin của bạn được hiển thị.
            </SectionDescription>
            
            <PrivacyAlert>
              <AlertIcon>
                <FaExclamationTriangle />
              </AlertIcon>
              <AlertContent>
                <AlertTitle>Kiểm tra cài đặt quyền riêng tư của bạn</AlertTitle>
                <AlertDescription>
                  Chúng tôi nhận thấy bạn chưa xem xét cài đặt quyền riêng tư của mình trong 6 tháng qua. Hãy dành thời gian để đảm bảo chúng phản ánh đúng mong muốn của bạn.
                </AlertDescription>
              </AlertContent>
            </PrivacyAlert>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Ai có thể xem hồ sơ của bạn?</SettingName>
                  <SettingDescription>
                    Điều này kiểm soát ai có thể xem thông tin cá nhân của bạn, bao gồm ảnh đại diện, ảnh bìa và thông tin cơ bản.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SelectControl value={settings.profileVisibility}>
                    <PrivacyOption 
                      selected={settings.profileVisibility === 'public'}
                      onClick={() => handleSelectChange('profileVisibility', 'public')}
                    >
                      <OptionIcon>
                        <FaGlobe />
                      </OptionIcon>
                      <OptionText>Công khai</OptionText>
                    </PrivacyOption>
                    <PrivacyOption 
                      selected={settings.profileVisibility === 'friends'}
                      onClick={() => handleSelectChange('profileVisibility', 'friends')}
                    >
                      <OptionIcon>
                        <FaUserFriends />
                      </OptionIcon>
                      <OptionText>Bạn bè</OptionText>
                    </PrivacyOption>
                    <PrivacyOption 
                      selected={settings.profileVisibility === 'private'}
                      onClick={() => handleSelectChange('profileVisibility', 'private')}
                    >
                      <OptionIcon>
                        <FaLock />
                      </OptionIcon>
                      <OptionText>Chỉ mình tôi</OptionText>
                    </PrivacyOption>
                  </SelectControl>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Ai có thể xem danh sách bạn bè của bạn?</SettingName>
                  <SettingDescription>
                    Điều này kiểm soát ai có thể xem danh sách bạn bè của bạn trên trang hồ sơ.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SelectControl value={settings.friendsListVisibility}>
                    <PrivacyOption 
                      selected={settings.friendsListVisibility === 'public'}
                      onClick={() => handleSelectChange('friendsListVisibility', 'public')}
                    >
                      <OptionIcon>
                        <FaGlobe />
                      </OptionIcon>
                      <OptionText>Công khai</OptionText>
                    </PrivacyOption>
                    <PrivacyOption 
                      selected={settings.friendsListVisibility === 'friends'}
                      onClick={() => handleSelectChange('friendsListVisibility', 'friends')}
                    >
                      <OptionIcon>
                        <FaUserFriends />
                      </OptionIcon>
                      <OptionText>Bạn bè</OptionText>
                    </PrivacyOption>
                    <PrivacyOption 
                      selected={settings.friendsListVisibility === 'private'}
                      onClick={() => handleSelectChange('friendsListVisibility', 'private')}
                    >
                      <OptionIcon>
                        <FaLock />
                      </OptionIcon>
                      <OptionText>Chỉ mình tôi</OptionText>
                    </PrivacyOption>
                  </SelectControl>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Hiển thị trạng thái hoạt động</SettingName>
                  <SettingDescription>
                    Cho phép người khác biết khi nào bạn đang hoạt động hoặc hoạt động gần đây trên ứng dụng.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('activityStatus')}>
                    <ToggleIcon active={settings.activityStatus}>
                      {settings.activityStatus ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Chặn công cụ tìm kiếm</SettingName>
                  <SettingDescription>
                    Ngăn các công cụ tìm kiếm bên ngoài liên kết đến trang hồ sơ của bạn.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('searchEngineBlock')}>
                    <ToggleIcon active={settings.searchEngineBlock}>
                      {settings.searchEngineBlock ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
            </SettingsList>
          </SettingsSection>
        );
      case 'visibility':
        return (
          <SettingsSection>
            <SectionTitle>Quyền riêng tư nội dung</SectionTitle>
            <SectionDescription>
              Quản lý ai có thể xem nội dung của bạn và cách bạn tương tác với người khác.
            </SectionDescription>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Ai có thể xem bài đăng của bạn?</SettingName>
                  <SettingDescription>
                    Đây là cài đặt mặc định cho bài đăng mới. Bạn vẫn có thể điều chỉnh quyền riêng tư cho từng bài đăng riêng lẻ.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SelectControl value={settings.postVisibility}>
                    <PrivacyOption 
                      selected={settings.postVisibility === 'public'}
                      onClick={() => handleSelectChange('postVisibility', 'public')}
                    >
                      <OptionIcon>
                        <FaGlobe />
                      </OptionIcon>
                      <OptionText>Công khai</OptionText>
                    </PrivacyOption>
                    <PrivacyOption 
                      selected={settings.postVisibility === 'friends'}
                      onClick={() => handleSelectChange('postVisibility', 'friends')}
                    >
                      <OptionIcon>
                        <FaUserFriends />
                      </OptionIcon>
                      <OptionText>Bạn bè</OptionText>
                    </PrivacyOption>
                    <PrivacyOption 
                      selected={settings.postVisibility === 'private'}
                      onClick={() => handleSelectChange('postVisibility', 'private')}
                    >
                      <OptionIcon>
                        <FaLock />
                      </OptionIcon>
                      <OptionText>Chỉ mình tôi</OptionText>
                    </PrivacyOption>
                  </SelectControl>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Xem xét gắn thẻ</SettingName>
                  <SettingDescription>
                    Xem xét các gắn thẻ mà người khác thêm vào bài đăng của bạn trước khi chúng xuất hiện trên hồ sơ của bạn.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('tagReview')}>
                    <ToggleIcon active={settings.tagReview}>
                      {settings.tagReview ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Xác nhận đã đọc tin nhắn</SettingName>
                  <SettingDescription>
                    Cho người khác biết khi bạn đã đọc tin nhắn của họ.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('readReceipts')}>
                    <ToggleIcon active={settings.readReceipts}>
                      {settings.readReceipts ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <PrivacyTip>
                <TipIcon>
                  <FaInfoCircle />
                </TipIcon>
                <TipContent>
                  Mẹo: Bạn có thể kiểm tra lại các bài đăng cũ của mình và điều chỉnh quyền riêng tư cho từng bài đăng trong phần "Hoạt động của bạn".
                </TipContent>
              </PrivacyTip>
            </SettingsList>
          </SettingsSection>
        );
      case 'blocking':
        return (
          <SettingsSection>
            <SectionTitle>Chặn và hạn chế</SectionTitle>
            <SectionDescription>
              Quản lý người dùng bị chặn và các hạn chế khác để bảo vệ trải nghiệm của bạn.
            </SectionDescription>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Người dùng bị chặn</SettingName>
                  <SettingDescription>
                    Xem và quản lý danh sách người dùng mà bạn đã chặn. Người dùng bị chặn không thể xem hồ sơ của bạn, gửi tin nhắn cho bạn hoặc thấy bài đăng của bạn.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <PrivacyButton>
                    Quản lý <FaChevronRight />
                  </PrivacyButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Hạn chế tương tác</SettingName>
                  <SettingDescription>
                    Quản lý người dùng có tương tác hạn chế với bạn. Họ vẫn có thể xem nội dung của bạn nhưng không thể bình luận hoặc tương tác.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <PrivacyButton>
                    Quản lý <FaChevronRight />
                  </PrivacyButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Từ và cụm từ bị ẩn</SettingName>
                  <SettingDescription>
                    Quản lý danh sách từ và cụm từ mà bạn muốn lọc khỏi bình luận và tin nhắn.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <PrivacyButton>
                    Quản lý <FaChevronRight />
                  </PrivacyButton>
                </SettingControl>
              </SettingItem>
            </SettingsList>
          </SettingsSection>
        );
      case 'data':
        return (
          <SettingsSection>
            <SectionTitle>Dữ liệu và quảng cáo</SectionTitle>
            <SectionDescription>
              Quản lý cách dữ liệu của bạn được sử dụng và cài đặt quảng cáo.
            </SectionDescription>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Thu thập dữ liệu để cải thiện trải nghiệm</SettingName>
                  <SettingDescription>
                    Cho phép chúng tôi thu thập dữ liệu về cách bạn sử dụng ứng dụng để cải thiện tính năng và trải nghiệm người dùng.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('dataCollection')}>
                    <ToggleIcon active={settings.dataCollection}>
                      {settings.dataCollection ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Chia sẻ vị trí</SettingName>
                  <SettingDescription>
                    Cho phép ứng dụng truy cập vị trí của bạn để cung cấp tính năng dựa trên vị trí.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('locationSharing')}>
                    <ToggleIcon active={settings.locationSharing}>
                      {settings.locationSharing ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Tải xuống dữ liệu của bạn</SettingName>
                  <SettingDescription>
                    Tải xuống bản sao dữ liệu mà bạn đã chia sẻ trên nền tảng của chúng tôi.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <PrivacyButton>
                    Tải xuống <FaChevronRight />
                  </PrivacyButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Quản lý quảng cáo</SettingName>
                  <SettingDescription>
                    Kiểm soát loại quảng cáo bạn nhìn thấy và cách thông tin của bạn được sử dụng để cá nhân hóa quảng cáo.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <PrivacyButton>
                    Quản lý <FaChevronRight />
                  </PrivacyButton>
                </SettingControl>
              </SettingItem>
            </SettingsList>
          </SettingsSection>
        );
      default:
        return null;
    }
  };
  
  return (
    <PrivacyContainer>
      <PrivacyHeader>
        <PrivacyTitle>Cài đặt quyền riêng tư</PrivacyTitle>
        <PrivacyDescription>
          Quản lý thông tin của bạn và kiểm soát ai có thể xem những gì trên hồ sơ của bạn.
        </PrivacyDescription>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm cài đặt..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </PrivacyHeader>
      
      <PrivacyContent>
        <PrivacyLeftSidebar>
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
        </PrivacyLeftSidebar>
        
        <PrivacyMainContent>
          {renderSettingsContent()}
        </PrivacyMainContent>
      </PrivacyContent>
    </PrivacyContainer>
  );
};

export default PrivacySettings; 