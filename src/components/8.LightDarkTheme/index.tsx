import React from 'react'
import useLocalStorage from './useLocalStorage'
import './style.css';

const LightDarkTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    // console.log(theme,setTheme);

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' :'light')
    }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
      <div className="toggle" onClick={handleToggleTheme}>
        <div className="round"></div>
      </div>
    </div>
  );
}

export default LightDarkTheme