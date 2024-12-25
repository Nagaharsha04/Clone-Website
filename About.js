import React from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
export default function About() {
  const W=styled.header`
  font-family: "Patua One",Arial,Tahoma,sans-serif;

  .sai{
    margin:30%;
  }
  .f1{
    display:grid;
    grid-template-rows:60% 30% 10%;
    grid-template-columns:45% 21% 35%;
    margin-left:10%;
    margin-right:10%;
  }
  .image1{
    grid-row:1/4;
    grid-column:1/2;
  }
  .link{
    grid-row:3/4;
    grid-column:2/3;
    margin-left:10%;
  }
  .para1{
    grid-row:1/2;
    grid-column:2/4;
    margin-left:5%;
    font-size:20px;
    color:grey;
    text-align:justify;
  }
  .img2{
    grid-row:2/3;
    grid-column:2/3;
    margin-left:15%;
  }
  .f2{
    display:grid;
    grid-template-rows:100%;
    grid-template-columns:30% 65%;
    margin-top:5%;
    margin-left:10%;
    margin-bottom:5%;
  }
  .image2{
    grid-row:1/2;
    grid-column:1/2;
  }
  .para2{
    grid-row:1/2;
    grid-column:2/3;
    font-size:20px;
    margin-left:5%;
    color:grey;
    text-align:justify;
  }
  .image2 img{
    heihht:150%;
    width:100%;
  }
  u {
    text-decoration-color: orange;
    text-underline-offset: 30px;
  }
  h2{
    color:red;
    padding:5%;
  }
  `
  return (
    <div className='sai'>
      <W>
      <Header/>
      <center><h2><u> Who We Are </u></h2></center>

    <div className="f1">
      <div className='image1'>
      <img src= "https://feedafricafoundation.org/wp-content/uploads/2016/11/Fotolia_51893145_Subscription_XXL.jpg"alt="logo"/></div>
      <div className='para1'><p>Feed Africa Foundation is a 501 (C)(3) charitable organization who will build homeless children shelters in each of the countries we work in. This shelter will house youth for up to 6 weeks, during which time we will assist them in being adopted, fostered, or placed in a job, depending on their age. For children (under 15), they may remain in the shelter for up to 3 months. The shelter will also serve as a food pantry for those residing in it and for those in nearby communities. We will also rent an office space which will double as a community center/food pantry.</p></div>
      <div className='img2'>
      <img src='https://cdn.greatnonprofits.org//img/2020-top-rated-awards-badge-embed.png?id=996890322' alt="kdfl"/>
      </div>
      <div className='link'>
      <a href='https://greatnonprofits.org/org/feed-africa-foundation'>Volunteer. Donate. Review.</a>
     </div>
    </div>
    <div className="f2">
      <div className="image2">
      <img src="https://feedafricafoundation.org/wp-content/uploads/2016/11/Fotolia_56162329_Subscription_XXL.jpg"alt="logo2"  img sizes="300px"/></div>
      <div className='para2'><p> Food pantries will be open seven days a week and stocked by farms we help develop. These pantries will also have a soup kitchen component where locals may receive one hot meal (soup, etc) or a sandwich each day, depending on what is available.<br/><br/>
     We will provide food for the underprivileged, and assist farmers as needed with tools, seeds, and other necessary items. We will fund agricultural programs in schools and educate farmers on how to use moder agricultural machinery. We will also empower local villagers to be self-sufficient by providing community family programs and by improving live stock handling. We will establish food pantries in each village as needed.</p></div>
    </div>
    </W>
    </div>
  )
}
