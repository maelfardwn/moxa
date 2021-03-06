import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import FbLogo from '../../assets/img/FacebookImg.png'
import TwitterImg from '../../assets/img/TwitterImg.png'
import LinkedinImg from '../../assets/img/LinkedinImg.png'
import YoutubeImg from '../../assets/img/YoutubeImg.png'
import mainLogo from "../../assets/img/main-logo.png";
import logo from "../../assets/img/logo-moxaid.png";
import logo2 from "../../assets/img/logo-footer.png";
import vector from '../../assets/img/Vector.png'
import ReactGA from "react-ga";
ReactGA.initialize("UA-175679937-1");

const Layout = (props) => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { width } = useWindowDimensions();
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      const distanceFromTop = window.scrollY;

      if (distanceFromTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleMenuClick = () => {
    setShow(false);
  };

  useEffect(() => {
    // console.log(location);
  }, []);

  const handleGoogleButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked Footer Google Play Store",
    });
  };

  const handleAppStoreButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked Footer IOS App Store",
    });
  };

  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.descriptions} />
        <meta name="keywords" content={props.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.descriptions} />
        <meta property="og:image" content={props.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.url} />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.descriptions} />
        <meta property="twitter:image" content={props.image} />
      </Helmet>

      <div id="layout">
        <header className={`${scrolled ? "scrolled shadow-sm" : ""}`}>
          <div className="wrapper">
            <div className="main-logo">
              <a href="/" className="logo">
                <img src={mainLogo} alt="logo moxaid" />
              </a>
            </div>

            <div className={`burger-menu`} onClick={handleBurgerClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <nav className={show ? `open` : null}>
              <ul className={`${location.pathname === "/faq" ? "on-orange" : null}`}>
                <li className="is-nested">
                  <a href="/tentang" style={{paddingRight:'5px'}}>Fitur</a> <img width="15px" src={vector}/>

                  <ul className="nested-ul shadow">
                    <li className="nested-menu">
                      <a href="/tentang#tg-partners" onClick={handleMenuClick}>
                        Partner Kami
                      </a>
                    </li>
                    <li className="nested-menu">
                      <a href="/tentang#fitur-produk" onClick={handleMenuClick}>
                        Fitur Produk
                      </a>
                    </li>
                    <li className="nested-menu">
                      <a href="/tentang#trivia-banner" onClick={handleMenuClick}>
                        Kuis Trivia
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#testimonial" style={{paddingRight:'5px'}} onClick={handleMenuClick}>
                    Faq
                  </a> 
                  <img  width="15px" src={vector}/>
                </li>
                <li>
                  <a href="/faq" style={{paddingRight:'5px'}}>Artikel</a> <img  width="15px" src={vector}/>
                </li>
                <li className="is-nested">
                <div className="downloadNow">
                  <a className="download-now" style={{color:'white'}} href="/artikel">Download Sekarang</a>
                </div>
                  <ul className="nested-ul shadow w-200">
                    <li className="nested-menu">
                      <a href="/artikel/blog" onClick={handleMenuClick}>
                        Blog
                      </a>
                    </li>
                    <li className="nested-menu">
                      <a href="/artikel/berita" onClick={handleMenuClick}>
                        Berita
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <i className="fa fa-times close-btn" onClick={handleClose}></i>
            </nav>
          </div>
        </header>

        <div id="content">{props.children}</div>

        <footer>
          <div className="wrapper py-5">
            <div className="row">
              <div className="col-lg-8 col-md-6 f-1a">
                <img src={logo2} alt="logo-moxaid" className="logo2" />

               
              </div>

              <div className="col-lg-4 col-md-6 f-1b">
                <ul>
                  <li>
                    <a href="/faq#contact">Tentang Kami</a>
                  </li>
                  <li>
                    <a href="/#product">Hubungi Kami</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>

                <div className="socmed-btn">
                  <a href="http://twitter.com/moxa_financial" target="_blank">
                    <img src={FbLogo}/>
                  </a>
                  <a href="http://twitter.com/moxa_financial" target="_blank">
                    <img src={TwitterImg}/>
                  </a>
                  <a href="http://instagram.com/moxafinancial" target="_blank">
                    <img src={LinkedinImg}/>
                 </a>
                  <a href="http://linkedin.com/company/moxafinancial" target="_blank">
                    <img src={YoutubeImg}/>
                 </a>
                </div>
              </div>

              {width < 575 ? (
                <div className="col-md-4 f-1c">
                  <p>&copy;PT Astra Kreasi Digital. All Rights Reserved.</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="f-2">
            <div className="wrapper">
              {width < 575 ? null : (
                <div className="col-md-4 f-1c">
                  <p>&copy;PT Astra Kreasi Digital. All Rights Reserved.</p>
                </div>
              )}

              <div>
                <a href="/kebijakan-privasi" className="mr-3">
                  Kebijakan Privasi
                </a>{" "}
                |&nbsp;
                <a href="/syarat-dan-ketentuan" className="ml-3">
                  Syarat dan Ketentuan
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
