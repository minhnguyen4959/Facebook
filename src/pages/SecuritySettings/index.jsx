import React, { useState } from 'react';
import { FaShieldAlt, FaLock, FaKey, FaHistory, FaDesktop, FaMobileAlt, FaFingerprint, FaExclamationTriangle, FaCheck, FaToggleOn, FaToggleOff, FaInfoCircle, FaChevronRight, FaSearch } from 'react-icons/fa';
import {
  SecurityContainer,
  SecurityHeader,
  SecurityTitle,
  SecurityDescription,
  SecurityContent,
  SecurityLeftSidebar,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  SecurityMainContent,
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
  SecurityAlert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  SecurityButton,
  SecurityTip,
  TipIcon,
  TipContent,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SecurityStatus,
  StatusIcon,
  StatusText,
  DevicesList,
  DeviceItem,
  DeviceInfo,
  DeviceIcon,
  DeviceName,
  DeviceDetails,
  DeviceActions,
  PasswordStrength,
  StrengthBar,
  StrengthText
} from './styles';

const SecuritySettings = () => {
  const [activeCategory, setActiveCategory] = useState('login');
  const [searchTerm, setSearchTerm] = useState('');
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
    unrecognizedLoginBlock: true,
    rememberDevices: true,
    appPasswords: false,
    dataEncryption: true,
    passwordAutoReset: false
  });
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'login', name: 'Đăng nhập và xác thực', icon: <FaKey /> },
    { id: 'devices', name: 'Thiết bị đã đăng nhập', icon: <FaDesktop /> },
    { id: 'activity', name: 'Hoạt động đăng nhập', icon: <FaHistory /> },
    { id: 'advanced', name: 'Bảo mật nâng cao', icon: <FaShieldAlt /> }
  ];
  
  // Dữ liệu mẫu cho thiết bị đã đăng nhập
  const devices = [
    {
      id: 1,
      name: 'Windows PC - Chrome',
      type: 'desktop',
      location: 'Hà Nội, Việt Nam',
      ip: '192.168.1.1',
      lastActive: 'Hiện tại',
      isCurrent: true
    },
    {
      id: 2,
      name: 'iPhone 13 Pro - Safari',
      type: 'mobile',
      location: 'Hà Nội, Việt Nam',
      ip: '192.168.1.2',
      lastActive: '2 giờ trước'
    },
    {
      id: 3,
      name: 'MacBook Pro - Firefox',
      type: 'desktop',
      location: 'Hồ Chí Minh, Việt Nam',
      ip: '192.168.1.3',
      lastActive: '1 ngày trước'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S21 - Chrome',
      type: 'mobile',
      location: 'Đà Nẵng, Việt Nam',
      ip: '192.168.1.4',
      lastActive: '3 ngày trước'
    }
  ];
  
  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const renderSettingsContent = () => {
    switch (activeCategory) {
      case 'login':
        return (
          <SettingsSection>
            <SectionTitle>Đăng nhập và xác thực</SectionTitle>
            <SectionDescription>
              Quản lý cài đặt đăng nhập và xác thực để bảo vệ tài khoản của bạn.
            </SectionDescription>
            
            <SecurityAlert>
              <AlertIcon>
                <FaExclamationTriangle />
              </AlertIcon>
              <AlertContent>
                <AlertTitle>Bảo vệ tài khoản của bạn</AlertTitle>
                <AlertDescription>
                  Chúng tôi khuyến nghị bạn bật xác thực hai yếu tố để tăng cường bảo mật cho tài khoản của mình.
                </AlertDescription>
              </AlertContent>
            </SecurityAlert>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Mật khẩu</SettingName>
                  <SettingDescription>
                    Mật khẩu của bạn được cập nhật lần cuối vào 3 tháng trước. Chúng tôi khuyến nghị thay đổi mật khẩu định kỳ.
                  </SettingDescription>
                  <PasswordStrength>
                    <StrengthBar strength="strong" />
                    <StrengthText strength="strong">Mạnh</StrengthText>
                  </PasswordStrength>
                </SettingInfo>
                <SettingControl>
                  <SecurityButton>
                    Thay đổi mật khẩu <FaChevronRight />
                  </SecurityButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Xác thực hai yếu tố</SettingName>
                  <SettingDescription>
                    Thêm một lớp bảo mật bổ sung bằng cách yêu cầu mã xác thực khi đăng nhập từ thiết bị không xác định.
                  </SettingDescription>
                  <SecurityStatus active={settings.twoFactorAuth}>
                    <StatusIcon active={settings.twoFactorAuth}>
                      {settings.twoFactorAuth ? <FaCheck /> : <FaExclamationTriangle />}
                    </StatusIcon>
                    <StatusText>
                      {settings.twoFactorAuth ? 'Đã bật' : 'Chưa bật'}
                    </StatusText>
                  </SecurityStatus>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('twoFactorAuth')}>
                    <ToggleIcon active={settings.twoFactorAuth}>
                      {settings.twoFactorAuth ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Cảnh báo đăng nhập</SettingName>
                  <SettingDescription>
                    Nhận thông báo khi có ai đó đăng nhập vào tài khoản của bạn từ một thiết bị hoặc vị trí mới.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('loginAlerts')}>
                    <ToggleIcon active={settings.loginAlerts}>
                      {settings.loginAlerts ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Chặn đăng nhập không xác định</SettingName>
                  <SettingDescription>
                    Tự động chặn các nỗ lực đăng nhập từ thiết bị hoặc vị trí không xác định.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('unrecognizedLoginBlock')}>
                    <ToggleIcon active={settings.unrecognizedLoginBlock}>
                      {settings.unrecognizedLoginBlock ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Ghi nhớ thiết bị</SettingName>
                  <SettingDescription>
                    Cho phép thiết bị đáng tin cậy đăng nhập mà không cần xác thực bổ sung.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('rememberDevices')}>
                    <ToggleIcon active={settings.rememberDevices}>
                      {settings.rememberDevices ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
            </SettingsList>
          </SettingsSection>
        );
      case 'devices':
        return (
          <SettingsSection>
            <SectionTitle>Thiết bị đã đăng nhập</SectionTitle>
            <SectionDescription>
              Xem và quản lý các thiết bị đã đăng nhập vào tài khoản của bạn.
            </SectionDescription>
            
            <DevicesList>
              {devices.map(device => (
                <DeviceItem key={device.id} isCurrent={device.isCurrent}>
                  <DeviceIcon>
                    {device.type === 'desktop' ? <FaDesktop /> : <FaMobileAlt />}
                  </DeviceIcon>
                  <DeviceInfo>
                    <DeviceName>{device.name}</DeviceName>
                    <DeviceDetails>
                      {device.location} • IP: {device.ip} • {device.lastActive}
                      {device.isCurrent && ' (Thiết bị hiện tại)'}
                    </DeviceDetails>
                  </DeviceInfo>
                  <DeviceActions>
                    {!device.isCurrent && (
                      <SecurityButton>
                        Đăng xuất
                      </SecurityButton>
                    )}
                  </DeviceActions>
                </DeviceItem>
              ))}
            </DevicesList>
            
            <SecurityTip>
              <TipIcon>
                <FaInfoCircle />
              </TipIcon>
              <TipContent>
                Nếu bạn không nhận ra một thiết bị nào đó, hãy đăng xuất khỏi thiết bị đó và thay đổi mật khẩu của bạn ngay lập tức.
              </TipContent>
            </SecurityTip>
          </SettingsSection>
        );
      case 'activity':
        return (
          <SettingsSection>
            <SectionTitle>Hoạt động đăng nhập</SectionTitle>
            <SectionDescription>
              Xem lịch sử đăng nhập gần đây và các hoạt động liên quan đến tài khoản của bạn.
            </SectionDescription>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Lịch sử đăng nhập</SettingName>
                  <SettingDescription>
                    Xem danh sách các lần đăng nhập gần đây vào tài khoản của bạn, bao gồm thời gian, vị trí và thiết bị.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SecurityButton>
                    Xem lịch sử <FaChevronRight />
                  </SecurityButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Hoạt động tài khoản</SettingName>
                  <SettingDescription>
                    Xem các thay đổi gần đây đối với tài khoản của bạn, như thay đổi mật khẩu, cập nhật email, v.v.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SecurityButton>
                    Xem hoạt động <FaChevronRight />
                  </SecurityButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Thông báo bảo mật</SettingName>
                  <SettingDescription>
                    Xem các thông báo bảo mật gần đây về tài khoản của bạn.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SecurityButton>
                    Xem thông báo <FaChevronRight />
                  </SecurityButton>
                </SettingControl>
              </SettingItem>
            </SettingsList>
          </SettingsSection>
        );
      case 'advanced':
        return (
          <SettingsSection>
            <SectionTitle>Bảo mật nâng cao</SectionTitle>
            <SectionDescription>
              Cài đặt bảo mật nâng cao để bảo vệ tài khoản của bạn tốt hơn.
            </SectionDescription>
            
            <SettingsList>
              <SettingItem>
                <SettingInfo>
                  <SettingName>Mật khẩu ứng dụng</SettingName>
                  <SettingDescription>
                    Tạo mật khẩu riêng cho các ứng dụng bên thứ ba để truy cập vào tài khoản của bạn mà không cần chia sẻ mật khẩu chính.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('appPasswords')}>
                    <ToggleIcon active={settings.appPasswords}>
                      {settings.appPasswords ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Mã khôi phục</SettingName>
                  <SettingDescription>
                    Tạo mã khôi phục để truy cập vào tài khoản của bạn nếu bạn không thể sử dụng phương thức xác thực thông thường.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SecurityButton>
                    Tạo mã <FaChevronRight />
                  </SecurityButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Mã hóa dữ liệu</SettingName>
                  <SettingDescription>
                    Bật mã hóa đầu cuối cho dữ liệu nhạy cảm của bạn.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('dataEncryption')}>
                    <ToggleIcon active={settings.dataEncryption}>
                      {settings.dataEncryption ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Tự động đặt lại mật khẩu</SettingName>
                  <SettingDescription>
                    Tự động nhắc nhở bạn đặt lại mật khẩu sau một khoảng thời gian nhất định.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <ToggleButton onClick={() => handleToggle('passwordAutoReset')}>
                    <ToggleIcon active={settings.passwordAutoReset}>
                      {settings.passwordAutoReset ? <FaToggleOn /> : <FaToggleOff />}
                    </ToggleIcon>
                  </ToggleButton>
                </SettingControl>
              </SettingItem>
              
              <SettingItem>
                <SettingInfo>
                  <SettingName>Xóa tài khoản</SettingName>
                  <SettingDescription>
                    Xóa vĩnh viễn tài khoản của bạn và tất cả dữ liệu liên quan.
                  </SettingDescription>
                </SettingInfo>
                <SettingControl>
                  <SecurityButton warning>
                    Xóa tài khoản
                  </SecurityButton>
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
    <SecurityContainer>
      <SecurityHeader>
        <SecurityTitle>Cài đặt bảo mật</SecurityTitle>
        <SecurityDescription>
          Quản lý cài đặt bảo mật để bảo vệ tài khoản của bạn.
        </SecurityDescription>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm cài đặt bảo mật..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </SecurityHeader>
      
      <SecurityContent>
        <SecurityLeftSidebar>
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
        </SecurityLeftSidebar>
        
        <SecurityMainContent>
          {renderSettingsContent()}
        </SecurityMainContent>
      </SecurityContent>
    </SecurityContainer>
  );
};

export default SecuritySettings; 