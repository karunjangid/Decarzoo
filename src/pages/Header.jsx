import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [marqueeContent, setMarqueeContent] = useState(
    '🔥 Summer Sale: Up to 50% off on selected items! &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; New Arrivals Weekly &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Free Shipping on orders over $75'
  );
  const [editContent, setEditContent] = useState(marqueeContent);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMarqueeTap = () => {
    if (isLoggedIn) return; // disable tap count if logged in
    const newCount = tapCount + 1;
    setTapCount(newCount);
    if (newCount >= 5) {
      setShowLogin(true);
      setTapCount(0);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === 'karunkidukan' && password === 'nahipata') {
      setIsLoggedIn(true);
      setShowLogin(false);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSave = () => {
    setMarqueeContent(editContent);
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* Mini Header with marquee offers */}
      <div className="miniHeader" onClick={handleMarqueeTap}>
        {!isLoggedIn ? (
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6"
            className="marquee"
            dangerouslySetInnerHTML={{ __html: marqueeContent }}
          />
        ) : (
          <textarea
            className="marqueeEdit"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={2}
          />
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="loginModal">
          <div className="loginContent">
            <h2>Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoFocus
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <div className="loginButtons">
                <button type="submit">Login</button>
                <button type="button" onClick={() => setShowLogin(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Save Button */}
      {isLoggedIn && (
        <div className="saveButtonContainer">
          <button className="saveButton" onClick={handleSave}>
            Save
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="mainHeader">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span>Decorza</span>
        </div>

        {/* Desktop Navbar */}
        <nav className="navbar">
          <ul className="navList">
            <li>
              <span className="navLink" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                Home
              </span>
            </li>
            <li>
              <span className="navLink" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
                Contact Us
              </span>
            </li>
            <li>
              <span className="navLink" onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
                About Us
              </span>
            </li>
            <li>
              <span className="navLink" onClick={() => navigate('/settings')} style={{ cursor: 'pointer' }}>
                Settings
              </span>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Icon */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') toggleMenu();
          }}
        >
          <div className={menuOpen ? 'bar1Active' : 'bar1'}></div>
          <div className={menuOpen ? 'bar2Active' : 'bar2'}></div>
          <div className={menuOpen ? 'bar3Active' : 'bar3'}></div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div className={`mobileMenu ${menuOpen ? 'mobileMenuOpen' : ''}`}>
          <ul className="mobileNavList">
            <li>
              <span className="mobileNavLink" onClick={() => { navigate('/'); toggleMenu(); }}>
                Home
              </span>
            </li>
            <li>
              <span className="mobileNavLink" onClick={() => { navigate('/catalogue'); toggleMenu(); }}>
                Catalogue
              </span>
            </li>
            <li>
              <span className="mobileNavLink" onClick={() => { navigate('/contact'); toggleMenu(); }}>
                Contact Us
              </span>
            </li>
            <li>
              <span className="mobileNavLink" onClick={() => { navigate('/about'); toggleMenu(); }}>
                About Us
              </span>
            </li>
            <li>
              <span className="mobileNavLink" onClick={() => { navigate('/settings'); toggleMenu(); }}>
                Settings
              </span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
