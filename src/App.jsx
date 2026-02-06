import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import PlayVideo from './Components/PlayVideo';
import SearchPage from './Components/SearchPage';
import Sidebar from './Components/Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="app-layout">
        <Sidebar
          oncategoryChange={setSelectedCategory}
          showSidebar={showSidebar}
        />
        <Routes>
          <Route path="//" element={<Homepage category={selectedCategory} />} />
          <Route path="/playvideo/:videoid" element={<PlayVideo />} />
          <Route path="/searchpage/:keyword" element={<SearchPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
