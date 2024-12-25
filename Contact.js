import React from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  const handleSubmit=()=>{
    alert("Do you want to send")
}
  const V=styled.header`
    .parent{
      display:flex;
      flex-direction:row;
      margin:5%;
      justify-content:space-around;
    }
    h1,h2{
      color:red;
      padding:2%;
    }
    u {
      text-decoration-color: orange;
      text-underline-offset: 40px;
    }
    label{
      color:grey;
      font-weight:bolder;
      font-size:20px;
    }
    a{
      text-decoration:none;
      color:red;
    }
    input{
      height:30px;
      width:500px;
      accent-color:grey;
    }
    .ll input{
      height:150px;
      width:500px;
    }
    button{
      background-color: rgb(226, 35, 35);
      color:white;
      border:none;
      border-radius:5px;
      height:50px;
      width:80px;
      font-size:15px;
  }
  button:hover{
    opacity:0.2;
    cursor:pointer;
  }
  .icon a:hover{
    opacity:0.7;
  }
  `
  return (
    <div>
      <Header/>
      <V>
        <center><h1><u>Get in Touch With Us </u></h1></center>
        <div className='parent'>
      <div className='child1'>
         <u><h2> General Info</h2></u><br/><br/>
         <label>Email:</label><br/>
         <h3><a  href="mailto:someone@yoursite.com"> admin@feedafricafoundation.org</a> </h3>
         <label>Phone: </label><br/>
         <h3> 708-283-9387 </h3>
         <div className='icon'>
            <a href='https://www.facebook.com/feedafricafoundation.org'><FontAwesomeIcon icon={faFacebook} size="3x"  color="skyblue"/></a>&nbsp;&nbsp;&nbsp;
            <a href='https://twitter.com/feedafrica1'><FontAwesomeIcon icon={faTwitter} size="3x" color="skyblue" /></a>&nbsp;&nbsp;&nbsp;
            <a href='https://www.youtube.com/channel/UC8Xkz3j6HzN9Wv2t9Cl3Giw'><FontAwesomeIcon icon={faYoutube} size="3x" color="red" /></a>&nbsp;&nbsp;&nbsp;
            <a href='https://www.instagram.com/feed_africafoundation/'><FontAwesomeIcon icon={faInstagram} size="3x" color="thickpink"/></a>
            </div>
         </div>
         <div className='child2'>
         <u><h2> Contact Us </h2></u><br/><br/>
      <form className="child"> 
          <label>Your Name (required)</label><br/>
          <input type="text"/> <br/><br/>
         <label>Your Email(required)</label><br/>     
         <input type="text"/> <br/><br/>
        <label>Subject</label><br/>
         <input type="text"/> <br/><br/>
         <div className='ll'>
        <label>Your Message</label><br/>
        <input type="text" /><br/><br/>
        </div>
         <button type="submit"  onClick={handleSubmit}>Send</button>
         </form>
         </div>
    </div>
    </V>
    </div>
  )
}
