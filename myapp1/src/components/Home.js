import React, { useEffect, useState, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../Theme'; 
import '../App.css';
import src from '../Assets/2.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  flex-wrap:wrap;
  padding: 25px;
  margin:50px 50px;
  background-color: ${props => props.theme.secondary};
  border-radius:10px;
  width:calc(70vw - 50px);
  font-size:20px;
  height:fit-content;
`;
const StyledParagraph = styled.p`
  margin:0px;
`;

const Home = () => {
  const [greeting, setGreeting] = useState('Welcome');
  const { currentTheme } = useContext(ThemeContext);
  const [user,set_user]=useState("user");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    };
  }, []);

  useEffect(()=>{
    const data = localStorage.getItem('user');
    if (data) {
      set_user(JSON.parse(data));
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <div className='home'>
        <Container>
          <h1>{greeting}, {user.name}</h1>
          <h2>Welcome to Agro Mart !</h2>
          <StyledParagraph>
          Agro Mart is your top online destination for gardening and agriculture. Whether you love gardening, farming, or enhancing your surroundings, explore our wide range of products and services. Count on us for top-notch products that nurture your garden and deliver exceptional results.
          </StyledParagraph>
          <button className='btn1'>Get's your order</button>
        </Container>
        <img className='image-c'src={src} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
