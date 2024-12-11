import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#fbf4e4' }} className="text-black py-4 mt-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About</h5>
            <p>
              BlogBook is a platform for sharing and discovering amazing content.
              Stay connected and inspired with us.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-black text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="text-black text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-black text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>Angeles University Foundation
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+1 (123) 456-7890
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:info@myblog.com" className="text-black text-decoration-none">
                info@myblog.com
              </a>
            </p>
          </div>
        </div>

        <hr className="text-black" />

        {/* Copyright Section */}
        <div className="text-center">
          <p>&copy; 2024 DayLyBlog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
