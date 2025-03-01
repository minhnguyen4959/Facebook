import React from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import RightSidebar from './components/layout/RightSidebar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Videos from './pages/Videos'
import Groups from './pages/Groups'
import Marketplace from './pages/Marketplace'
import Gaming from './pages/Gaming'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme.jsx'
import './App.css'
import './styles/theme.css'

function App() {
  const { darkMode } = useTheme();
  
  // Thông tin người dùng hiện tại
  const currentUser = {
    id: 'current-user',
    name: 'Nguyễn Văn A',
    avatar: 'https://i.pravatar.cc/150?img=1',
    coverPhoto: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header currentUser={currentUser} />
      <div className="app-container">
        <Sidebar currentUser={currentUser} />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/profile" element={<Profile currentUser={currentUser} />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}

export default App 