import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const fadeImages = [
  {
    url: 'https://feedafricafoundation.org/wp-content/gallery/gallery/4.jpg',
    caption:<div className='text'><h1>Feed Africa<br/>Foundation Inc.</h1>
    <h4>We believe no child should go to bed hungry <br/>and that food is essential.</h4>
    </div>
  },
  {
    url: 'https://feedafricafoundation.org/wp-content/gallery/gallery/3.jpg',
    caption:  <div className='txt'><h1>Feed Africa<br/>Foundation Inc.</h1>
    <h4>We believe no  adult should be forced <br/>to a life of crime due to lack of employment,<br/>food,and basic healthcare</h4>
    </div>
  }
];
const Home= () => {
  const Z=styled.footer`
   .text{
      position: absolute;
    top:180px;
    left: 250px;
    color:white;
    }
    .txt{
      position: absolute;
    top:180px;
    right: 50px;
    color:Yellow;
    }
    .parent{
      display:grid;
      grid-template-rows:30% 20% 5%;
      grid-template-columns:40% 51%;
      margin-top:2%;  
    }
    .c1{
      grid-row:1/4;
      grid-column:1/2;
      text-align:center;
      margin-left:30%;
    }
    .c2{
      grid-row:1/2;
      grid-column:2/3;
      text-align:justify;
    }
    .c3{
      grid-row:2/3;
      grid-column:2/3;
      margin-bottom:10%;
    }
    .c4{
      grid-row:3/4;
      grid-column:2/3;
      margin-bottom:20%;
    }
    .text h1{
      font-size:70px;
      font-family: "Patua One",Arial,Tahoma,sans-serif;
      text-shadow:2px 1px 2px black;
    }
    .text h4{
      font-size:40px;
      font-weight:400;
      font-style:italic;
      text-shadow:2px 2px 2px black;
      font-family: "Patua One",Arial,Tahoma,sans-serif;
    }
    .txt h1{
      font-size:70px;
      font-family: "Patua One",Arial,Tahoma,sans-serif;
      text-shadow:2px 1px 2px black;
    }
    .txt h4{
      font-size:40px;
      font-weight:400;
      text-shadow:2px 2px 2px black;
      font-style:italic;
    } 
    .container{
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      flex-wrap:wrap;
      background-color:green;
      font-family: "Patua One",Arial,Tahoma,sans-serif;
    }
    .cards{
      width:20%;
      max-height:100%;
      margin:10px;
      background-color:white;
      margin-top:15%;
      color:purple;
    }
    .Navlist.active{
      color:red;
    }
    .card-image img{
      width:30%;
      max-height:20%;
      border-radius:200%;
      padding:10%;
    }
    .card-body{
      text-align:center;
      max-height:40%;
      padding:5%;
    }
    .content h3{
      position:absolute;
      left: 800px;
      font-size:40px;
      margin-top:5%;
    }
    .card{
      max-width:20%;
      max-height:50%;
      margin:10px;
      background-color:white;
      color:purple;
    }
    .image img{
      width:30%;
      height:20%;
      border-radius:200%;
      padding:10%;
    }
    .body{
      text-align:center;
      height:30%;
      padding:5%;
    }
   .centered nav ul{
      list-style: none;
      margin:0;
      padding:0;
      display: flex;
      justify-content:space-around;
      flex-direction: row;
      flex-wrap:wrap;
    }
    .centered  nav{
      background-color:white;
      overflow:hidden;
      position:fixed;
      top:80px;
      right:5px;
      margin-left:8%;
      margin-right:8%;
    }
    .centered  nav a{
      float:left;
      padding: 30px 40px;
      text-decoration: none;
      font-size: 15px;
      color:black;
      margin-top:15px;
    }
    .centered li:hover{
          cursor: pointer;
          border-top:solid;
          border-color: rgb(226, 35, 35);
         }
         nav a:hover{
          color:rgb(226, 35, 35);
        }
         .centered  img{
          width:160px;
          height:100px;
          margin:10px;
      }
      .centered  button{
          background-color: rgb(226, 35, 35);
          color:white;
          border:none;
          border-radius:5px;
          height:50px;
          width:80px;
          margin-top:-10%;
        }
        .centered  button:hover{
         cursor:pointer;
         opacity:0.7;
      }
      .ch{
        position:relative;
        bottom:1120px;
        left:1500px;
      }
      .ch a:hover{
        opacity:0.5;
    }
  `
  return (
    <div>
      <Z>
      <div className="slide-container">
      <Fade duration={2000}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
            <img style={{ width: '100%' }} src={fadeImage.url} />
            {fadeImage.caption}
            </div>
            <div className='ch'>
            <a href='https://www.facebook.com/feedafricafoundation.org'><FontAwesomeIcon icon={faFacebook} size="1x"  color="grey"/></a>&nbsp;&nbsp;&nbsp;
            <a href='https://twitter.com/feedafrica1'><FontAwesomeIcon icon={faTwitter} size="1x" color="grey"/></a>&nbsp;&nbsp;&nbsp;
            <a href='https://www.youtube.com/channel/UC8Xkz3j6HzN9Wv2t9Cl3Giw'><FontAwesomeIcon icon={faYoutube} size="1x" color="grey" /></a>&nbsp;&nbsp;&nbsp;
            <a href='https://www.instagram.com/feed_africafoundation/'><FontAwesomeIcon icon={faInstagram} size="1x" color="grey"/></a>
            </div>
            <div class="centered">
            
            <nav>
            <ul>
                <img src='https://feedafricafoundation.org/wp-content/uploads/2020/05/logo.png' alt="faf"/>
                <li><NavLink to="/" className="Navlist">Home</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/about" className="Navlist">About Us</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/board" className="Navlist">Board Members</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/gallery" className="Navlist">Gallery</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/program" className="Navlist">Programs</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/contact" className="Navlist">Contact Us</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/primary" className="Navlist">Primary Healthcare Center</NavLink></li>
                <li><NavLink to="/dob" className="Navlist"><button>Donate</button></NavLink></li>
            </ul>
       </nav>
            </div>
          </div>
        ))}
      </Fade>
    </div>
    <div className='parent'>
      <div className='c1'>
        <img src="https://feedafricafoundation.org/wp-content/uploads/2016/11/Fotolia_83417678_Subscription_L.jpg" alt="hand" height={400} width={400}/>
        </div>
        <div className='c2'>
          <h2><b>
            Feed Africa Foundation, Inc. is a 501(c)(3) charitable organization whose mission is to alleviate poverty and hunger in the continent of Africa. We work to feed, empower, cloth, and provide basic amenities such as food, water, electricity, housing, and healthcare to the poorest of Africa.
            </b></h2>
        </div>
          <div className='c3'>
            <img src='https://cdn.greatnonprofits.org//img/2020-top-rated-awards-badge-embed.png?id=996890322' alt='logo'/>
            </div>
            <div className='c4'>
            <a href='https://greatnonprofits.org/org/feed-africa-foundation'>Volunteer. Donate. Review.</a>
          </div>
    </div>
    <div className='content'><h3>We Provide</h3></div>
      <div className='container'>
      <div className='cards'>
              <div className='card-image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX22295307.jpg" alt="sir" /></center>
              </div>
              <div className='card-body'>
              <h3>Immunization and healthcare to <br/>children and adults</h3>
                  </div>
                  </div>
      <div className='cards'>
              <div className='card-image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX45850390.jpg" alt="sir" /></center>
              </div>
              <div className='card-body'>
              <h3>Shelter and food to the homeless <br/>and assist with basic training and<br/> employment, food and basic<br/> healthcare.</h3>
              </div>
          </div>
      <div className='cards'>
              <div className='card-image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX51697852.jpg" alt="sir" /></center>
              </div>
              <div className='card-body'>
              <h3>Basic training like Nursing <br/>Assistants, Phlebotomist, office<br/> Assistant, shipping and receiving. <br/>Medical Assistants, legal<br/> assistants. Sewing, bread making, <br/>food preparing, event planning, <br/>fashion designing, Makeup Artist,<br/> Graphic Design and Pharmacy<br/> Technician</h3>
                  </div>
          </div>
      <div className='cards'>
              <div className='card-image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX46587601.jpg" alt="sir" /></center>
              </div>
              <div className='card-body'>
              <h3>Clothing and footwear, glasses and<br/> assist with referral to dentists and<br/> ophthalmologists and opticians</h3>
                  </div>
          </div>
      <div className='card'>
              <div className='image'>
              <center> <img src="https://cdn4.vectorstock.com/i/1000x1000/35/28/graphic-black-noodle-on-white-background-vector-20433528.jpg" alt="sir" /></center>
              </div>
              <div className='body'>
              <h3>Food Pantries</h3>
                  </div>
          </div>
      <div className='card'>
              <div className='image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX45850390.jpg" alt="sir" /></center>
              </div>
              <div className='body'>
              <h3>Homeless Shelters</h3>
                  </div>
          </div>
          <div className='card'>
              <div className='image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX22844624.jpg" alt="sir" /></center>
              </div>
              <div className='body'>
              <h3>Community Centers</h3>
                  </div>
          </div>
          <div className='card'>
              <div className='image'>
              <center> <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX2363181.jpg" alt="sir" /></center>
              </div>
              <div className='body'>
              <h3>Vaccine Distribution</h3>
                  </div>
          </div>

      </div>
    </Z>
    </div>
  )
}
export default Home;