import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './App.module.sass';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';
import reactLogo from './assets/react.svg';

function App() {
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className={style.wrapper}>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className={style.logo} alt="React logo" />
      </a>
      <ThemeToggle />
    </div>
  )
}

export default App;
