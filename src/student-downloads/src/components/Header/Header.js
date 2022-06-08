import Logo from '../Logo/Logo';

import './Header.css';

export default function Header() {
  return (
    <header className="header" id="#">
      <div className="header-top">
        <div className="header-left">
          <div className="header-logo">
            {/* <img src="images/logo.png" alt="logo" /> */}
            {/* <img src={Logo} alt="" /> */}
            <Logo />
          </div>
          <div className="header-title">
            <h2>Govt. Polytechnic College</h2>
            <address>
              <span>Perumbavoor, Koovapady P.O</span>
              <br />
              <span>PIN-683 544, Ernakulam Dist., Kerala</span>
            </address>
          </div>
        </div>
        <div className="header-right">
          <p>
            <i className="fas fa-phone-alt"></i> 0484-2649251
          </p>
          <p>
            <i className="far fa-envelope"></i>
            <a href="mailto:gptcpbvr@gmail.com">gptcpbvr@gmail.com</a>
          </p>
        </div>
      </div>
    </header>
  );
}
