import React from 'react';

const SocialButtons = () => (
  <div className="social-buttons">
    <div className="social-links">
      <ul className="social-links-list">
        <li>
          <a href="https://github.com/valdezDev" target="_blank" rel="noopener noreferrer" className="github">
            <i className="fab fa-github fa-3x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/valdezdev/" target="_blank" rel="noopener noreferrer" className="linkedin">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SocialButtons;