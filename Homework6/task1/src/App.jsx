import reactLogo from './assets/react.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/index'
import AddProduct from './components/AddProduct/AddProduct'
import Products from './components/Products/Products'

function App() {

  return (
    <Provider store={store}>
        <div className="wrapper">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
          <h1>React + Redux</h1>
          <h2>Add Product</h2>
          <AddProduct />
          <Products />
        </div>
    </Provider>
  )
}

export default App;
