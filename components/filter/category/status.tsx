import { Dispatch, SetStateAction } from 'react'
import FilterBtn from '../filterBtn'

interface Props {
  setStatus: Dispatch<SetStateAction<string>>
  setPageNum: Dispatch<SetStateAction<number>>
}

const Status = ({ setStatus, setPageNum }: Props) => {
  const status = ['Alive', 'Dead', 'Unknown']
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingThree'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseThree'
          aria-expanded='true'
          aria-controls='collapseThree'
        >
          Status
        </button>
      </h2>
      <div
        id='collapseThree'
        className='accordion-collapse collapse show'
        aria-labelledby='headingThree'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap gap-2'>
          {status.map((statue, index) => (
            <FilterBtn
              key={index}
              name='status'
              index={index}
              item={statue}
              setState={setStatus}
              setPageNum={setPageNum}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status
