// Correct Usage of useContext in GlobalStyles.js
import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from './Theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    flex-direction:column;
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.6s ease;
  }
  h1,h2 {
  color:${(props) => props.theme.primary}}

  @media (max-width: 768px) {
  font-size:10px;
}
`;

const GlobalStyleWrapper = () => {
  const { currentTheme } = useContext(ThemeContext);

  return <GlobalStyles theme={currentTheme} />;
};

export default GlobalStyleWrapper;
