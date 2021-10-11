import React from "react";
import logo from '../../assets/img/main-logo.png'

const Header = (props) => {
  return (
    <div>
      <header>
        <div className="wrapper">
          <a href="/" className="logo">
            <img src={logo} alt="logo moxaid" />
          </a>

          <nav>
            <ul>
              <li>
                <a href="/tentang-moxa">Fitur</a>
              </li>
              <li>
                <a href="/#testimonial">Faq</a>
              </li>
              <li>
                <a href="/faq">Artikel</a>
              </li>
              <li>
                <a className="download-now" href="/artikel">Download sekarang</a>
              </li>
              <li>
                <a href="/mitra">Mitra</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
