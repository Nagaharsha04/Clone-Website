import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
    const HeadingMain=styled.header`
    .ch{
      position:absolute;
      top:6%;
      left:89%;
      display:flex;
    }
    .cc:hover{
      opacity:0.5;
    }
    .navic{
      min-width:100%;
      min-height:300px;
      background-color:black;
    }
    .navb{
      position:absolute;
      top:10%;
    }
    `;
  return (
    <div>
    <HeadingMain>
      <div className='navic'>
    <div className='ch'>
           <div><a href='https://www.facebook.com/feedafricafoundation.org' className='cc'><FontAwesomeIcon icon={faFacebook} size="1x"  color="grey"/></a></div>&nbsp;&nbsp;&nbsp;
           <div><a href='https://twitter.com/feedafrica1' className='cc'><FontAwesomeIcon icon={faTwitter} size="1x" color="grey"/></a></div>&nbsp;&nbsp;&nbsp; 
           <div><a href='https://www.youtube.com/channel/UC8Xkz3j6HzN9Wv2t9Cl3Giw' className='cc'><FontAwesomeIcon icon={faYoutube} size="1x" color="grey" /></a></div>&nbsp;&nbsp;&nbsp; 
           <div><a href='https://www.instagram.com/feed_africafoundation/' className='cc'><FontAwesomeIcon icon={faInstagram} size="1x" color="grey"/></a></div> 
           </div>
           <div className='navb'>
                <Nav/>
                </div>
      </div>
      </HeadingMain>
    </div>
  )
}
export default Header
