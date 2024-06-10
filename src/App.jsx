import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Landing from './Landing.jsx'


function App() {
  const [cars, setCars] = useState('')
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
     <Landing />
    </>
  )
}

export default App
