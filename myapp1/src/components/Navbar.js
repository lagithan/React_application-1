import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from 'styled-components';
import { ThemeContext, theme } from '../Theme';
import { ThemeProvider } from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-wrap:wrap;
  gap:25px;
  align-items: center;
  width: calc(100% - 0px);
  background-color: ${props => props.theme.secondary};
  padding: 15px;
  margin:0px;
  border-radius: 10px;
  justify-content: space-between;
  transition: all 0.6s ease;
  box-shadow: ${props =>
    props.theme === theme.Light
      ? '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)'
      : '0 4px 8px rgba(255, 255, 255, 0.1), 0 6px 20px rgba(255, 255, 255, 0.1), 0 8px 30px rgba(255, 255, 255, 0.05)'};
`;

const NavItems = styled.div`
  display: inline-flex;
  gap: 15px;
  justify-content:center;
  flex-grow:3;
`;

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  background-color:white;
  border:1px solid ${props => props.theme.primary};
  font-weight: 400;
  color: ${props => props.theme.primary};
  transition: all 0.7s ease;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-4px);
  }

  &.active {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`;

const Head1=styled.h1`
display:flex;
padding:0px 25px;
flex-grow:4;
@media (max-width: 768px) {
text-align:center
justify-content:center}
`

const ThemeButton = styled.button`
  padding:8px;
  flex-grow:0.5;
  background-color: #287427;
  font-weight: bold;
  color:white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.7s ease;
  max-width:125px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.7s ease;
  }
`;

const TimeDisplay = styled.div`
  display:flex;
  padding:5px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  flex-grow:2;
  color: #287427;
  background-color:white;
  justify-content:center;
  border-radius:8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1), 0 8px 30px rgba(0, 0, 0, 0.05);
`;

const Navbar = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState(currentTheme === theme.Light ? <LightModeIcon /> : <DarkModeIcon />);
  const [text, setText] = useState(currentTheme === theme.Light ? 'Light mode' : 'Dark mode');
 
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIcon(currentTheme === theme.Light ? <LightModeIcon /> : <DarkModeIcon />);
    setText(currentTheme === theme.Light ? 'Light mode' : 'Dark mode');
  }, [currentTheme]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  });

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
      <Nav className="navbar">
        <Head1>Agro Mart</Head1>
        <TimeDisplay><h1>{currentTime.toLocaleTimeString()}</h1></TimeDisplay>
        <NavItems className='nav-items'>
          <StyledNavLink to="/">
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">
            About us
          </StyledNavLink>
          <StyledNavLink to="/contact">
            Contact us
          </StyledNavLink>
        </NavItems>
        <ThemeButton onClick={handleThemeToggle} className='theme-btn'>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {icon}
            {text}
          </span>
        </ThemeButton>
      </Nav>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
