import { Dispatch, SetStateAction } from 'react'
import Gender from './category/gender'
import Species from './category/species'
import Status from './category/status'

interface Props {
  setState: {
    setStatus: Dispatch<SetStateAction<string>>
    setGender: Dispatch<SetStateAction<string>>
    setSpecies: Dispatch<SetStateAction<string>>
  }
  setPageNum: Dispatch<SetStateAction<number>>
}

const Filter = ({ setState, setPageNum }: Props) => {
  const clearFilters = () => {
    const { setGender, setSpecies, setStatus } = setState
    setGender('')
    setSpecies('')
    setStatus('')
    setPageNum(1)
    window.location.reload()
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div
        onClick={clearFilters}
        style={{ cursor: 'pointer' }}
        className='text-center text-decoration-underline text-primary mb-4'
      >
        Clear Filters
      </div>
      <div className='accordion' id='accordionExample'>
        <Status setStatus={setState.setStatus} setPageNum={setPageNum} />
        <Species setSpecies={setState.setSpecies} setPageNum={setPageNum} />
        <Gender setGender={setState.setGender} setPageNum={setPageNum} />
      </div>
    </div>
  )
}

export default Filter
