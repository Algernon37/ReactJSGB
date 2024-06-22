import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import style from './App.module.sass';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {

  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className={style.logo} alt="React logo" />
        </a>
        <div className={style.buttons}>
          <button>
            <Link to="/" className={style.button}>
              Home Page
            </Link>
          </button>
          <button>
            <Link to="/AboutPage" className={style.button}>
              About Page
            </Link>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
