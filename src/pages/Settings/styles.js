import styled from 'styled-components';

export const SettingsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SettingsLeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 240px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    position: static;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 15px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const SidebarIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    font-size: 18px;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SettingsContent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  
  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const SettingsHeader = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  padding-bottom: 16px;
`;

export const SettingsTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SettingsSection = styled.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const SettingLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SettingDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SettingControl = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ToggleSwitch = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

export const ToggleSlider = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.input.background};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:before {
    content: '';
    position: absolute;
    left: ${({ active }) => active ? '26px' : '2px'};
    top: 2px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;

export const SelectControl = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioLabel = styled.label`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ primary, danger, theme }) => 
    primary ? theme.colors.primary : 
    danger ? theme.colors.error : 
    theme.colors.input.background};
  color: ${({ primary, danger }) => (primary || danger) ? 'white' : 'inherit'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ primary, danger, theme }) => 
      primary ? theme.colors.hover.primaryButton : 
      danger ? '#e53935' : 
      theme.colors.hover.background};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
  
  @media (max-width: 576px) {
    justify-content: flex-start;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: 8px;
`;

export const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.success || '#4caf50'};
  font-size: 14px;
  margin-top: 8px;
`; 