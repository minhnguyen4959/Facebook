import styled from 'styled-components';

export const SecurityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const SecurityHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const SecurityTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const SecurityDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SecurityContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SecurityLeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const CategoryList = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  border-left: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const CategoryIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => active ? `${theme.colors.primary}20` : theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  
  svg {
    font-size: 18px;
  }
`;

export const CategoryText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SecurityMainContent = styled.div`
  flex: 1;
`;

export const SettingsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const SectionDescription = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
`;

export const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SettingInfo = styled.div`
  flex: 1;
  padding-right: 24px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const SettingName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SettingDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const SettingControl = styled.div`
  min-width: 180px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ToggleIcon = styled.div`
  font-size: 36px;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  
  svg {
    display: block;
  }
`;

export const SecurityAlert = styled.div`
  display: flex;
  background-color: ${({ theme }) => `${theme.colors.warning}15`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 16px;
  margin-bottom: 24px;
`;

export const AlertIcon = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 24px;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const AlertContent = styled.div`
  flex: 1;
`;

export const AlertTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const AlertDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
`;

export const SecurityButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ warning, theme }) => warning ? theme.colors.error : theme.colors.input.background};
  color: ${({ warning, theme }) => warning ? 'white' : theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ warning, theme }) => warning ? `${theme.colors.error}D0` : theme.colors.hover.background};
  }
  
  svg {
    font-size: 12px;
  }
`;

export const SecurityTip = styled.div`
  display: flex;
  background-color: ${({ theme }) => `${theme.colors.primary}10`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 16px;
  margin-top: 24px;
`;

export const TipIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const TipContent = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
`;

export const SecurityStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ active, theme }) => active ? `${theme.colors.success}15` : `${theme.colors.warning}15`};
  margin-top: 8px;
`;

export const StatusIcon = styled.div`
  color: ${({ active, theme }) => active ? theme.colors.success : theme.colors.warning};
  font-size: 14px;
`;

export const StatusText = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const DevicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DeviceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ isCurrent, theme }) => isCurrent ? `${theme.colors.primary}10` : theme.colors.background};
  border: 1px solid ${({ isCurrent, theme }) => isCurrent ? theme.colors.primary : theme.colors.divider};
`;

export const DeviceIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 24px;
  }
`;

export const DeviceInfo = styled.div`
  flex: 1;
`;

export const DeviceName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const DeviceDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const DeviceActions = styled.div`
  margin-left: 16px;
`;

export const PasswordStrength = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const StrengthBar = styled.div`
  width: 100px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ strength, theme }) => {
    switch (strength) {
      case 'weak':
        return theme.colors.error;
      case 'medium':
        return theme.colors.warning;
      case 'strong':
        return theme.colors.success;
      default:
        return theme.colors.divider;
    }
  }};
`;

export const StrengthText = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ strength, theme }) => {
    switch (strength) {
      case 'weak':
        return theme.colors.error;
      case 'medium':
        return theme.colors.warning;
      case 'strong':
        return theme.colors.success;
      default:
        return theme.colors.text.secondary;
    }
  }};
`; 