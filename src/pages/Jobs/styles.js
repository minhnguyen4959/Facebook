import styled from 'styled-components';

export const JobsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const JobsLeftSidebar = styled.div`
  width: 300px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 250px;
  }
  
  @media (max-width: 768px) {
    display: none;
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
  flex: 1;
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
  margin-bottom: 8px;
`;

export const JobsContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const JobsHeader = styled.div`
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

export const JobsTitle = styled.h1`
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

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 150px;
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FilterSelect = styled.select`
  height: 36px;
  padding: 0 8px;
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

export const JobsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const JobCard = styled.div`
  display: flex;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const JobCompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  object-fit: cover;
  margin-right: 16px;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    align-self: center;
    margin-right: 0;
  }
`;

export const JobInfo = styled.div`
  flex: 1;
`;

export const JobTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const JobCompany = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const JobLocation = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
`;

export const JobMetaItem = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const JobDescription = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
  
  @media (max-width: 576px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const JobActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
  min-width: 140px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 0;
    min-width: auto;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const JobButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary }) => primary ? 'white' : 'inherit'};
  border: none;
  
  svg {
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const JobDetailContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 24px;
  overflow: hidden;
`;

export const JobDetailHeader = styled.div`
  display: flex;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const JobDetailCompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  object-fit: cover;
  margin-right: 24px;
  
  @media (max-width: 992px) {
    width: 80px;
    height: 80px;
    align-self: center;
    margin-right: 0;
  }
`;

export const JobDetailInfo = styled.div`
  flex: 1;
`;

export const JobDetailTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const JobDetailCompany = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const JobDetailLocation = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const JobDetailMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const JobDetailMetaItem = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const JobDetailActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 160px;
  
  @media (max-width: 992px) {
    flex-direction: row;
    min-width: auto;
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const JobDetailContent = styled.div`
  padding: 24px;
`;

export const JobDetailSection = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  p {
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const JobDetailSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const JobDetailList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

export const JobDetailListItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SimilarJobsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const SimilarJobsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const SimilarJobsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const SimilarJobCard = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const SimilarJobInfo = styled.div``;

export const SimilarJobTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SimilarJobCompany = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const SimilarJobLocation = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
`;

export const SimilarJobSalary = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
`; 