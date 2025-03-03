import styled from 'styled-components';

export const MarketplaceContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const MarketplaceLeftSidebar = styled.div`
  width: 360px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 280px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
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

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
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
    font-size: 20px;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 8px 16px;
`;

export const SidebarTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 8px 16px;
  margin-top: 8px;
`;

export const MarketplaceContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const MarketplaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const MarketplaceTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const FilterIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const FilterText = styled.div``;

export const CategoryContainer = styled.div`
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const CategoryTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(4, 1fr);
    overflow-x: auto;
    padding-bottom: 8px;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.divider};
      border-radius: 4px;
    }
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.hover.background : theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const CategoryIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    font-size: 24px;
  }
`;

export const CategoryName = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductSaveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.card.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${({ saved, theme }) => saved ? theme.colors.reactions.love : theme.colors.text.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const ProductPrice = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 14px;
`;

export const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 12px 12px 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 44px;
`;

export const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 4px 12px 12px;
`;

export const ProductLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 12px 12px;
  
  svg {
    font-size: 12px;
  }
`;

export const ProductActions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ProductAction = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.card.background};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ active, theme }) => active ? theme.colors.error : theme.colors.text.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
  }
`;

export const ProductDetailModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ModalImageContainer = styled.div`
  flex: 1;
  background-color: #000;
  
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ModalInfo = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  max-height: 50vh;
  
  @media (min-width: 768px) {
    max-height: 90vh;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const ModalPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

export const ModalLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 16px;
  
  svg {
    font-size: 16px;
  }
`;

export const ModalDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  padding-bottom: 16px;
`;

export const ModalSellerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const SellerAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const SellerName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SellerRating = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.warning};
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary, active, theme }) => 
    primary ? 'white' : 
    active ? theme.colors.error : 
    theme.colors.text.primary};
  border: none;
  flex: 1;
  
  svg {
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`; 