import React, { useState } from 'react';
import { FaStore, FaSearch, FaMapMarkerAlt, FaHeart, FaRegHeart, FaFilter, FaShoppingBag, FaCar, FaHome, FaLaptop, FaTshirt, FaChair, FaGamepad } from 'react-icons/fa';
import {
  MarketplaceContainer,
  MarketplaceLeftSidebar,
  MarketplaceContent,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  MarketplaceHeader,
  MarketplaceTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FiltersContainer,
  FilterButton,
  FilterIcon,
  FilterText,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductLocation,
  ProductActions,
  ProductAction,
  CategoryGrid,
  CategoryCard,
  CategoryIcon,
  CategoryTitle,
  ProductDetailModal,
  ModalHeader,
  ModalClose,
  ModalContent,
  ModalImageContainer,
  ModalImage,
  ModalInfo,
  ModalTitle,
  ModalPrice,
  ModalLocation,
  ModalDescription,
  ModalSellerInfo,
  SellerAvatar,
  SellerName,
  SellerRating,
  ModalActions,
  ModalButton
} from './styles';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedProducts, setLikedProducts] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'all', name: 'Tất cả', icon: <FaStore /> },
    { id: 'vehicles', name: 'Xe cộ', icon: <FaCar /> },
    { id: 'property', name: 'Bất động sản', icon: <FaHome /> },
    { id: 'electronics', name: 'Điện tử', icon: <FaLaptop /> },
    { id: 'clothing', name: 'Quần áo', icon: <FaTshirt /> },
    { id: 'furniture', name: 'Nội thất', icon: <FaChair /> },
    { id: 'gaming', name: 'Trò chơi', icon: <FaGamepad /> },
    { id: 'other', name: 'Khác', icon: <FaShoppingBag /> }
  ];
  
  // Dữ liệu mẫu cho sản phẩm
  const productsData = [
    {
      id: 1,
      title: 'iPhone 13 Pro Max 256GB',
      price: '22.500.000 ₫',
      location: 'Quận 1, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/1/600/400',
      category: 'electronics',
      description: 'iPhone 13 Pro Max 256GB màu xanh, mới 99%, đầy đủ phụ kiện, bảo hành 11 tháng.',
      seller: {
        name: 'Nguyễn Văn A',
        avatar: 'https://i.pravatar.cc/150?img=3',
        rating: 4.8
      }
    },
    {
      id: 2,
      title: 'Laptop Dell XPS 15 9510',
      price: '35.500.000 ₫',
      location: 'Quận 7, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/2/600/400',
      category: 'electronics',
      description: 'Dell XPS 15 9510 - Core i7 11800H / RAM 16GB / SSD 512GB / NVIDIA GeForce RTX 3050 Ti / Màn hình 15.6" FHD+',
      seller: {
        name: 'Trần Thị B',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 4.5
      }
    },
    {
      id: 3,
      title: 'Honda SH 150i 2022',
      price: '115.000.000 ₫',
      location: 'Quận 3, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/3/600/400',
      category: 'vehicles',
      description: 'Honda SH 150i đời 2022, màu đen, mới đi 3000km, giấy tờ đầy đủ, chính chủ.',
      seller: {
        name: 'Lê Văn C',
        avatar: 'https://i.pravatar.cc/150?img=7',
        rating: 4.9
      }
    },
    {
      id: 4,
      title: 'Căn hộ chung cư 2 phòng ngủ',
      price: '2.800.000.000 ₫',
      location: 'Quận 2, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/4/600/400',
      category: 'property',
      description: 'Căn hộ chung cư 2 phòng ngủ, 2 WC, diện tích 70m², view đẹp, nội thất cơ bản, sổ hồng chính chủ.',
      seller: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=9',
        rating: 4.7
      }
    },
    {
      id: 5,
      title: 'Sofa góc da thật',
      price: '15.500.000 ₫',
      location: 'Quận 10, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/5/600/400',
      category: 'furniture',
      description: 'Sofa góc da thật nhập khẩu từ Ý, màu nâu, kích thước 2.8m x 1.6m, mới 100%.',
      seller: {
        name: 'Hoàng Văn E',
        avatar: 'https://i.pravatar.cc/150?img=11',
        rating: 4.6
      }
    },
    {
      id: 6,
      title: 'PlayStation 5 Digital Edition',
      price: '11.500.000 ₫',
      location: 'Quận 5, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/6/600/400',
      category: 'gaming',
      description: 'PlayStation 5 Digital Edition, mới 100%, bảo hành 12 tháng, tặng kèm 2 tay cầm và 3 game.',
      seller: {
        name: 'Đặng Văn F',
        avatar: 'https://i.pravatar.cc/150?img=13',
        rating: 4.4
      }
    },
    {
      id: 7,
      title: 'Áo khoác da nam',
      price: '1.200.000 ₫',
      location: 'Quận 4, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/7/600/400',
      category: 'clothing',
      description: 'Áo khoác da nam hàng hiệu, màu đen, size L, mới 100%, nhập khẩu từ Hàn Quốc.',
      seller: {
        name: 'Vũ Thị G',
        avatar: 'https://i.pravatar.cc/150?img=15',
        rating: 4.3
      }
    },
    {
      id: 8,
      title: 'Bàn làm việc gỗ tự nhiên',
      price: '3.500.000 ₫',
      location: 'Quận 9, TP. Hồ Chí Minh',
      image: 'https://picsum.photos/id/8/600/400',
      category: 'furniture',
      description: 'Bàn làm việc gỗ tự nhiên, kích thước 120x60x75cm, có ngăn kéo, mới 100%.',
      seller: {
        name: 'Bùi Văn H',
        avatar: 'https://i.pravatar.cc/150?img=17',
        rating: 4.2
      }
    }
  ];
  
  const handleLikeProduct = (id) => {
    setLikedProducts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  
  const closeModal = () => {
    setSelectedProduct(null);
  };
  
  const filteredProducts = productsData.filter(product => {
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !product.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  return (
    <MarketplaceContainer>
      <MarketplaceLeftSidebar>
        <SidebarItem active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
          <SidebarIcon>
            <FaStore />
          </SidebarIcon>
          <SidebarText>Tất cả danh mục</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaShoppingBag />
          </SidebarIcon>
          <SidebarText>Đang bán</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaHeart />
          </SidebarIcon>
          <SidebarText>Đã lưu</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Danh mục</SidebarTitle>
        
        {categories.slice(1).map(category => (
          <SidebarItem 
            key={category.id} 
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            <SidebarIcon>
              {category.icon}
            </SidebarIcon>
            <SidebarText>{category.name}</SidebarText>
          </SidebarItem>
        ))}
      </MarketplaceLeftSidebar>
      
      <MarketplaceContent>
        <MarketplaceHeader>
          <MarketplaceTitle>Marketplace</MarketplaceTitle>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm sản phẩm" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </MarketplaceHeader>
        
        <CategoryGrid>
          {categories.map(category => (
            <CategoryCard 
              key={category.id} 
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              <CategoryIcon>
                {category.icon}
              </CategoryIcon>
              <CategoryTitle>{category.name}</CategoryTitle>
            </CategoryCard>
          ))}
        </CategoryGrid>
        
        <FiltersContainer>
          <FilterButton>
            <FilterIcon>
              <FaFilter />
            </FilterIcon>
            <FilterText>Bộ lọc</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterText>Giá: Thấp đến cao</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterText>Khu vực: TP. Hồ Chí Minh</FilterText>
          </FilterButton>
        </FiltersContainer>
        
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductPrice>{product.price}</ProductPrice>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductLocation>
                <FaMapMarkerAlt />
                {product.location}
              </ProductLocation>
              <ProductActions>
                <ProductAction 
                  active={likedProducts[product.id]} 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeProduct(product.id);
                  }}
                >
                  {likedProducts[product.id] ? <FaHeart /> : <FaRegHeart />}
                </ProductAction>
              </ProductActions>
            </ProductCard>
          ))}
        </ProductGrid>
        
        {selectedProduct && (
          <ProductDetailModal>
            <ModalHeader>
              <ModalClose onClick={closeModal}>×</ModalClose>
            </ModalHeader>
            <ModalContent>
              <ModalImageContainer>
                <ModalImage src={selectedProduct.image} alt={selectedProduct.title} />
              </ModalImageContainer>
              <ModalInfo>
                <ModalTitle>{selectedProduct.title}</ModalTitle>
                <ModalPrice>{selectedProduct.price}</ModalPrice>
                <ModalLocation>
                  <FaMapMarkerAlt />
                  {selectedProduct.location}
                </ModalLocation>
                <ModalDescription>
                  {selectedProduct.description}
                </ModalDescription>
                <ModalSellerInfo>
                  <SellerAvatar src={selectedProduct.seller.avatar} alt={selectedProduct.seller.name} />
                  <div>
                    <SellerName>{selectedProduct.seller.name}</SellerName>
                    <SellerRating>
                      {selectedProduct.seller.rating} ★
                    </SellerRating>
                  </div>
                </ModalSellerInfo>
                <ModalActions>
                  <ModalButton primary>
                    Liên hệ người bán
                  </ModalButton>
                  <ModalButton 
                    active={likedProducts[selectedProduct.id]} 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeProduct(selectedProduct.id);
                    }}
                  >
                    {likedProducts[selectedProduct.id] ? <FaHeart /> : <FaRegHeart />}
                    {likedProducts[selectedProduct.id] ? 'Đã lưu' : 'Lưu'}
                  </ModalButton>
                </ModalActions>
              </ModalInfo>
            </ModalContent>
          </ProductDetailModal>
        )}
      </MarketplaceContent>
    </MarketplaceContainer>
  );
};

export default Marketplace; 