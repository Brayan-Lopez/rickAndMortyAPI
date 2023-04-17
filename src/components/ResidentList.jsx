import { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({location}) => {

  const [currentPage, setCurrentPage] = useState(1)

  const RESIDENTS_PER_PAGES = 15

  const arrayPages = []
  const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGES)
  for(let i=1;i<=quantityPages;i++){
    arrayPages.push(i)
  }

  const startCut = currentPage * RESIDENTS_PER_PAGES - RESIDENTS_PER_PAGES
  const endCut = currentPage * RESIDENTS_PER_PAGES

  const residents = location?.residents

  useEffect(() => {
    setCurrentPage(1)
  }, [location])

  return (
    <>
    <section className='residentList'>
      {
        residents?.slice(startCut, endCut).map((resident) => <ResidentCard resident={resident} key={resident}/>)
      }
    </section>
    <ul className='numberPage'>
      {
        arrayPages.map(page => <li onClick={() => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior:'smooth' });
        }
      } className={`${page === currentPage && 'numberPageSelect'}`} key={page}>{page}</li>)
      }
    </ul>
    </>
  )
}

export default ResidentList