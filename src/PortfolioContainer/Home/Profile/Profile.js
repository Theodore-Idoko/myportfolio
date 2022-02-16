import React from 'react';
import Typical from 'react-typical';
import "./Profile.css"

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.facebook.com/'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fa fa-youtube'></i>
              </a>
              <a href='https://twitter.com/home?lang=en'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {' '}
              Hello, I'm <span className='highlighted-text'> Tochukwu</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'FrontEnd Dev',
                    1000,
                    'MERN Stack Dev',
                    1000,
                    'Cross Platform Dev',
                    1000,
                    'React Dev',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role.tagline'>
                Enthusiastic on building applications with frontend operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'> Hire Me </button>
            <a href='TcCV.pdf' download='TcPortfolio TcCV.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
