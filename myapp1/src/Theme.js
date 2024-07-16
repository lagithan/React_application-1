import { createContext, useState,useEffect } from 'react';
export const theme = {
    Light: {
      primary: '#508D4E',
      secondary: '#D6EFD8',
      background: '#f4f4f4',
      text: '#063F05',
    },
    Dark: {
      primary: '#508D4E',
      secondary: '#121212',
      background: '#000000',
      text: '#ffffff',
}};

export const ThemeContext = createContext();

export const Theme_provider =({children}) =>{
  const [currentTheme, setCurrentTheme] = useState(theme.Light);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === theme.Light ? theme.Dark : theme.Light;
    setCurrentTheme(newTheme);
    const themeobj=JSON.stringify(newTheme);
    localStorage.setItem('theme',themeobj);
    
  };


  return(
    <ThemeContext.Provider value={{currentTheme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )


}


