import React from 'react';
import '../css/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='FooterSectionOne'>
          <div className='row FooterOneRow'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='FooterLogo'>
                Dost<span className='green'>ava</span>
              </div>
              <div className='MobileLinks'>
                <img
                  alt='food'
                  src={require('../assets/Footer/PlayStore.png')}
                  className='PlayStore'
                />
                <img
                  alt='food'
                  src={require('../assets/Footer/AppleStore.png')}
                  className='AppleStore'
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='FooterAbout'>
                    <div className='AboutHeading'>About DostDava</div>
                    <div className='AboutItem'>Read our blog</div>
                    <div className='AboutItem'>Sign up to deliver</div>
                    <div className='AboutItem'>Add your restaurant</div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='GetHelp'>
                    <div className='GetHelpHeading'>Get Help</div>
                    <div className='GetHelpItem'>Read our blog</div>
                    <div className='GetHelpItem'>Sign up to deliver</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='FooterSectionTwo'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='FooterCopyRight'>
                © 2021 DostAva Technologies Inc.
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='row'>
                <div className='col-lg-4 col-md-4'>
                  <div className='FooterSectionLink'>Privacy policy</div>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='FooterSectionLink'>Terms of use</div>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='FooterSectionLink'>Pricing</div>
                </div>
              </div>
              <div className='row'></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
