import React, { useState } from 'react';
import { FaUser, FaLock, FaBell, FaGlobe, FaShieldAlt, FaQuestionCircle, FaSignOutAlt, FaMoon, FaSun, FaToggleOn, FaToggleOff, FaCheck } from 'react-icons/fa';
import {
  SettingsContainer,
  SettingsLeftSidebar,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SettingsContent,
  SettingsHeader,
  SettingsTitle,
  SettingsSection,
  SectionTitle,
  SettingItem,
  SettingLabel,
  SettingDescription,
  SettingControl,
  ToggleSwitch,
  ToggleSlider,
  SelectControl,
  RadioGroup,
  RadioOption,
  RadioLabel,
  Button,
  ButtonGroup,
  InputGroup,
  InputLabel,
  Input,
  TextArea,
  ErrorMessage,
  SuccessMessage
} from './styles';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('vi');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'friends',
    postVisibility: 'public',
    friendRequests: 'everyone',
    tagging: 'friends'
  });
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0912345678',
    bio: 'Nhiếp ảnh gia | Người yêu thích du lịch | Kỹ sư phần mềm'
  });
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value
    });
    setPasswordError('');
    setPasswordSuccess('');
  };
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };
  
  const handlePrivacyChange = (setting, value) => {
    setPrivacy({
      ...privacy,
      [setting]: value
    });
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (password.new !== password.confirm) {
      setPasswordError('Mật khẩu mới không khớp');
      return;
    }
    
    if (password.new.length < 8) {
      setPasswordError('Mật khẩu phải có ít nhất 8 ký tự');
      return;
    }
    
    // Giả lập API call thành công
    setTimeout(() => {
      setPasswordSuccess('Mật khẩu đã được cập nhật thành công');
      setPassword({
        current: '',
        new: '',
        confirm: ''
      });
    }, 1000);
  };
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Giả lập API call
    console.log('Cập nhật thông tin cá nhân:', profileData);
  };
  
  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <>
            <SettingsSection>
              <SectionTitle>Thông tin cá nhân</SectionTitle>
              <form onSubmit={handleProfileSubmit}>
                <InputGroup>
                  <InputLabel>Họ và tên</InputLabel>
                  <Input 
                    type="text" 
                    name="name" 
                    value={profileData.name} 
                    onChange={handleProfileChange} 
                  />
                </InputGroup>
                
                <InputGroup>
                  <InputLabel>Email</InputLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    value={profileData.email} 
                    onChange={handleProfileChange} 
                  />
                </InputGroup>
                
                <InputGroup>
                  <InputLabel>Số điện thoại</InputLabel>
                  <Input 
                    type="tel" 
                    name="phone" 
                    value={profileData.phone} 
                    onChange={handleProfileChange} 
                  />
                </InputGroup>
                
                <InputGroup>
                  <InputLabel>Giới thiệu</InputLabel>
                  <TextArea 
                    name="bio" 
                    value={profileData.bio} 
                    onChange={handleProfileChange} 
                    rows={4}
                  />
                </InputGroup>
                
                <ButtonGroup>
                  <Button primary type="submit">Lưu thay đổi</Button>
                </ButtonGroup>
              </form>
            </SettingsSection>
            
            <SettingsSection>
              <SectionTitle>Đổi mật khẩu</SectionTitle>
              <form onSubmit={handlePasswordSubmit}>
                <InputGroup>
                  <InputLabel>Mật khẩu hiện tại</InputLabel>
                  <Input 
                    type="password" 
                    name="current" 
                    value={password.current} 
                    onChange={handlePasswordChange} 
                  />
                </InputGroup>
                
                <InputGroup>
                  <InputLabel>Mật khẩu mới</InputLabel>
                  <Input 
                    type="password" 
                    name="new" 
                    value={password.new} 
                    onChange={handlePasswordChange} 
                  />
                </InputGroup>
                
                <InputGroup>
                  <InputLabel>Xác nhận mật khẩu mới</InputLabel>
                  <Input 
                    type="password" 
                    name="confirm" 
                    value={password.confirm} 
                    onChange={handlePasswordChange} 
                  />
                </InputGroup>
                
                {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                {passwordSuccess && <SuccessMessage>{passwordSuccess}</SuccessMessage>}
                
                <ButtonGroup>
                  <Button primary type="submit">Cập nhật mật khẩu</Button>
                </ButtonGroup>
              </form>
            </SettingsSection>
          </>
        );
      case 'privacy':
        return (
          <SettingsSection>
            <SectionTitle>Cài đặt quyền riêng tư</SectionTitle>
            
            <SettingItem>
              <div>
                <SettingLabel>Ai có thể xem trang cá nhân của bạn?</SettingLabel>
                <SettingDescription>Điều chỉnh người có thể xem thông tin cá nhân của bạn</SettingDescription>
              </div>
              <SettingControl>
                <SelectControl 
                  value={privacy.profileVisibility} 
                  onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                >
                  <option value="public">Tất cả mọi người</option>
                  <option value="friends">Chỉ bạn bè</option>
                  <option value="private">Chỉ mình tôi</option>
                </SelectControl>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Ai có thể xem bài viết của bạn?</SettingLabel>
                <SettingDescription>Cài đặt mặc định cho bài viết mới</SettingDescription>
              </div>
              <SettingControl>
                <RadioGroup>
                  <RadioOption>
                    <input 
                      type="radio" 
                      id="post-public" 
                      name="postVisibility" 
                      value="public" 
                      checked={privacy.postVisibility === 'public'} 
                      onChange={(e) => handlePrivacyChange('postVisibility', e.target.value)} 
                    />
                    <RadioLabel htmlFor="post-public">Tất cả mọi người</RadioLabel>
                  </RadioOption>
                  <RadioOption>
                    <input 
                      type="radio" 
                      id="post-friends" 
                      name="postVisibility" 
                      value="friends" 
                      checked={privacy.postVisibility === 'friends'} 
                      onChange={(e) => handlePrivacyChange('postVisibility', e.target.value)} 
                    />
                    <RadioLabel htmlFor="post-friends">Chỉ bạn bè</RadioLabel>
                  </RadioOption>
                  <RadioOption>
                    <input 
                      type="radio" 
                      id="post-private" 
                      name="postVisibility" 
                      value="private" 
                      checked={privacy.postVisibility === 'private'} 
                      onChange={(e) => handlePrivacyChange('postVisibility', e.target.value)} 
                    />
                    <RadioLabel htmlFor="post-private">Chỉ mình tôi</RadioLabel>
                  </RadioOption>
                </RadioGroup>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Ai có thể gửi lời mời kết bạn?</SettingLabel>
                <SettingDescription>Kiểm soát ai có thể gửi lời mời kết bạn cho bạn</SettingDescription>
              </div>
              <SettingControl>
                <SelectControl 
                  value={privacy.friendRequests} 
                  onChange={(e) => handlePrivacyChange('friendRequests', e.target.value)}
                >
                  <option value="everyone">Tất cả mọi người</option>
                  <option value="friends-of-friends">Bạn của bạn bè</option>
                  <option value="none">Không ai</option>
                </SelectControl>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Ai có thể gắn thẻ bạn?</SettingLabel>
                <SettingDescription>Kiểm soát ai có thể gắn thẻ bạn trong bài viết và ảnh</SettingDescription>
              </div>
              <SettingControl>
                <SelectControl 
                  value={privacy.tagging} 
                  onChange={(e) => handlePrivacyChange('tagging', e.target.value)}
                >
                  <option value="everyone">Tất cả mọi người</option>
                  <option value="friends">Chỉ bạn bè</option>
                  <option value="none">Không ai</option>
                </SelectControl>
              </SettingControl>
            </SettingItem>
          </SettingsSection>
        );
      case 'notifications':
        return (
          <SettingsSection>
            <SectionTitle>Cài đặt thông báo</SectionTitle>
            
            <SettingItem>
              <div>
                <SettingLabel>Thông báo qua email</SettingLabel>
                <SettingDescription>Nhận thông báo qua email khi có hoạt động mới</SettingDescription>
              </div>
              <SettingControl>
                <ToggleSwitch onClick={() => setEmailNotifications(!emailNotifications)}>
                  {emailNotifications ? <FaToggleOn /> : <FaToggleOff />}
                </ToggleSwitch>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Thông báo đẩy</SettingLabel>
                <SettingDescription>Nhận thông báo đẩy trên trình duyệt hoặc thiết bị di động</SettingDescription>
              </div>
              <SettingControl>
                <ToggleSwitch onClick={() => setPushNotifications(!pushNotifications)}>
                  {pushNotifications ? <FaToggleOn /> : <FaToggleOff />}
                </ToggleSwitch>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Thông báo qua SMS</SettingLabel>
                <SettingDescription>Nhận thông báo qua tin nhắn SMS</SettingDescription>
              </div>
              <SettingControl>
                <ToggleSwitch onClick={() => setSmsNotifications(!smsNotifications)}>
                  {smsNotifications ? <FaToggleOn /> : <FaToggleOff />}
                </ToggleSwitch>
              </SettingControl>
            </SettingItem>
          </SettingsSection>
        );
      case 'appearance':
        return (
          <SettingsSection>
            <SectionTitle>Giao diện</SectionTitle>
            
            <SettingItem>
              <div>
                <SettingLabel>Chế độ tối</SettingLabel>
                <SettingDescription>Chuyển đổi giữa chế độ sáng và tối</SettingDescription>
              </div>
              <SettingControl>
                <ToggleSwitch onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <FaMoon /> : <FaSun />}
                </ToggleSwitch>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Ngôn ngữ</SettingLabel>
                <SettingDescription>Chọn ngôn ngữ hiển thị</SettingDescription>
              </div>
              <SettingControl>
                <SelectControl value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="vi">Tiếng Việt</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </SelectControl>
              </SettingControl>
            </SettingItem>
          </SettingsSection>
        );
      case 'security':
        return (
          <SettingsSection>
            <SectionTitle>Bảo mật</SectionTitle>
            
            <SettingItem>
              <div>
                <SettingLabel>Xác thực hai yếu tố</SettingLabel>
                <SettingDescription>Tăng cường bảo mật cho tài khoản của bạn</SettingDescription>
              </div>
              <SettingControl>
                <Button>Thiết lập</Button>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Phiên đăng nhập</SettingLabel>
                <SettingDescription>Quản lý các thiết bị đang đăng nhập vào tài khoản của bạn</SettingDescription>
              </div>
              <SettingControl>
                <Button>Xem phiên đăng nhập</Button>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <div>
                <SettingLabel>Đăng xuất khỏi tất cả thiết bị</SettingLabel>
                <SettingDescription>Đăng xuất khỏi tất cả các thiết bị ngoại trừ thiết bị hiện tại</SettingDescription>
              </div>
              <SettingControl>
                <Button danger>Đăng xuất</Button>
              </SettingControl>
            </SettingItem>
          </SettingsSection>
        );
      default:
        return null;
    }
  };
  
  return (
    <SettingsContainer>
      <SettingsLeftSidebar>
        <SidebarItem 
          active={activeSection === 'account'} 
          onClick={() => setActiveSection('account')}
        >
          <SidebarIcon>
            <FaUser />
          </SidebarIcon>
          <SidebarText>Tài khoản</SidebarText>
        </SidebarItem>
        
        <SidebarItem 
          active={activeSection === 'privacy'} 
          onClick={() => setActiveSection('privacy')}
        >
          <SidebarIcon>
            <FaLock />
          </SidebarIcon>
          <SidebarText>Quyền riêng tư</SidebarText>
        </SidebarItem>
        
        <SidebarItem 
          active={activeSection === 'notifications'} 
          onClick={() => setActiveSection('notifications')}
        >
          <SidebarIcon>
            <FaBell />
          </SidebarIcon>
          <SidebarText>Thông báo</SidebarText>
        </SidebarItem>
        
        <SidebarItem 
          active={activeSection === 'appearance'} 
          onClick={() => setActiveSection('appearance')}
        >
          <SidebarIcon>
            <FaGlobe />
          </SidebarIcon>
          <SidebarText>Giao diện</SidebarText>
        </SidebarItem>
        
        <SidebarItem 
          active={activeSection === 'security'} 
          onClick={() => setActiveSection('security')}
        >
          <SidebarIcon>
            <FaShieldAlt />
          </SidebarIcon>
          <SidebarText>Bảo mật</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaQuestionCircle />
          </SidebarIcon>
          <SidebarText>Trợ giúp</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaSignOutAlt />
          </SidebarIcon>
          <SidebarText>Đăng xuất</SidebarText>
        </SidebarItem>
      </SettingsLeftSidebar>
      
      <SettingsContent>
        <SettingsHeader>
          <SettingsTitle>
            {activeSection === 'account' && 'Cài đặt tài khoản'}
            {activeSection === 'privacy' && 'Cài đặt quyền riêng tư'}
            {activeSection === 'notifications' && 'Cài đặt thông báo'}
            {activeSection === 'appearance' && 'Cài đặt giao diện'}
            {activeSection === 'security' && 'Cài đặt bảo mật'}
          </SettingsTitle>
        </SettingsHeader>
        
        {renderContent()}
      </SettingsContent>
    </SettingsContainer>
  );
};

export default Settings; 