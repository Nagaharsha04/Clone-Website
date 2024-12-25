import React,{useState} from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
export default function Dob() {
  const[x,y]=useState(
    {
      amount:"$1"
    }
  );
  const updateAmount=()=>{y(z=>{
    return{...z,amount:"$10"
}

  }
    );
  }
  const handleSubmit=()=>{
    alert("Do you want to donate")
}
  const H=styled.header`
  font-family: "Patua One",Arial,Tahoma,sans-serif;
  u {
    text-decoration-color: skyblue;
    text-underline-offset: 50px;
  }
  h1{
    color:red;
    text-align:center;
  }
  .do{
    margin-left:10%;
    margin-right:10%;
    margin-top:5%;
    margin-bottom:5%;
  }
  h3{
    color:grey;
    font-weight:lighter;
  }
  button{
    height:50px;
    min-width:80px;
    border-radius:5px;
  }
  input{
    height:30px;
    width:650px;
  }
  label{
    font-size:20px;
  }
  .cc{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .em input{
    height:30px;
    width:1390px;
  }
 .em label{
    font-size:20px;
    height:30px;
  }
  .money input{
    width:50px;
  }
  .but button{
    background-color: rgb(226, 35, 35);
    color:white;
    border:none;
    border-radius:5px;
    padding:1%;
  }
  .but button:hover{
    cursor:pointer;
    opacity:0.5;
  }
  button:hover{
    cursor:pointer;
    opacity:0.5;
  }
  `
  return (
    <div>
      <H>
      <Header/>
      <div className='do'>
        <h1><u>Donations</u></h1><br/><br/>
      <h3>
        You can make charitable donations to our organization by filling out the form below. We accept debit/credit cards, as well as Paypal.
        </h3>
        <img src="https://feedafricafoundation.org/wp-content/uploads/2020/05/cards-e1590702018878.png" alt="cards"/><br/><br/>
        <form>
        <input type="text" placeholder={x.amount}/><br/><br/>
        <button type="button" >$1</button>&nbsp;
         <button type="button">$5</button>&nbsp;
        <button  type="button" onClick={updateAmount}>$10</button>&nbsp;
        <button  type="button" >$25</button>&nbsp;
        <button  type="button" >$50</button>&nbsp;
        <button  >Custom Amount</button><br/><br/>
        <label>Personal Info</label><br/><hr/>
        <div className='cc'>
         <div className='c1'><label>First Name*</label><br/><br/>
         <input type="text" placeholder="FirstName"/></div>
         <div className='c2'><label>Last Name*</label><br/><br/>
          <input type="text" placeholder="LastName"/></div>
          </div><br/><br/>
          <div className='em'>
          <label>Email Adress*</label><br/><br/>
          <input type="email" placeholder="Email Adress"/>
          </div><br/><br/>
          <div className='money'>
          <label>Donation Total:</label>
          <input type="text" placeholder={x.amount} onClick={updateAmount}></input></div><br/><br/>
          <div className='but'>
          <button type="submit"  onClick={handleSubmit}>Donate Now</button>
          </div>
        </form>
        </div>
      </H>
    </div>
  )
}
