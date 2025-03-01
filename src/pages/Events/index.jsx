import React from 'react';
import { Button, Icon, Tab, Tabs } from '@blueprintjs/core';
import './Events.css';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Web Development Conference',
      date: 'May 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      attendees: 125,
      color: '#4267B2'
    },
    {
      id: 2,
      title: 'Tech Meetup',
      date: 'May 22, 2024',
      time: '6:30 PM - 9:00 PM',
      location: 'Austin, TX',
      attendees: 87,
      color: '#FF5E3A'
    },
    {
      id: 3,
      title: 'UI/UX Workshop',
      date: 'June 5, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Online',
      attendees: 250,
      color: '#FFD700'
    }
  ];
  
  const pastEvents = [
    {
      id: 4,
      title: 'JavaScript Hackathon',
      date: 'April 10, 2024',
      time: '9:00 AM - 9:00 PM',
      location: 'Seattle, WA',
      attendees: 75,
      color: '#8A2BE2'
    },
    {
      id: 5,
      title: 'Mobile App Development Workshop',
      date: 'March 25, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Online',
      attendees: 120,
      color: '#32CD32'
    }
  ];
  
  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Events</h1>
        <div className="events-actions">
          <Button icon="search" minimal title="Search Events" />
          <Button icon="plus" intent="primary" text="Create Event" />
        </div>
      </div>
      
      <Tabs id="events-tabs" className="events-tabs">
        <Tab 
          id="upcoming" 
          title="Upcoming Events" 
          panel={
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-banner" style={{ backgroundColor: event.color }}></div>
                  <div className="event-info">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-details">
                      <div className="event-detail">
                        <Icon icon="calendar" />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <Icon icon="time" />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <Icon icon="map-marker" />
                        <span>{event.location}</span>
                      </div>
                      <div className="event-detail">
                        <Icon icon="people" />
                        <span>{event.attendees} going</span>
                      </div>
                    </div>
                  </div>
                  <div className="event-actions">
                    <Button intent="primary" text="Going" />
                    <Button text="Interested" />
                    <Button icon="more" minimal />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
        <Tab 
          id="past" 
          title="Past Events" 
          panel={
            <div className="events-grid">
              {pastEvents.map(event => (
                <div key={event.id} className="event-card past-event">
                  <div className="event-banner" style={{ backgroundColor: event.color }}></div>
                  <div className="event-info">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-details">
                      <div className="event-detail">
                        <Icon icon="calendar" />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <Icon icon="time" />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <Icon icon="map-marker" />
                        <span>{event.location}</span>
                      </div>
                      <div className="event-detail">
                        <Icon icon="people" />
                        <span>{event.attendees} attended</span>
                      </div>
                    </div>
                  </div>
                  <div className="event-actions">
                    <Button text="View Photos" />
                    <Button icon="more" minimal />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
        <Tab 
          id="create" 
          title="Create" 
          panel={
            <div className="create-event">
              <div className="create-event-placeholder">
                <Icon icon="calendar" size={64} />
                <h2>Create a New Event</h2>
                <p>Plan an event and invite your friends.</p>
                <Button intent="primary" icon="plus" text="Create Event" />
              </div>
            </div>
          } 
        />
      </Tabs>
    </div>
  );
};

export default Events; 