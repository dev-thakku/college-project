import { useState } from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';

export default function Footer() {
  const [openedSection, setOpenedSection] = useState('');


  const handleFooterOpen = (id) => {
    setOpenedSection((prevId) => (prevId == id ? '' : id));
  };

  return (
    <footer>
      <div className="logo">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <h3 className="logo-text">
          Govt. Polytechnic College,
          <br />
          Perumbavoor
        </h3>
      </div>

      <div className="row">
        <div className="col-3">
          <div
            className={`link-cat ${openedSection == 'dept' ? 'btnActive' : ''}`}
            onClick={() => handleFooterOpen('dept')}
          >
            <span className="footer-toggle"></span>
            <span className="footer-cat">Departments</span>
          </div>
          <ul
            className={`footer-cat-links ${
              openedSection == 'dept' ? 'active' : ''
            }`}
          >
            <li className="footer-link">
              <a href="dept.html?type=0">General Administration</a>
            </li>
            <li className="footer-link">
              <a href="dept.html?type=1">General Department</a>
            </li>
            <li className="footer-link">
              <a href="dept.html?type=2">Computer Engineering</a>
            </li>
            <li className="footer-link">
              <a href="dept.html?type=3">Electronics & Communiction Engg.</a>
            </li>
            <li className="footer-link">
              <a href="dept.html?type=4">Mechanical Engineering</a>
            </li>
            <li className="footer-link">
              <a href="dept.html?type=5">General Workshop</a>
            </li>
            <li className="footer-link">
              <a href="dept.html?type=6">Library</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div
            className={`link-cat ${
              openedSection == 'resource' ? 'btnActive' : ''
            }`}
            onClick={() => handleFooterOpen('resource')}
          >
            <span className="footer-toggle"></span>
            <span className="footer-cat">Resourses</span>
          </div>
          <ul
            className={`footer-cat-links ${
              openedSection == 'resource' ? 'active' : ''
            }`}
          >
            <li className="footer-link">
              <a href="https://gpcperumbavoor.infrastruct.in/" target="_blank">
                Moodle
              </a>
            </li>
            <li className="footer-link">
              <a href="#">Lab Manuals</a>
            </li>
            <li className="footer-link">
              <a href="#">Previous Questions</a>
            </li>
            <li className="footer-link">
              <a href="#">Syllabus</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div
            className={`link-cat ${
              openedSection == 'facility' ? 'btnActive' : ''
            }`}
            onClick={() => handleFooterOpen('facility')}
          >
            <span className="footer-toggle"></span>
            <span className="footer-cat">Facilities</span>
          </div>
          <ul
            className={`footer-cat-links ${
              openedSection == 'facility' ? 'active' : ''
            }`}
          >
            <li className="footer-link">
              <a href="#">Grievance</a>
            </li>
            <li className="footer-link">
              <a href="#">Student Login</a>
            </li>
            <li className="footer-link">
              <a href="#">Parent Login</a>
            </li>
            <li className="footer-link">
              <a href="#">Staff Login</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div
            className={`link-cat ${
              openedSection == 'useful' ? 'btnActive' : ''
            }`}
            onClick={() => handleFooterOpen('useful')}
          >
            <span className="footer-toggle"></span>
            <span className="footer-cat">Useful Links</span>
          </div>
          <ul
            className={`footer-cat-links ${
              openedSection == 'useful' ? 'active' : ''
            }`}
          >
            <li className="footer-link">
              <a href="#">SITTTR</a>
            </li>
            <li className="footer-link">
              <a href="#">Swayam</a>
            </li>
            <li className="footer-link">
              <a href="#">NPTEL</a>
            </li>
            <li className="footer-link">
              <a href="#">DTE Kerala</a>
            </li>
            <li className="footer-link">
              <a href="#">SBTE Kerala</a>
            </li>
            <li className="footer-link">
              <a href="#">National Digital Library</a>
            </li>
          </ul>
        </div>
        <div className="col-3" id="contact">
          <div id="address">
            <span>Our Location</span>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt address-icon"></i>
                <div>
                  Govt. Polytechnic College, Perumbavoor
                  <br />
                  Koovapady P.O, Perumbavoor, Kerala 685501
                  <br />
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/b2yVBtDf6wqcVgnq8"
                    style={{ color: 'var(--clr-orange-500)' }}
                  >
                    Open Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div id="phone-mail">
            <span>Contact Us</span>
            <ul>
              <li>
                <i className="fas fa-phone-alt address-icon"></i>
                <div>
                  <a href="tel:04842649251">0484-2649251</a>
                </div>
              </li>
              <li>
                <i className="far fa-envelope address-icon"></i>
                <div>
                  <a href="mailto:gptcpbvr@gmail.com">gptcpbvr@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright">
        &copy; All Rights Reserved <span data-copy-year>2022</span>
        <br />
        <b>Govt. Polytechnic College, Perumbavoor</b>
      </div>
      <div id="owner">
        <span>
          Designed by
          <a href="https://jemshith.tk">@dev-thakku</a>
        </span>
      </div>
    </footer>
  );
}
