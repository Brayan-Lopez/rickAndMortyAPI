import React from 'react'

const Location = ({location}) => {
  return (
    <section className='location'>

      <div className='location-Wrapper'>
        <h2>{location?.name}</h2>
        <ul>
          <li>
            <span>Type:</span>
            <span>{location?.type}</span>
          </li>
          <li>
            <span>Dimension:</span>
            <span>{location?.dimension}</span>
          </li>
          <li>
            <span>Population:</span>
            <span>{location?.residents.length}</span>
          </li>
        </ul>
      </div>

     {location?.residents.length === 0 && <div className='noResident'>
     <article className='residentCard1'>
      <div className='residentCard2'>
        <div className='residentImg'>
          <img src='/rick.jpg' />
        </div>
        <section className='residentData'>
          <h2>No hay residentes</h2>
          <ul>
            <li>
              <span>No hay</span>
              <span>datos </span>
            </li>
          </ul>
        </section>
      </div>
    </article>
      </div>}
      
    </section>
  )
}

export default Location