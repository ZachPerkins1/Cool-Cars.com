import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

function App() {
  const [cars, setCars] = useState('')
  const [count, setCount] = useState(0)
  const getCars = function () {
    axios.get('http://localhost:3000/cars', {
      params: {}
    })
      .then(function (response) {
        setCars(JSON.stringify(response.data[0]))
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('done')
      });
  }
  return (
    <>
      <Button onClick={() => getCars()} variant="contained">Show a car object</Button>
      <div>
        <Link to={`inventory`}>
          <Button variant="contained">This is a Link to Inventory</Button>
        </Link>
      </div>
      <div>
        <Link to={`aboutUs`}>
          <Button variant="contained">This is a Link to About Us</Button>
        </Link>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          Example car: {cars}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
