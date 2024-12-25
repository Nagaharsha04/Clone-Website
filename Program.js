import React from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
export default function Program() {
  const P=styled.header`
  .parent1{
    display:grid;
    grid-template-rows:120%;
    grid-template-columns:75% 30%; 
    margin-left:10%;
    margin-right:10%;
    margin-top:5%;
  }
  .c1{
    grid-row:1/2;
    grid-column:1/2;
    font-size:20px;
    color:grey;
    font-family: "Patua One",Arial,Tahoma,sans-serif;
    text-align:justify;
    margin-right:5%;
  }
  .c2{
    grid-row:1/2;
    grid-column:2/3;
  }
  .c2 img{
    height:90%;
    width:100%;
  }
  .parent2{
    display:grid;
    grid-template-rows:120%;
    grid-template-columns:30% 70%;
    margin:10%;
  }
  .c3{
    grid-row:1/2;
    grid-column:1/2;
    margin-right:5%;
  }
  .c4{
    grid-row:1/2;
    grid-column:2/3;
    font-size:20px;
    color:grey;
    font-family: "Patua One",Arial,Tahoma,sans-serif;
    text-align:justify;
  }
  .c3 img{
    height:80%;
    width:100%;
  }
  u {
    text-decoration-color: orange;
    text-underline-offset: 50px;
  }
  h2{
    color:red;
    padding-top:3%;
  }
  `
  return (
    <div>
      <P>
      <Header/>
      <center> <h2><u>Programs</u></h2></center>
      <div className='parent1'>
        <div className='c1'>
          <p>For all of our programs in Africa, we will locate villages and towns in need via our Board members and volunteers living in the areas. We will approach these communities and ask if they would be interested in  working with us. We will then explain our programs and allow them to select what their community most needs. <br/>
          <br/>The corporation’s activities will focus on the teachings of our Lord, Jesus Christ, to feed the needy children of Africa regardless of their country of origin, and to provide shelter and food for the homeless children based on  the Christian teaching. We will maintain and establish a safe environment for needy children, and provide ongoing basic healthcare needs including clothing and food. We will work with local health clinics and  hospitals in Nigeria, the Ivory Coast, Ghana, Kenya, and the Benin Republic to help distribute vaccinations.</p>
        </div>
        <div className='c2'>
          <img src='https://feedafricafoundation.org/wp-content/uploads/2016/11/Fotolia_59655903_Subscription_XXL.jpg' alt='i1'/>
          </div>   
             </div>
             <div className='parent2'>
              <div className='c3'>
                <img src='https://feedafricafoundation.org/wp-content/uploads/2016/11/Fotolia_89697523_Subscription_XL.jpg' alt='i2'/>
              </div>
              <div className='c4'>
                <p>Within the next few years, the organization plans to help improve farming in African countries through the acquisition of land and machinery, and by providing training of appropriated personnel for the improvement of food production in the continent of Africa, starting with Nigeria, the Ivory Coast, Ghana, Kenya, and the Benin Republic. Farmland will be owned by the organization, and money earned from selling excess crops will go back to the organization to help fund its programs.</p>
              </div>
             </div>
             </P>
    </div>
  )
}
