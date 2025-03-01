import React, { useState } from 'react';
import { Card, Button, Icon, InputGroup, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import './Marketplace.css';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tất cả danh mục', icon: 'grid-view' },
    { id: 'vehicles', name: 'Xe cộ', icon: 'car' },
    { id: 'property', name: 'Bất động sản', icon: 'home' },
    { id: 'electronics', name: 'Điện tử', icon: 'mobile-phone' },
    { id: 'furniture', name: 'Đồ nội thất', icon: 'office' },
    { id: 'clothing', name: 'Quần áo', icon: 'shop' },
    { id: 'entertainment', name: 'Giải trí', icon: 'music' },
    { id: 'garden', name: 'Nhà vườn', icon: 'tree' },
    { id: 'sports', name: 'Thể thao', icon: 'fitness' }
  ];
  
  const products = [
    {
      id: 1,
      title: 'iPhone 13 Pro Max 256GB',
      price: '24.500.000 ₫',
      location: 'Quận 1, TP. Hồ Chí Minh',
      image: 'https://placehold.co/600x400/1877F2/FFFFFF/png?text=iPhone+13',
      category: 'electronics'
    },
    {
      id: 2,
      title: 'Xe Honda SH 150i 2022',
      price: '115.000.000 ₫',
      location: 'Quận Cầu Giấy, Hà Nội',
      image: 'https://placehold.co/600x400/E7A33E/FFFFFF/png?text=Honda+SH',
      category: 'vehicles'
    },
    {
      id: 3,
      title: 'Căn hộ 2 phòng ngủ Vinhomes',
      price: '3.200.000.000 ₫',
      location: 'Quận 7, TP. Hồ Chí Minh',
      image: 'https://placehold.co/600x400/42B72A/FFFFFF/png?text=Apartment',
      category: 'property'
    },
    {
      id: 4,
      title: 'Sofa góc da thật nhập khẩu',
      price: '15.900.000 ₫',
      location: 'Quận Hai Bà Trưng, Hà Nội',
      image: 'https://placehold.co/600x400/F5533D/FFFFFF/png?text=Sofa',
      category: 'furniture'
    },
    {
      id: 5,
      title: 'Áo khoác nam hàng hiệu',
      price: '1.200.000 ₫',
      location: 'Quận 3, TP. Hồ Chí Minh',
      image: 'https://placehold.co/600x400/9360F7/FFFFFF/png?text=Jacket',
      category: 'clothing'
    },
    {
      id: 6,
      title: 'PlayStation 5 Digital Edition',
      price: '11.500.000 ₫',
      location: 'Quận Thanh Xuân, Hà Nội',
      image: 'https://placehold.co/600x400/2ABBA7/FFFFFF/png?text=PS5',
      category: 'entertainment'
    },
    {
      id: 7,
      title: 'Máy cắt cỏ điện Bosch',
      price: '2.800.000 ₫',
      location: 'Quận 9, TP. Hồ Chí Minh',
      image: 'https://placehold.co/600x400/F7B928/FFFFFF/png?text=Lawn+Mower',
      category: 'garden'
    },
    {
      id: 8,
      title: 'Xe đạp thể thao Giant',
      price: '18.500.000 ₫',
      location: 'Quận Đống Đa, Hà Nội',
      image: 'https://placehold.co/600x400/F02849/FFFFFF/png?text=Bicycle',
      category: 'sports'
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <div className="marketplace-page">
      <div className="marketplace-header">
        <h1>Marketplace</h1>
        <div className="marketplace-actions">
          <Button icon="plus" text="Tạo bài đăng mới" intent="primary" />
          <InputGroup
            leftIcon="search"
            placeholder="Tìm kiếm trên Marketplace"
            className="marketplace-search"
          />
        </div>
      </div>
      
      <div className="marketplace-container">
        <div className="marketplace-sidebar">
          <div className="marketplace-nav">
            <div className="marketplace-nav-header">
              <h2>Marketplace</h2>
              <Popover
                content={
                  <Menu>
                    <MenuItem icon="map-marker" text="Thay đổi vị trí" />
                    <MenuItem icon="filter" text="Bộ lọc" />
                  </Menu>
                }
                position={Position.BOTTOM_LEFT}
              >
                <Button icon="settings" minimal={true} />
              </Popover>
            </div>
            
            <Button 
              icon="shopping-cart" 
              text="Lướt xem tất cả" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeCategory === 'all'} 
              onClick={() => setActiveCategory('all')}
            />
            
            <Button 
              icon="inbox" 
              text="Tin nhắn mua bán" 
              fill={true} 
              alignText="left" 
              minimal={true}
            />
            
            <Button 
              icon="tag" 
              text="Đang bán" 
              fill={true} 
              alignText="left" 
              minimal={true}
            />
            
            <Button 
              icon="heart" 
              text="Đã lưu" 
              fill={true} 
              alignText="left" 
              minimal={true}
            />
            
            <div className="marketplace-nav-divider"></div>
            
            <div className="marketplace-nav-header">
              <h3>Danh mục</h3>
            </div>
            
            {categories.slice(1).map(category => (
              <Button 
                key={category.id}
                icon={category.icon} 
                text={category.name} 
                fill={true} 
                alignText="left" 
                minimal={true} 
                active={activeCategory === category.id} 
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>
        
        <div className="marketplace-content">
          <Card className="marketplace-section">
            <div className="section-header">
              <h2>{activeCategory === 'all' ? 'Hôm nay có gì mới' : categories.find(c => c.id === activeCategory).name}</h2>
              <div className="marketplace-filters">
                <Button icon="filter" text="Bộ lọc" minimal={true} />
                <Button icon="map-marker" text="TP. Hồ Chí Minh" minimal={true} />
              </div>
            </div>
            
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    <Popover
                      content={
                        <Menu>
                          <MenuItem icon="bookmark" text="Lưu sản phẩm" />
                          <MenuItem icon="eye-off" text="Ẩn sản phẩm" />
                          <MenuItem icon="flag" text="Báo cáo sản phẩm" />
                        </Menu>
                      }
                      position={Position.BOTTOM_LEFT}
                    >
                      <Button icon="more" className="product-more-btn" minimal={true} />
                    </Popover>
                  </div>
                  <div className="product-info">
                    <div className="product-price">{product.price}</div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-location">
                      <Icon icon="map-marker" size={12} />
                      <span>{product.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Marketplace; 