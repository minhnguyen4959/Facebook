import React, { useState } from 'react';
import { FaSearch, FaBriefcase, FaRegBookmark, FaBookmark, FaMapMarkerAlt, FaFilter, FaBuilding, FaRegClock, FaMoneyBillWave, FaEllipsisH, FaShare } from 'react-icons/fa';
import {
  JobsContainer,
  JobsLeftSidebar,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  JobsContent,
  JobsHeader,
  JobsTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FiltersContainer,
  FilterButton,
  FilterItem,
  FilterLabel,
  FilterSelect,
  JobsList,
  JobCard,
  JobCompanyLogo,
  JobInfo,
  JobTitle,
  JobCompany,
  JobLocation,
  JobMeta,
  JobMetaItem,
  JobDescription,
  JobActions,
  JobButton,
  JobDetailContainer,
  JobDetailHeader,
  JobDetailCompanyLogo,
  JobDetailInfo,
  JobDetailTitle,
  JobDetailCompany,
  JobDetailLocation,
  JobDetailMeta,
  JobDetailMetaItem,
  JobDetailActions,
  JobDetailContent,
  JobDetailSection,
  JobDetailSectionTitle,
  JobDetailList,
  JobDetailListItem,
  SimilarJobsContainer,
  SimilarJobsTitle,
  SimilarJobsList,
  SimilarJobCard,
  SimilarJobInfo,
  SimilarJobTitle,
  SimilarJobCompany,
  SimilarJobLocation,
  SimilarJobSalary
} from './styles';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState({});
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    experience: '',
    salary: ''
  });
  
  // Dữ liệu mẫu cho việc làm
  const jobsData = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      logo: 'https://picsum.photos/id/1/100/100',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      salary: '20-30 triệu',
      posted: '2 ngày trước',
      description: 'Chúng tôi đang tìm kiếm một Frontend Developer có kinh nghiệm với React, Redux và TypeScript để tham gia vào đội ngũ phát triển sản phẩm của chúng tôi.',
      requirements: [
        'Có ít nhất 2 năm kinh nghiệm với React',
        'Thành thạo JavaScript/TypeScript',
        'Hiểu biết về Redux, React Router',
        'Có kinh nghiệm với RESTful APIs',
        'Có khả năng làm việc độc lập và theo nhóm'
      ],
      benefits: [
        'Lương cạnh tranh',
        'Bảo hiểm sức khỏe',
        'Thưởng cuối năm',
        'Môi trường làm việc năng động',
        'Cơ hội học tập và phát triển'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Digital Innovations',
      logo: 'https://picsum.photos/id/2/100/100',
      location: 'Hồ Chí Minh',
      type: 'Toàn thời gian',
      salary: '25-35 triệu',
      posted: '3 ngày trước',
      description: 'Chúng tôi cần một Backend Developer có kinh nghiệm với Node.js, Express và MongoDB để phát triển và duy trì các API và dịch vụ backend.',
      requirements: [
        'Có ít nhất 3 năm kinh nghiệm với Node.js',
        'Thành thạo với Express.js và MongoDB',
        'Hiểu biết về RESTful API design',
        'Kinh nghiệm với Docker và Kubernetes là một lợi thế',
        'Có khả năng làm việc trong môi trường Agile'
      ],
      benefits: [
        'Lương cạnh tranh',
        'Bảo hiểm sức khỏe',
        'Thưởng dự án',
        'Làm việc từ xa 2 ngày/tuần',
        'Đào tạo chuyên sâu'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      logo: 'https://picsum.photos/id/3/100/100',
      location: 'Đà Nẵng',
      type: 'Bán thời gian',
      salary: '15-20 triệu',
      posted: '1 tuần trước',
      description: 'Chúng tôi đang tìm kiếm một UI/UX Designer có khả năng sáng tạo để thiết kế giao diện người dùng cho các ứng dụng web và di động.',
      requirements: [
        'Có ít nhất 2 năm kinh nghiệm thiết kế UI/UX',
        'Thành thạo Figma, Adobe XD',
        'Có kiến thức về thiết kế đáp ứng',
        'Hiểu biết về UX research và testing',
        'Có portfolio thể hiện các dự án đã thực hiện'
      ],
      benefits: [
        'Môi trường làm việc sáng tạo',
        'Lịch làm việc linh hoạt',
        'Cơ hội làm việc với các dự án quốc tế',
        'Đào tạo và phát triển kỹ năng',
        'Thưởng theo dự án'
      ]
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Data Insights',
      logo: 'https://picsum.photos/id/4/100/100',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      salary: '18-25 triệu',
      posted: '5 ngày trước',
      description: 'Chúng tôi cần một Data Analyst để phân tích dữ liệu kinh doanh, tạo báo cáo và đưa ra các đề xuất dựa trên dữ liệu.',
      requirements: [
        'Có ít nhất 2 năm kinh nghiệm phân tích dữ liệu',
        'Thành thạo SQL, Excel, và Power BI',
        'Kinh nghiệm với Python hoặc R là một lợi thế',
        'Khả năng trình bày dữ liệu một cách hiệu quả',
        'Tư duy phân tích và giải quyết vấn đề'
      ],
      benefits: [
        'Lương cạnh tranh',
        'Bảo hiểm sức khỏe',
        'Môi trường làm việc chuyên nghiệp',
        'Cơ hội học tập và phát triển',
        'Thưởng theo hiệu suất'
      ]
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'Innovation Labs',
      logo: 'https://picsum.photos/id/5/100/100',
      location: 'Hồ Chí Minh',
      type: 'Toàn thời gian',
      salary: '30-45 triệu',
      posted: '1 ngày trước',
      description: 'Chúng tôi đang tìm kiếm một Product Manager có kinh nghiệm để dẫn dắt quá trình phát triển sản phẩm từ ý tưởng đến ra mắt.',
      requirements: [
        'Có ít nhất 4 năm kinh nghiệm quản lý sản phẩm',
        'Kinh nghiệm làm việc với các đội ngũ phát triển phần mềm',
        'Hiểu biết về quy trình phát triển Agile',
        'Kỹ năng phân tích và ra quyết định tốt',
        'Khả năng giao tiếp và thuyết trình xuất sắc'
      ],
      benefits: [
        'Lương và thưởng hấp dẫn',
        'Bảo hiểm sức khỏe cao cấp',
        'Cơ hội đi công tác nước ngoài',
        'Môi trường làm việc quốc tế',
        'Đào tạo và phát triển liên tục'
      ]
    }
  ];
  
  // Dữ liệu mẫu cho việc làm tương tự
  const similarJobs = [
    {
      id: 101,
      title: 'React Developer',
      company: 'Web Solutions',
      location: 'Hà Nội',
      salary: '18-25 triệu'
    },
    {
      id: 102,
      title: 'Frontend Engineer',
      company: 'Tech Innovators',
      location: 'Hồ Chí Minh',
      salary: '22-32 triệu'
    },
    {
      id: 103,
      title: 'JavaScript Developer',
      company: 'Code Masters',
      location: 'Đà Nẵng',
      salary: '20-28 triệu'
    }
  ];
  
  const handleSaveJob = (id) => {
    setSavedJobs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const getFilteredJobs = () => {
    let filteredJobs = jobsData;
    
    if (searchTerm) {
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filters.jobType) {
      filteredJobs = filteredJobs.filter(job => job.type === filters.jobType);
    }
    
    if (filters.location) {
      filteredJobs = filteredJobs.filter(job => job.location === filters.location);
    }
    
    if (filters.salary) {
      // Đơn giản hóa việc lọc theo lương
      if (filters.salary === 'Dưới 20 triệu') {
        filteredJobs = filteredJobs.filter(job => {
          const min = parseInt(job.salary.split('-')[0]);
          return min < 20;
        });
      } else if (filters.salary === '20-30 triệu') {
        filteredJobs = filteredJobs.filter(job => {
          const min = parseInt(job.salary.split('-')[0]);
          const max = parseInt(job.salary.split('-')[1]);
          return min >= 20 && max <= 30;
        });
      } else if (filters.salary === 'Trên 30 triệu') {
        filteredJobs = filteredJobs.filter(job => {
          const max = parseInt(job.salary.split('-')[1]);
          return max > 30;
        });
      }
    }
    
    return filteredJobs;
  };
  
  return (
    <JobsContainer>
      <JobsLeftSidebar>
        <SidebarItem active>
          <SidebarIcon>
            <FaBriefcase />
          </SidebarIcon>
          <SidebarText>Tất cả việc làm</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegBookmark />
          </SidebarIcon>
          <SidebarText>Việc làm đã lưu</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegClock />
          </SidebarIcon>
          <SidebarText>Đã ứng tuyển</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Ngành nghề</SidebarTitle>
        
        <SidebarItem>
          <SidebarText>Công nghệ thông tin</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Marketing</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Tài chính - Kế toán</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Bán hàng</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Nhân sự</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Địa điểm</SidebarTitle>
        
        <SidebarItem>
          <SidebarText>Hà Nội</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Hồ Chí Minh</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Đà Nẵng</SidebarText>
        </SidebarItem>
      </JobsLeftSidebar>
      
      <JobsContent>
        <JobsHeader>
          <JobsTitle>Việc làm</JobsTitle>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm việc làm" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </JobsHeader>
        
        <FiltersContainer>
          <FilterButton>
            <FaFilter />
            Bộ lọc
          </FilterButton>
          
          <FilterItem>
            <FilterLabel>Loại việc làm</FilterLabel>
            <FilterSelect 
              name="jobType" 
              value={filters.jobType}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              <option value="Toàn thời gian">Toàn thời gian</option>
              <option value="Bán thời gian">Bán thời gian</option>
              <option value="Freelance">Freelance</option>
            </FilterSelect>
          </FilterItem>
          
          <FilterItem>
            <FilterLabel>Địa điểm</FilterLabel>
            <FilterSelect 
              name="location" 
              value={filters.location}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </FilterSelect>
          </FilterItem>
          
          <FilterItem>
            <FilterLabel>Mức lương</FilterLabel>
            <FilterSelect 
              name="salary" 
              value={filters.salary}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              <option value="Dưới 20 triệu">Dưới 20 triệu</option>
              <option value="20-30 triệu">20-30 triệu</option>
              <option value="Trên 30 triệu">Trên 30 triệu</option>
            </FilterSelect>
          </FilterItem>
        </FiltersContainer>
        
        {selectedJob ? (
          <>
            <JobDetailContainer>
              <JobDetailHeader>
                <JobDetailCompanyLogo src={selectedJob.logo} alt={selectedJob.company} />
                <JobDetailInfo>
                  <JobDetailTitle>{selectedJob.title}</JobDetailTitle>
                  <JobDetailCompany>{selectedJob.company}</JobDetailCompany>
                  <JobDetailLocation>
                    <FaMapMarkerAlt /> {selectedJob.location}
                  </JobDetailLocation>
                  <JobDetailMeta>
                    <JobDetailMetaItem>
                      <FaBriefcase /> {selectedJob.type}
                    </JobDetailMetaItem>
                    <JobDetailMetaItem>
                      <FaMoneyBillWave /> {selectedJob.salary}
                    </JobDetailMetaItem>
                    <JobDetailMetaItem>
                      <FaRegClock /> {selectedJob.posted}
                    </JobDetailMetaItem>
                  </JobDetailMeta>
                </JobDetailInfo>
                <JobDetailActions>
                  <JobButton primary>Ứng tuyển ngay</JobButton>
                  <JobButton 
                    onClick={() => handleSaveJob(selectedJob.id)}
                  >
                    {savedJobs[selectedJob.id] ? <FaBookmark /> : <FaRegBookmark />}
                    {savedJobs[selectedJob.id] ? 'Đã lưu' : 'Lưu'}
                  </JobButton>
                  <JobButton>
                    <FaShare />
                    Chia sẻ
                  </JobButton>
                </JobDetailActions>
              </JobDetailHeader>
              
              <JobDetailContent>
                <JobDetailSection>
                  <JobDetailSectionTitle>Mô tả công việc</JobDetailSectionTitle>
                  <p>{selectedJob.description}</p>
                </JobDetailSection>
                
                <JobDetailSection>
                  <JobDetailSectionTitle>Yêu cầu</JobDetailSectionTitle>
                  <JobDetailList>
                    {selectedJob.requirements.map((req, index) => (
                      <JobDetailListItem key={index}>{req}</JobDetailListItem>
                    ))}
                  </JobDetailList>
                </JobDetailSection>
                
                <JobDetailSection>
                  <JobDetailSectionTitle>Quyền lợi</JobDetailSectionTitle>
                  <JobDetailList>
                    {selectedJob.benefits.map((benefit, index) => (
                      <JobDetailListItem key={index}>{benefit}</JobDetailListItem>
                    ))}
                  </JobDetailList>
                </JobDetailSection>
              </JobDetailContent>
            </JobDetailContainer>
            
            <SimilarJobsContainer>
              <SimilarJobsTitle>Việc làm tương tự</SimilarJobsTitle>
              <SimilarJobsList>
                {similarJobs.map(job => (
                  <SimilarJobCard key={job.id} onClick={() => handleJobClick(jobsData.find(j => j.id === job.id) || job)}>
                    <SimilarJobInfo>
                      <SimilarJobTitle>{job.title}</SimilarJobTitle>
                      <SimilarJobCompany>{job.company}</SimilarJobCompany>
                      <SimilarJobLocation>
                        <FaMapMarkerAlt /> {job.location}
                      </SimilarJobLocation>
                      <SimilarJobSalary>
                        <FaMoneyBillWave /> {job.salary}
                      </SimilarJobSalary>
                    </SimilarJobInfo>
                  </SimilarJobCard>
                ))}
              </SimilarJobsList>
            </SimilarJobsContainer>
            
            <JobButton onClick={() => setSelectedJob(null)}>
              Quay lại danh sách việc làm
            </JobButton>
          </>
        ) : (
          <JobsList>
            {getFilteredJobs().map(job => (
              <JobCard key={job.id}>
                <JobCompanyLogo src={job.logo} alt={job.company} />
                <JobInfo>
                  <JobTitle onClick={() => handleJobClick(job)}>{job.title}</JobTitle>
                  <JobCompany>{job.company}</JobCompany>
                  <JobLocation>
                    <FaMapMarkerAlt /> {job.location}
                  </JobLocation>
                  <JobMeta>
                    <JobMetaItem>
                      <FaBriefcase /> {job.type}
                    </JobMetaItem>
                    <JobMetaItem>
                      <FaMoneyBillWave /> {job.salary}
                    </JobMetaItem>
                    <JobMetaItem>
                      <FaRegClock /> {job.posted}
                    </JobMetaItem>
                  </JobMeta>
                  <JobDescription>{job.description}</JobDescription>
                </JobInfo>
                <JobActions>
                  <JobButton primary onClick={() => handleJobClick(job)}>
                    Xem chi tiết
                  </JobButton>
                  <JobButton 
                    onClick={() => handleSaveJob(job.id)}
                  >
                    {savedJobs[job.id] ? <FaBookmark /> : <FaRegBookmark />}
                    {savedJobs[job.id] ? 'Đã lưu' : 'Lưu'}
                  </JobButton>
                </JobActions>
              </JobCard>
            ))}
          </JobsList>
        )}
      </JobsContent>
    </JobsContainer>
  );
};

export default Jobs; 