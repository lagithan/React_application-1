import React,{useContext} from 'react';
import myImage1 from '../Assets/t1.jpg';
import styled from 'styled-components';
import { ThemeContext,theme} from '../Theme';


const Imagecard=styled.div`
display:flex;
flex-direction:column;
padding:5px 15px;
border-radius:8px;
color:#2A802A;
font-size:18px;
background-color: ${props =>
    props.theme === theme.Light
      ? '#B6F4BB'
      : '#2E2D31'};`
const Team = () => {
  const {currentTheme}=useContext(ThemeContext);
  return (
    <div className='sub-container'>
      <h2>Our Team Members</h2>
      <div className='image-container'>
        <Imagecard theme={currentTheme}><img className='img1'src={myImage1}/>
        <p>Vimalraj Lagithan</p>
        <p style={{fontSize:"15px",textAlign:"center"}}>Senior <br/>Web developer</p>
        </Imagecard>
        <Imagecard><img  className='img1'src={myImage1}/>
        <p>Vimalraj Lagithan</p>
        <p style={{fontSize:"15px",textAlign:"center"}}> Senior <br/>Web developer</p>

        </Imagecard>
        <Imagecard><img  className='img1'src={myImage1}/>
        <p>Vimalraj Lagithan</p>
        <p style={{fontSize:"15px",textAlign:"center"}}> Senior <br/>Web developer</p>
        </Imagecard>
      </div>
    </div>
  );
};

export default Team;
