import React from 'react'
import Header from "./components/Header";
import styled from 'styled-components';
import ReactPlayer from 'react-player';
export default function Gallery() {
  const S=styled.header`
  font-family: "Patua One",Arial,Tahoma,sans-serif;
  .container{
    background-color:green;
    display:grid;
    grid-template-rows:130%;
    grid-template-columns:50% 50%;
    margin-left:10%;
    margin-right:10%;
    color:white;
    margin-top:2%;
    margin-bottom:5%;
  }
  .ch1{
    grid-row:1/2;
    grid-column:1/2;
    padding-left:40%;
    padding-top:10%;
    padding-bottom:20%;
  }
  .ch1 img{
    min-height:80%;
  }
  .ch2{
    grid-row:1/2;
    grid-column:2/3;
    text-align:left;
    padding-top:10%;
  }
  h3{
    font-size:40px;
    font-weight:bolder;
  }
  .lside{
    background-color:green;
    margin-left:10%;
    margin-right:5%;
    margin-top:0%;
    margin-bottom:5%;
    height:100%;
    min-width:20%;
    text-align:left;
    color:white;
  }
  .lside h3{
    padding:10%;
  }
  .middle{
   display:flex;
   flex-direction:row;
   flex-wrap: nowrap;
  }
 .rside{
  display:grid;
  grid-template-rows:35% 35% 35% 35%;
  grid-template-columns:90% 90%;
  margin-bottom:15%;
}
embed{
  max-height:120%;
  max-width:100%;
}
.chh1{
  grid-row:1/2;
  grid-column:1/2;
  margin:5%;
}
.chh2{
  grid-row:1/2;
  grid-column:2/3;
  margin:5%;
}
.chh3{
  grid-row:2/3;
  grid-column:1/2;
  margin:5%;
}
.chh4{
  grid-row:2/3;
  grid-column:2/3;
  margin:5%;
}
.chh5{
  grid-row:3/4;
  grid-column:1/2;
  margin:5%;
}
.chh6{
  grid-row:3/4;
  grid-column:2/3;
  margin:5%;
}
.chh7{
  grid-row:4/5;
  grid-column:1/2;
  margin:5%;
}
.chh8{
  grid-row:4/5;
  grid-column:2/3;
  margin:5%;
}
.images{
  display:grid;
  margin-left:35%;
  margin-top:10%;
  grid-template-columns:20% 20% 20% 20%;
  grid-template-rows:20% 20% 20% 20% 20%;
  margin-bottom:15%;
}
.images img{
  height:100%;
  width:100%;
}
.images img:hover{
  transform: scale(1.1);
  cursor:pointer;
}
.i1{
  grid-row:1/2;
  grid-column:2/3;
  margin:1%;
}
.i2{
  grid-row:1/2;
  grid-column:3/4;
  margin:1%;
}
.i3{
  grid-row:1/2;
  grid-column:4/5;
  margin:1%;
}
.i4{
  grid-row:1/2;
  grid-column:1/2;
  margin:1%;
}
.i5{
  grid-row:2/3;
  grid-column:1/2;
  margin:1%;
}
.i6{
  grid-row:2/3;
  grid-column:2/3;
  margin:1%;
}
.i7{
  grid-row:2/3;
  grid-column:3/4;
  margin:1%;
}
.i8{
  grid-row:2/3;
  grid-column:4/5;
  margin:1%;
}
.i9{
  grid-row:3/4;
  grid-column:1/2;
  margin:1%;
}
.i10{
  grid-row:3/4;
  grid-column:2/3;
  margin:1%;
}
.i11{
  grid-row:3/4;
  grid-column:3/4;
  margin:1%;
}
.i12{
  grid-row:3/4;
  grid-column:4/5;
  margin:1%;
}
.i13{
  grid-row:4/5;
  grid-column:1/2;
  margin:1%;
}
.i14{
  grid-row:4/5;
  grid-column:2/3;
  margin:1%;
}
.i15{
  grid-row:4/5;
  grid-column:3/4;
  margin:1%;
}
.i16{
  grid-row:4/5;
  grid-column:4/5;
  margin:1%;
}
.i17{
  grid-row:5/6;
  grid-column:1/2;
  margin:1%;
}
.i18{
  grid-row:5/6;
  grid-column:2/3;
  margin:1%;
}
.i19{
  grid-row:5/6;
  grid-column:3/4;
  margin:1%;
}
.i20{
  grid-row:5/6;
  grid-column:4/5;
  margin:1%;
}
  `
  return (
    <div>
      <S>     
      <Header/>
      <div className='container'>
        <div className='ch1'>
          <img src='https://feedafricafoundation.org/wp-content/uploads/2016/11/Fotolia_6688604_XS.jpg' alt='ima'/>
        </div>
        <div className='ch2'>
          <h3>No Child Should Be Subjected to <br/>Poverty and Lack……</h3>
        </div>
      </div>
      <div className='middle'>
            <div className='lside'>
        <h3>Stealing Due<br/> to <br/>Unemployme<br/>nt,<br/><br/>Lack of<br/> Nutritional<br/> Food,<br/><br/>Lack of Basic<br/>Amenities,<br/><br/>Lack of <br/>Education<br/></h3>
      </div>
      <div className='rside'>
       <div className='chh1'><embed src='https://www.youtube.com/embed/3dkXQuol_2o'></embed></div>
       <div className='chh2'><embed src='https://www.youtube.com/embed/tcZ8ZTfsY3s'></embed></div>
       <div className='chh3'><embed src='https://www.youtube.com/embed/EA_yh9eFOJY'></embed></div>
       <div className='chh4'><embed src='https://www.youtube.com/embed/rjrDiudoYMU'></embed></div>
       <div className='chh5'><embed src='https://www.youtube.com/embed/hcNKAe_BC9k'></embed></div>
       <div className='chh6'><embed src='https://www.youtube.com/embed/SGqMJ6rb0Q8'></embed></div>
       <div className='chh7'><embed src='https://www.youtube.com/embed/9CnvHOEfbps'></embed></div>
       <div className='chh8'><embed src='https://www.youtube.com/embed/KzZb1xrBxeg'></embed></div>
      </div>
      </div>
      <div className='images'>
      <div className='i1'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200509_090354_607.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i2'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200521_153905_915.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i3'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200521_153905_913.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i4'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200521_151713_460.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i5'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200521_153905_498.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i6'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200521_153905_499.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i7'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_115656_005.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i8'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_115656_005.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i9'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_115208_731.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i10'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_115208_760.jpg?bwg=1590700133' alt='ss'/></div>
      <div className='i11'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_114747_647.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i12'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_114747_646.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i13'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_122436_900.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i14'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG-20200424-WA0010.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i15'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_121024_453.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i16'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_121024_454.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i17'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_115656_091.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i18'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG_20200523_122436_899.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i19'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG-20200424-WA0013.jpg?bwg=1590700133' alt='s'/></div>
      <div className='i20'><img src='https://feedafricafoundation.org/wp-content/uploads/photo-gallery/thumb/IMG-20200424-WA0012.jpg?bwg=1590700133' alt='s'/></div>
      </div>
      </S>
    </div>
  )
}
