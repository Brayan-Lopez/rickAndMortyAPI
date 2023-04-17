import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({resident}) => {

  const [residentInfo, setResidentInfo] = useState()

  useEffect(() => {
    const URL = resident
    axios.get(URL)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
  }, [])

  console.log(residentInfo)
  return (
    <article className='residentCard1'>
      <div className='residentCard2'>
        <div className='residentImg'>
          <img src={`${residentInfo?.image}`} />
        </div>
        <section className='residentData'>
          <h2>{residentInfo?.name}</h2>
          <ul>
            <li>
              <span>STATUS</span>
              <div >
                <div className={`status ${residentInfo?.status}`}></div>
                <span>{residentInfo?.status}</span>
              </div>
              
            </li>
            <li>
              <span>SPECIES</span>
              <span>{residentInfo?.species}</span>
            </li>
            <li>
              <span>ORIGIN</span>
              <span>{residentInfo?.origin.name}</span>
            </li>
            <li>
              <span>TIMES APPEAR</span>
              <span>{residentInfo?.episode.length} time</span>
            </li>
          </ul>
        </section>
      </div>
      
    </article>
  )
}

export default ResidentCard