import { Dispatch, SetStateAction } from 'react'
import FilterBtn from '../filterBtn'

interface Props {
  setGender: Dispatch<SetStateAction<string>>
  setPageNum: Dispatch<SetStateAction<number>>
}

const Gender = ({ setGender, setPageNum }: Props) => {
  const genders = ['female', 'male', 'genderless', 'unknown']
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingOne'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseOne'
          aria-expanded='false'
          aria-controls='collapseOne'
        >
          Gender
        </button>
      </h2>
      <div
        id='collapseOne'
        className='accordion-collapse collapse'
        aria-labelledby='headingOne'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap gap-2'>
          {genders.map((gender, index) => (
            <FilterBtn
              key={index}
              name='gender'
              index={index}
              item={gender}
              setState={setGender}
              setPageNum={setPageNum}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gender
