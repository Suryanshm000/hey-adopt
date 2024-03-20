import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DD6D40" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,218.7C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <div class="footer-basic my-gradient">
        <footer>
          <div class="social">
            <Link><i class="icon ion-social-instagram"></i></Link>
            <Link><i class="icon ion-social-linkedin"></i></Link>
            <Link><i class="icon ion-social-twitter"></i></Link>
            <Link><i class="icon ion-social-facebook"></i></Link>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item"><Link to="/">Home</Link></li>
            <li class="list-inline-item"><Link>About</Link></li>
            <li class="list-inline-item"><Link>Contact</Link></li>
            <li class="list-inline-item"><Link>Services</Link></li>
            <li class="list-inline-item"><Link>Terms</Link></li>
          </ul>
          <p class="copyright">Hey Adopt © 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;