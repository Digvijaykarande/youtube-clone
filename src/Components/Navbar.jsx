import React, { useState } from 'react';
import "../Stylesheets/Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ toggleSidebar }) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== '') {
      navigate(`/searchpage/${searchInput.trim()}`);
      setSearchInput('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navdiv1">
        <img
          src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000"
          alt="menu"
          className="menubtn"
          onClick={toggleSidebar}
        />
        <Link to="/">
          <span className="logospan">
            <img
              src="https://img.icons8.com/?size=60&id=19318&format=png&color=000000"
              alt="logo"
              className="logo"
            />
            <h2 className='navh2'>MyTube</h2>
          </span>
        </Link>
      </div>

      <form className="searchform" onSubmit={handleSubmit}>
        <input
          type="search"
          className="searchinput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search videos..."
        />
        <button type="submit" className="searchbtn">
          <img
            src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
            className="searchimg"
            alt="search"
          />
        </button>
      </form>

      <div className="navdiv2">
        <img
          src="https://img.icons8.com/?size=100&id=ZW2vgTIQ1bkh&format=png&color=000000"
          alt="notification"
          className="notification"
        />
        <img
          src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000"
          alt="profile"
          className="profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
