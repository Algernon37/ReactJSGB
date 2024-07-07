import reactLogo from './assets/react.svg'
import './App.css'
import TasksList from './components/TasksList/TasksList'
import AddTask from './components/AddTask/AddTask'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Redux + React</h1>
      <AddTask />
      <TasksList />
    </>
  )
}

export default App
