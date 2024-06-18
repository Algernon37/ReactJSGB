import logo from './logo.svg';
import style from './App.module.sass';
import Message from './components/Message/Message';

function App() {
  return (
    <div className={style.App}>
      <header className={style.App_header}>
        <img src={logo} className={style.App_logo} alt="logo" />
        <Message
          text='For whom the bell tolls? It is a toll for each of us.'
        />
      </header>
    </div>
  );
}

export default App;
