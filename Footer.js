import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    const Z=styled.footer`
    .parent{
        display:grid;
        grid-template-columns:10% 20% 20% 50%;
        grid-template-rows:80% 30%;
        padding-left:3%;
        padding-bottom:2%;
        padding-top:2%;
        background-color:rgb(53, 57, 60);
    }
    a{
        color:#FEB611;
        text-decoration:none;
    }
    ul li{
        color:#FEB611;
        list-style-type:square;
    }
    h2{
        color:#FEB611;
    }
    h3,h4{
        color:white;
    }
    .child{
        grid-column:1/2;
        grid-row:1/2;
    }
    .child1{
        grid-column:2/3;
        grid-row:1/2;
    } .child2{
        grid-column:3/4;
        grid-row:1/2;
    }
    .child3{
        grid-column:4/5;
        grid-row:1/2;
        padding-bottom:6%;
    }
    .child4{
        grid-column:2/4;
        grid-row:2/3;
        padding-top:6%;
        color:white;

    }
    .child5{
        grid-column:4/5;
        grid-row:2/3;
        padding-top:4%;
        margin-left:50%;
    }
    a:hover{
        color:red;
        text-decoration:underline;
    }
    .child5 a:hover{
        opacity:0.5;
    }
    `
  return (
    <div>
        <Z>
        <div className='parent'>
            <div className='child'></div>
            <div className='child1'>
                <h2>Our Mission</h2>
                <h3>Feed Africa Foundation, Inc. is a<br/>501(c)(3) charitable organization<br/> whose mission is to alleviate poverty <br/>and hunger in the continent of Africa.<br/> We work to feed, empower, cloth, and<br/> provide basic amenities such as food,<br/> water, electricity, housing, and<br/> healthcare to the poorest of Africa.</h3>
            </div>
            <div className='child2'>
                <h2>Important Links</h2>
                <nav>
            <div className='navsamp'>
            <ul>
                <li><NavLink to="/" className="Navlist">Home</NavLink></li>
                <li><NavLink to="/about" className="Navlist">About Us</NavLink></li>
                <li><NavLink to="/board" className="Navlist">Board Members</NavLink></li>
                <li><NavLink to="/gallery" className="Navlist">Gallery</NavLink></li>
                <li><NavLink to="/program" className="Navlist">Programs</NavLink></li>
                <li><NavLink to="/contact" className="Navlist">Contact Us</NavLink></li>
                <li><NavLink to="/primary" className="Navlist">Primary Healthcare Center</NavLink></li>
            </ul>
            </div>
            </nav>
            </div>
            <div className='child3'>
                <h2>Contact Us</h2>
                <h3>Email:</h3>
                <a href="admin@feedafricafoundation.org">admin@feedafricafoundation.org</a>
                <h3>Phone:</h3>
                <h4>708-283-9387</h4>
            </div>
            <div className='child4'>
            © 2016 Feed Africa Foundation Inc. Website created by <a href='https://brytebridge.com/'>CharityNet USA.</a>
            </div>
            <div className='child5'>
            <a href='https://www.facebook.com/feedafricafoundation.org'><FontAwesomeIcon icon={faFacebook} size="1x"  color="grey"/></a>&nbsp;&nbsp;&nbsp;
            <a href='https://twitter.com/feedafrica1'><FontAwesomeIcon icon={faTwitter} size="1x" color="grey"/></a>&nbsp;&nbsp;&nbsp;
            <a href='https://www.youtube.com/channel/UC8Xkz3j6HzN9Wv2t9Cl3Giw'><FontAwesomeIcon icon={faYoutube} size="1x" color="grey" /></a>&nbsp;&nbsp;&nbsp;
            <a href='https://www.instagram.com/feed_africafoundation/'><FontAwesomeIcon icon={faInstagram} size="1x" color="grey"/></a>
            </div>
        </div>
        </Z>
    </div>
  )
}
