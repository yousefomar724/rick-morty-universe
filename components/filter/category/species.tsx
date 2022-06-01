import { Dispatch, SetStateAction } from 'react'
import FilterBtn from '../filterBtn'

interface Props {
  setSpecies: Dispatch<SetStateAction<string>>
  setPageNum: Dispatch<SetStateAction<number>>
}

const Species = ({ setSpecies, setPageNum }: Props) => {
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ]
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingTwo'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseTwo'
          aria-expanded='false'
          aria-controls='collapseTwo'
        >
          Species
        </button>
      </h2>
      <div
        id='collapseTwo'
        className='accordion-collapse collapse'
        aria-labelledby='headingTwo'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap gap-2'>
          {species.map((specie, index) => (
            <FilterBtn
              name='species'
              key={index}
              item={specie}
              index={index}
              setState={setSpecies}
              setPageNum={setPageNum}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Species
