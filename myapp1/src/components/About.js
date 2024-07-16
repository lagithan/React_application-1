import React from 'react';
import {Route,Routes,NavLink} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../Theme';
import { useContext } from 'react';
import History from './History';
import Mission from './Mission';
import Team from './Team';
import Values from './Value';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  padding: 25px;
  margin: 50px 25px;
  background-color: ${props => props.theme.secondary};
  border-radius: 10px;
  width: calc(100% - 50px);
  font-size: 20px;
  align-items: center;
  height:calc(100vh - 200px);
`;

const Navi=styled.div`
flex-wrap:wrap;
display:flex;
align-self:center;
gap:25px`;

const StyledNavLink=styled(NavLink)`
padding:5px;
text-decoration:none;
color: ${props => props.theme.primary};
&:hover{
border-bottom: 3px solid ${props => props.theme.primary}}
&.active{
border-bottom: 3px solid ${props => props.theme.primary}}
`

const About = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={currentTheme}>
    <Container>
      <h1 className='head1'>About us</h1>
          <Navi>
          <StyledNavLink to="history">
            History
          </StyledNavLink>
          <StyledNavLink to="mission">
            Mission
          </StyledNavLink>
          <StyledNavLink to="team">
            Team members
          </StyledNavLink>
          <StyledNavLink to="values">
            Values
          </StyledNavLink>
        </Navi>
        <Routes>
        <Route
            index
            element={
              <p style={{
                display: "flex",
                fontSize: "30px",
                padding: "10px",
                alignSelf: "center",
                textAlign: "center",
                color: `${currentTheme.primary}`,
                marginTop: "25px",
              }}>
                Click the above link to <br/>Learn about us
              </p>
            }
          />
          <Route path="history" element={<History />} />
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="values" element={<Values />} />
        </Routes>
      </Container>
    </ThemeProvider>
    
  );
};

export default About;
