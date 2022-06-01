import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Info } from '../../types'
import styles from './pagination.module.css'

interface Props {
  setPageNum: Dispatch<SetStateAction<number>>
  pageNum: number
  info: Info
}

const Pagination = ({ setPageNum, pageNum, info }: Props) => {
  const [width, setWidth] = useState<number | null>(
    typeof window !== 'undefined' ? window.innerWidth : null
  )

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <>
      {info && (
        <>
          <style jsx>
            {`
              @media (max-width: 768px) {
                .next,
                .prev {
                  display: none;
                  background-color: red;
                }
              }
            `}
          </style>
          <ReactPaginate
            className='pagination justify-content-center gap-2 my-4'
            forcePage={pageNum === 1 ? 0 : pageNum - 1}
            nextLabel='Next'
            previousLabel='Prev'
            nextClassName={`${styles.btn} btn btn-primary`}
            previousClassName={`${styles.btn} btn btn-primary`}
            pageClassName='page-item'
            activeClassName='active'
            pageLinkClassName='page-link'
            marginPagesDisplayed={width! < 576 ? 1 : 2}
            pageRangeDisplayed={width! < 576 ? 1 : 2}
            onPageChange={(num) => setPageNum(num.selected + 1)}
            pageCount={info?.pages}
          />
        </>
      )}
    </>
  )
}

export default Pagination
