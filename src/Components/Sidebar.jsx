import React from 'react';
import "../Stylesheets/Sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar({ oncategoryChange, showSidebar }) {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div className='sidebar1'>
        <Link to="/"><span className='sidebar-span'><img src='icons8-home-24.png' alt='home' className='homeimg' />
          <p>Home</p></span></Link>
        <span className='sidebar-span'><img src='icons8-youtube-shorts-50.png' alt='short' className='shortimg' />
          Short</span>
      </div>

      <hr style={{ width: "80%", marginLeft: "5px" }} />

      <h2 style={{ marginLeft: "6px" }}>Explore</h2>
      <div className='sidebar2'>
        <button className="sidebar-btn" onClick={() => oncategoryChange('news')}>News</button>
        <button className="sidebar-btn" onClick={() => oncategoryChange('tech')}>Tech</button>
        <button className="sidebar-btn" onClick={() => oncategoryChange('movies')}>Movies</button>
        <button className="sidebar-btn" onClick={() => oncategoryChange('music')}>Music</button>
        <button className="sidebar-btn" onClick={() => oncategoryChange('coding')}>Coding</button>
        <button className="sidebar-btn" onClick={() => oncategoryChange('comedy')}>Comedy</button>
        <button className="sidebar-btn" onClick={() => oncategoryChange('fashion')}>Fashion</button>
      </div>

      <hr style={{ width: "80%", marginLeft: "5px" }} />

      <div className='sidebar3'>
        <h2 style={{ marginLeft: "6px" }}>You</h2>
        <span className='sidebar-span'><img src='icons8-history-24.png' alt='history' />History</span>
        <span className='sidebar-span'><img src='icons8-playlist-32.png' alt='playlist' />Playlist</span>
        <span className='sidebar-span'><img src='icons8-pocket-watch-30.png' alt='watchlater' />Watch Later</span>
      </div>
    </div>
  );
}

export default Sidebar;
