import React from 'react';

const SocialButtons = () => (
  <div className="social-buttons">
    <div className="social-links">
      <ul className="social-links-list">
        <li>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="github">
          <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
          <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" className="reddit">
          <i className="fab fa-reddit fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default SocialButtons;