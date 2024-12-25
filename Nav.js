import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    const X=styled.nav`
    nav ul{
        list-style: none;
        margin:0;
        padding:0;
        display: flex;
        justify-content:space-around;
        flex-direction: row;
        flex-wrap:wrap;
      }
      nav{
        background-color:white;
        overflow:hidden;
        position:fixed;
        min-width:90%;
      }
      nav a{
        float:left;
        padding: 30px 40px;
        text-decoration: none;
        font-size: 15px;
        color:black;
        margin-top:15px;
      }
      li:hover{
            cursor: pointer;
            border-top:solid;
            border-color: rgb(226, 35, 35);
            color:red;
           }
           img{
            width:160px;
            height:100px;
            margin:10px;
        }
        a:hover{
          color: rgb(226, 35, 35);
        }
        button{
            background-color: rgb(226, 35, 35);
            color:white;
            border:none;
            border-radius:5px;
            height:50px;
            width:80px;
            margin-top:-10%;
          }
        button:hover{
           cursor:pointer;
           opacity:0.7;
        }
        .Navlist.active{
          color:red;
        }
        .navsamp{
          margin-left:80px;
        }
    `;
  return (
    <div>
        <X>
        <div className='navsamp'>
      <nav>
            <ul>
                <img src='https://feedafricafoundation.org/wp-content/uploads/2020/05/logo.png' alt="faf"/>
                <li><NavLink to="/" className="Navlist" >Home</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/about" className="Navlist">About Us</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/board" className="Navlist">Board Members</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/gallery" className="Navlist">Gallery</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/program" className="Navlist">Programs</NavLink></li><hr color='lightgray'/>
                <li><NavLink to="/contact" className="Navlist">Contact Us</NavLink></li><hr color='lightgray'/>
                <li ><NavLink to="/primary" className="Navlist">Primary Healthcare Center</NavLink></li>
                <Link to="/dob" className='list'><button>Donate</button></Link>
            </ul>
      </nav>
      </div>
      </X>
    </div>
  )
}

export default Nav
