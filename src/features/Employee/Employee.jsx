import React, { useEffect, useState } from 'react'


export const EmployeeList = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const PAGE_SIZE = 5
  const LAST_PAGE_IDX = Math.ceil(count / PAGE_SIZE) - 1

  const moveToPrev = (isMoveToPrevPage) => {
    let page = (isMoveToPrevPage && currentPage !== 0) ? currentPage - 1 : 0
    setCurrentPage(page)
  }

  const moveToNext = (isMoveToNextPage) => {
    let page = (isMoveToNextPage && currentPage !== LAST_PAGE_IDX) ? currentPage + 1 : LAST_PAGE_IDX
    setCurrentPage(page)
  }

  const goToPage = (page) => {
    setCurrentPage(page)
  }


  const fetchData = async (page) => {
    setIsLoading(true)
    const url = `https://localhost:5001/api/product/${page}`
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          const { count, employees } = result
          setData([...employees])
          setCount(count)
          setIsLoading(false)
          setCurrentPage(page)
        },
        (error) => {
          setIsLoading(false)
        }
      )
  }

  useEffect(() => {
    fetchData(1)
    console.count('go here')
  }, [currentPage])

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td>Id</td>
            <td>First name</td>
            <td>Last name</td>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map(({ id, firstName, lastName }) => (
              <>
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                </tr>
              </>
            ))
          }

        </tbody>
      </table>
      <section className='pagingation'>
        <button className='first-page-btn'
          onClick={() => goToPage(0)}
          disabled={(currentPage === 0 || isLoading)}
        >
          First
        </button>
        <button
          className='previous-page-btn'
          onClick={() => goToPage(currentPage -  1)}
          disabled={currentPage === 0 || isLoading}
        >
          Previous
        </button>
        <button className='next-page-btn'
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === LAST_PAGE_IDX || isLoading}
        >
          Next
        </button>
        <button className='last-page-btn'
          onClick={() => goToPage(LAST_PAGE_IDX)}
          disabled={currentPage === LAST_PAGE_IDX}
        >
          Last
        </button>
      </section>
    </div >
  )

}