import styled from 'styled-components';

export const WeatherContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const WeatherTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 20px;
  padding: 0 12px;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 8px;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 15px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const WeatherContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const CurrentWeatherCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const WeatherLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const WeatherLocationName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const WeatherLocationIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 20px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const WeatherDateTime = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
`;

export const WeatherMain = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WeatherTemp = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-right: 16px;
`;

export const WeatherIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WeatherDescription = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 24px;
`;

export const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

export const WeatherDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const WeatherDetailIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const WeatherDetailText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
`;

export const WeatherDetailValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HourlyForecastContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const HourlyForecastTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const HourlyForecastList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
`;

export const HourlyForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
`;

export const HourlyForecastTime = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 8px;
`;

export const HourlyForecastIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const HourlyForecastTemp = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ForecastContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
`;

export const ForecastTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const ForecastList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ForecastItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr auto auto;
  }
`;

export const ForecastDay = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ForecastIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ForecastTemp = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ForecastDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  @media (max-width: 576px) {
    display: none;
  }
`;

export const SavedLocationsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  height: fit-content;
`;

export const SavedLocationsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const SavedLocationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SavedLocationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  position: relative;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const SavedLocationName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SavedLocationTemp = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SavedLocationIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SavedLocationButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${SavedLocationItem}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
    color: ${({ theme }) => theme.colors.error};
  }
`; 