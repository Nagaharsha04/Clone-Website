import React from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
export default function Board() {
  const U=styled.header`
  .parent{
    display:grid;
    grid-template-rows:70% 70%;
    grid-template-columns:30% 20% 30% 30%;
    margin-left:13%;
    margin-right:13%;
    padding-bottom:11%;
  }
  h2{
    color:red;
  }
  .child1{
    grid-row:1/2;
    grid-column:1/2;
  }
  .child2{
    grid-row:1/2;
    grid-column:2/3;
  }
  .child3{
    grid-row:1/2;
    grid-column:3/4;
  }
  .child4{
    grid-row:1/2;
    grid-column:4/5;
  }
  .child5{
    grid-row:2/3;
    grid-column:1/2;
  }
  u {
    text-decoration-color: orange;
    text-underline-offset: 50px;
  }
  .parent u {
    text-decoration-color: skyblue;
    text-underline-offset: 10px;
  }
  img{
    height:15%;
    width:15%;
  }
  .image img{
    max-height:30%;
    width:25%;
  }
  img:hover{
    background-color:blue;
    cursor:pointer;
  }
 `
  return (
    <div>
      <Header/>
      <U>
     <center> <h2><u>Board Members</u></h2></center><br/><br/>
     <div className='parent'>
      <div className='child1'>
          <h2>Dr. Adetokunbo O. Tejuoso</h2><br/>
          <h2><u>CEO/President</u></h2>
          <a href="mailto:someone@yoursite.com"><img src='https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX8997743.jpg' alt='env'/></a>
      </div>
      <div className='child2'>
          <h2>Moses Tejuoso</h2><br/>
          <h2><u>Board Member</u></h2>
          <div className='image'>
          <a href="mailto:someone@yoursite.com"><img src='https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX8997743.jpg' alt='env'/></a>
          </div>
      </div>
      <div className='child3'>
          <h2>Dr. Adebayo A. Ogunsanya</h2><br/>
          <h2><u>Board Member</u></h2>
          <a href="mailto:someone@yoursite.com"><img src='https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX8997743.jpg' alt='env'/></a>
      </div>
      <div className='child4'>
          <h2>Dr. Omowunmi Braithwaite</h2><br/>
          <h2><u>Board Member</u></h2>
          <a href="mailto:someone@yoursite.com"><img src='https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX8997743.jpg' alt='env'/></a>
      </div>
      <div className='child5'>
          <h2>Olajumoke Okunnu Esquire</h2><br/>
          <h2><u>Board Member</u></h2>
          <a href="mailto:someone@yoursite.com"><img src='https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX8997743.jpg' alt='env'/></a>
      </div>
     </div>
     </U>
    </div>
  )
}
