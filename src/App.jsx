
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
// import { BsSearch } from 'react-icons/bs';

import { getRandomDimension } from './helpers/random'

import Location from './components/Location'
import ResidentList from './components/ResidentList'


function App() {

  const [location, setLocation] = useState()
  const [arrayEndPoints, setArrayEndPoints] = useState()
  const [text2, setText2] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setText2(e.target.value)
    const newLocation = e.target.value

    const URL = `https://rickandmortyapi.com/api/location/?name=${newLocation}`
    axios.get(URL)
    .then(({data}) => {setArrayEndPoints(data)})
    .catch((err) => console.log(err))
   }

  const handleEndPoint = (url) => {
    const URL = url
    axios.get(URL)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
    setText2('')
  }
 
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    axios.get(URL)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">

      <div className='header'>

       <div className='title'>
        <img src="/nombre.png" />
      </div>

      <div className='search'>
        <input type="text" value={text2} onChange={handleChange} placeholder='Dimension Name...'/>
        {
        text2 && <ul>
          {
            arrayEndPoints?.results.map((endpoint) => (
              <li key={endpoint?.id} onClick={() => handleEndPoint(endpoint?.url)}>
                {endpoint?.name}
              </li>
            ))
          }
        </ul>
        }
      </div> 

      </div>
      
      <Location location={location}/>
      <ResidentList location={location}/>
    </div>
  )
}

export default App
