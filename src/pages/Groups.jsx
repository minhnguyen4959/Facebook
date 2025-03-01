import React from 'react';
import { Button, Card, Icon, InputGroup } from '@blueprintjs/core';
import './Groups.css';

const Groups = () => {
  const yourGroups = [
    {
      id: 1,
      name: 'Web Developers',
      members: '12,500 members',
      image: 'https://placehold.co/600x400/1877F2/FFFFFF/png?text=Web+Developers',
      hasNewActivity: true
    },
    {
      id: 2,
      name: 'UI/UX Design',
      members: '8,700 members',
      image: 'https://placehold.co/600x400/E7A33E/FFFFFF/png?text=UI/UX+Design',
      hasNewActivity: true
    },
    {
      id: 3,
      name: 'Tech News',
      members: '25,000 members',
      image: 'https://placehold.co/600x400/42B72A/FFFFFF/png?text=Tech+News',
      hasNewActivity: false
    }
  ];

  const suggestedGroups = [
    {
      id: 4,
      name: 'JavaScript Developers',
      members: '45,000 members',
      image: 'https://placehold.co/600x400/F7DF1E/000000/png?text=JavaScript',
      description: 'Cộng đồng dành cho các lập trình viên JavaScript'
    },
    {
      id: 5,
      name: 'React Native Community',
      members: '32,000 members',
      image: 'https://placehold.co/600x400/61DAFB/000000/png?text=React+Native',
      description: 'Chia sẻ kinh nghiệm phát triển ứng dụng di động với React Native'
    },
    {
      id: 6,
      name: 'Python Programmers',
      members: '78,000 members',
      image: 'https://placehold.co/600x400/3776AB/FFFFFF/png?text=Python',
      description: 'Cộng đồng lập trình Python lớn nhất Việt Nam'
    }
  ];

  return (
    <div className="groups-page">
      <div className="groups-header">
        <h1>Groups</h1>
        <Button icon="plus" text="Create Group" intent="primary" />
      </div>

      <div className="groups-tabs">
        <Button text="Your Groups" active minimal={true} />
        <Button text="Discover" minimal={true} />
        <Button text="Create" minimal={true} />
      </div>

      <div className="groups-search">
        <InputGroup
          leftIcon="search"
          placeholder="Tìm kiếm nhóm"
          className="groups-search-input"
        />
      </div>

      <div className="groups-section">
        <h2>Nhóm của bạn</h2>
        <div className="groups-grid">
          {yourGroups.map(group => (
            <Card key={group.id} className="group-card">
              <div className="group-image">
                <img src={group.image} alt={group.name} />
              </div>
              <div className="group-info">
                <h3 className="group-name">{group.name}</h3>
                <p className="group-members">{group.members}</p>
                {group.hasNewActivity && (
                  <div className="group-activity">
                    <Icon icon="chat" size={12} />
                    <span>Hoạt động mới</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="groups-section">
        <h2>Nhóm gợi ý cho bạn</h2>
        <div className="suggested-groups">
          {suggestedGroups.map(group => (
            <Card key={group.id} className="suggested-group-card">
              <div className="suggested-group-image">
                <img src={group.image} alt={group.name} />
              </div>
              <div className="suggested-group-info">
                <h3 className="group-name">{group.name}</h3>
                <p className="group-members">{group.members}</p>
                <p className="group-description">{group.description}</p>
                <Button text="Tham gia nhóm" fill={true} intent="primary" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups; 