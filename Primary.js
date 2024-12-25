import React from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
export default function Primary() {
  const L=styled.header`
  .par{
    display:grid;
    margin-left:15%;
    margin-right:20%;
    margin-top:5%;
    margin-bottom:10%;
    grid-template-rows:55% 55%;
    grid-template-columns:70% 60%;
  }
  .lis{
    grid-row:1/3;
    grid-column:1/2;
    font-family: "Patua One",Arial,Tahoma,sans-serif;
  }
  .image1{
    grid-row:1/2;
    grid-column:2/3;
  }
  .image2{
    grid-row:2/3;
    grid-column:2/3;
  }
  h1{
    font-size:40px;
    color:red;
  }
  h2{
    font-size:30px;
    color:red;
    margin-left:25%;
  }
  li{
    font-size:20px;
    color:grey;
  }
  h3{
    font-size:20px;
    font-weight:lighter;
    color:grey;
  }
  `
  return (
    <div>
      <L>
      <Header/>
      <div className="par">
        <div className='lis'>
        <pre><h1>Community Health In Africa</h1></pre>
        <h3>We plan to assist primary care centers in different parts of Africa with a focus on <br/>childhood immunization. </h3>
        <ul>
          <li>Well-Child Clinics</li><br/>
          <li>Prenatal care</li><br/>
          <li>Adult Health</li><br/>
          <li>Malaria, Tuberculosis, HIV prevention</li><br/>
          <li>Child Nutrition</li><br/>
          <li>Preventive care at all levels</li><br/>
          <li>Mammogram assessment</li><br/>
          <li>Pap smear for women</li><br/>
          <li>PSA test for men to detect prostate cancer</li><br/>
          <li>Smoking cessation for all ages</li><br/>
          <li>Drug and Alcohol rehabilitation</li><br/>
          <li>Care of Disabled Children</li>
        </ul>
        <h2>Universal Health For All</h2>
        </div>
        <div className='image1'>
          <img src='https://feedafricafoundation.org/wp-content/uploads/2020/05/AdobeStock_247705953-e1590773296343.jpeg' alt='ss'/></div>
          <div className='image2'>
            <img src='https://feedafricafoundation.org/wp-content/uploads/2020/05/AdobeStock_8715640-e1590773264541.jpeg' alt='ss'/></div>
        </div>
      
      </L>
    </div>
  )
}
