import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaTemperatureHigh, FaWind, FaCloudRain, FaCloud, FaSun, FaSnowflake, FaUmbrella, FaEye } from 'react-icons/fa';
import {
  WeatherContainer,
  WeatherHeader,
  WeatherTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  WeatherContent,
  CurrentWeatherCard,
  WeatherLocation,
  WeatherLocationName,
  WeatherLocationIcon,
  WeatherDateTime,
  WeatherMain,
  WeatherTemp,
  WeatherIcon,
  WeatherDescription,
  WeatherDetails,
  WeatherDetailItem,
  WeatherDetailIcon,
  WeatherDetailText,
  WeatherDetailValue,
  ForecastContainer,
  ForecastTitle,
  ForecastList,
  ForecastItem,
  ForecastDay,
  ForecastIcon,
  ForecastTemp,
  ForecastDescription,
  HourlyForecastContainer,
  HourlyForecastTitle,
  HourlyForecastList,
  HourlyForecastItem,
  HourlyForecastTime,
  HourlyForecastIcon,
  HourlyForecastTemp,
  SavedLocationsContainer,
  SavedLocationsTitle,
  SavedLocationsList,
  SavedLocationItem,
  SavedLocationName,
  SavedLocationTemp,
  SavedLocationIcon,
  SavedLocationButton
} from './styles';

const Weather = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Hà Nội');
  const [savedLocations, setSavedLocations] = useState(['Hồ Chí Minh', 'Đà Nẵng', 'Huế', 'Nha Trang']);
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const date = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    setCurrentDate(date.toLocaleDateString('vi-VN', options));
  }, []);
  
  // Dữ liệu mẫu cho thời tiết hiện tại
  const currentWeather = {
    location: currentLocation,
    temperature: 28,
    feelsLike: 30,
    description: 'Có mây rải rác',
    icon: <FaCloud />,
    humidity: 75,
    windSpeed: 12,
    pressure: 1012,
    visibility: 10,
    precipitation: 20,
    uv: 6
  };
  
  // Dữ liệu mẫu cho dự báo 7 ngày
  const forecast = [
    { day: 'Hôm nay', temp: 28, icon: <FaCloud />, description: 'Có mây rải rác' },
    { day: 'Thứ 2', temp: 30, icon: <FaSun />, description: 'Nắng' },
    { day: 'Thứ 3', temp: 29, icon: <FaCloud />, description: 'Nhiều mây' },
    { day: 'Thứ 4', temp: 27, icon: <FaCloudRain />, description: 'Mưa rào' },
    { day: 'Thứ 5', temp: 26, icon: <FaCloudRain />, description: 'Mưa rào' },
    { day: 'Thứ 6', temp: 28, icon: <FaCloud />, description: 'Nhiều mây' },
    { day: 'Thứ 7', temp: 31, icon: <FaSun />, description: 'Nắng' }
  ];
  
  // Dữ liệu mẫu cho dự báo theo giờ
  const hourlyForecast = [
    { time: 'Bây giờ', temp: 28, icon: <FaCloud /> },
    { time: '13:00', temp: 29, icon: <FaCloud /> },
    { time: '14:00', temp: 30, icon: <FaSun /> },
    { time: '15:00', temp: 30, icon: <FaSun /> },
    { time: '16:00', temp: 29, icon: <FaCloud /> },
    { time: '17:00', temp: 28, icon: <FaCloud /> },
    { time: '18:00', temp: 27, icon: <FaCloud /> },
    { time: '19:00', temp: 26, icon: <FaCloud /> },
    { time: '20:00', temp: 25, icon: <FaCloud /> },
    { time: '21:00', temp: 25, icon: <FaCloud /> },
    { time: '22:00', temp: 24, icon: <FaCloud /> },
    { time: '23:00', temp: 24, icon: <FaCloud /> }
  ];
  
  // Dữ liệu mẫu cho các địa điểm đã lưu
  const savedLocationsData = {
    'Hồ Chí Minh': { temp: 32, icon: <FaSun /> },
    'Đà Nẵng': { temp: 30, icon: <FaCloud /> },
    'Huế': { temp: 29, icon: <FaCloudRain /> },
    'Nha Trang': { temp: 31, icon: <FaSun /> }
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCurrentLocation(searchTerm);
      setSearchTerm('');
    }
  };
  
  const handleSaveLocation = () => {
    if (!savedLocations.includes(currentLocation)) {
      setSavedLocations([...savedLocations, currentLocation]);
    }
  };
  
  const handleRemoveLocation = (location) => {
    setSavedLocations(savedLocations.filter(loc => loc !== location));
  };
  
  const handleLocationClick = (location) => {
    setCurrentLocation(location);
  };
  
  // Hàm để lấy biểu tượng thời tiết dựa trên mô tả
  const getWeatherIcon = (description) => {
    if (description.includes('mưa')) return <FaCloudRain />;
    if (description.includes('nắng')) return <FaSun />;
    if (description.includes('mây')) return <FaCloud />;
    if (description.includes('tuyết')) return <FaSnowflake />;
    return <FaCloud />;
  };
  
  return (
    <WeatherContainer>
      <WeatherHeader>
        <WeatherTitle>Thời tiết</WeatherTitle>
        <form onSubmit={handleSearch}>
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm địa điểm" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </form>
      </WeatherHeader>
      
      <WeatherContent>
        <div>
          <CurrentWeatherCard>
            <WeatherLocation>
              <WeatherLocationName>{currentWeather.location}</WeatherLocationName>
              <WeatherLocationIcon onClick={handleSaveLocation}>
                <FaMapMarkerAlt />
              </WeatherLocationIcon>
            </WeatherLocation>
            
            <WeatherDateTime>{currentDate}</WeatherDateTime>
            
            <WeatherMain>
              <WeatherTemp>{currentWeather.temperature}°C</WeatherTemp>
              <WeatherIcon>{currentWeather.icon}</WeatherIcon>
            </WeatherMain>
            
            <WeatherDescription>{currentWeather.description}</WeatherDescription>
            
            <WeatherDetails>
              <WeatherDetailItem>
                <WeatherDetailIcon>
                  <FaTemperatureHigh />
                </WeatherDetailIcon>
                <WeatherDetailText>Cảm giác như</WeatherDetailText>
                <WeatherDetailValue>{currentWeather.feelsLike}°C</WeatherDetailValue>
              </WeatherDetailItem>
              
              <WeatherDetailItem>
                <WeatherDetailIcon>
                  <FaWind />
                </WeatherDetailIcon>
                <WeatherDetailText>Gió</WeatherDetailText>
                <WeatherDetailValue>{currentWeather.windSpeed} km/h</WeatherDetailValue>
              </WeatherDetailItem>
              
              <WeatherDetailItem>
                <WeatherDetailIcon>
                  <FaCloudRain />
                </WeatherDetailIcon>
                <WeatherDetailText>Độ ẩm</WeatherDetailText>
                <WeatherDetailValue>{currentWeather.humidity}%</WeatherDetailValue>
              </WeatherDetailItem>
              
              <WeatherDetailItem>
                <WeatherDetailIcon>
                  <FaUmbrella />
                </WeatherDetailIcon>
                <WeatherDetailText>Lượng mưa</WeatherDetailText>
                <WeatherDetailValue>{currentWeather.precipitation}%</WeatherDetailValue>
              </WeatherDetailItem>
              
              <WeatherDetailItem>
                <WeatherDetailIcon>
                  <FaEye />
                </WeatherDetailIcon>
                <WeatherDetailText>Tầm nhìn</WeatherDetailText>
                <WeatherDetailValue>{currentWeather.visibility} km</WeatherDetailValue>
              </WeatherDetailItem>
            </WeatherDetails>
          </CurrentWeatherCard>
          
          <HourlyForecastContainer>
            <HourlyForecastTitle>Dự báo theo giờ</HourlyForecastTitle>
            <HourlyForecastList>
              {hourlyForecast.map((hour, index) => (
                <HourlyForecastItem key={index}>
                  <HourlyForecastTime>{hour.time}</HourlyForecastTime>
                  <HourlyForecastIcon>{hour.icon}</HourlyForecastIcon>
                  <HourlyForecastTemp>{hour.temp}°</HourlyForecastTemp>
                </HourlyForecastItem>
              ))}
            </HourlyForecastList>
          </HourlyForecastContainer>
          
          <ForecastContainer>
            <ForecastTitle>Dự báo 7 ngày</ForecastTitle>
            <ForecastList>
              {forecast.map((day, index) => (
                <ForecastItem key={index}>
                  <ForecastDay>{day.day}</ForecastDay>
                  <ForecastIcon>{day.icon}</ForecastIcon>
                  <ForecastTemp>{day.temp}°</ForecastTemp>
                  <ForecastDescription>{day.description}</ForecastDescription>
                </ForecastItem>
              ))}
            </ForecastList>
          </ForecastContainer>
        </div>
        
        <SavedLocationsContainer>
          <SavedLocationsTitle>Địa điểm đã lưu</SavedLocationsTitle>
          <SavedLocationsList>
            {savedLocations.map((location, index) => (
              <SavedLocationItem key={index} onClick={() => handleLocationClick(location)}>
                <div>
                  <SavedLocationName>{location}</SavedLocationName>
                  <SavedLocationTemp>
                    {savedLocationsData[location]?.temp || 28}°C
                  </SavedLocationTemp>
                </div>
                <SavedLocationIcon>
                  {savedLocationsData[location]?.icon || <FaCloud />}
                </SavedLocationIcon>
                <SavedLocationButton onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveLocation(location);
                }}>
                  ×
                </SavedLocationButton>
              </SavedLocationItem>
            ))}
          </SavedLocationsList>
        </SavedLocationsContainer>
      </WeatherContent>
    </WeatherContainer>
  );
};

export default Weather; 