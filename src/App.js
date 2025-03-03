import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Layout from './components/Layout';
import Newsfeed from './pages/Newsfeed';
import Friends from './pages/Friends';
import Watch from './pages/Watch';
import Marketplace from './pages/Marketplace';
import Groups from './pages/Groups';
import Gaming from './pages/Gaming';
import Events from './pages/Events';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Explore from './pages/Explore';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Newsfeed />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/events" element={<Events />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 