import reactLogo from './assets/react.svg';
import style from './App.module.sass';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import TodoList from './components/TodoList/TodoList';
import { Button } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className={style.logo} alt="React logo" />
        </a>
        <div className={style.buttons}>
          <Button as={Link} to="/TemperatureConverter">Temperature Converter</Button>
          <Button as={Link} to="/TodoList">Todo List</Button>
        </div>
        <Routes>
          <Route path="/TemperatureConverter" element={<TemperatureConverter />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;