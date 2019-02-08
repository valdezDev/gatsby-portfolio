import React from 'react';

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">
      Paul's Code Blog
    </h4>
    <p className="text-center">Follow Me!</p>
    <div className="footer-social-links">
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

export default Footer;