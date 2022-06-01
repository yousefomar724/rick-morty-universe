import { Dispatch, SetStateAction } from 'react'

interface Props {
  name: string
  index: number
  item: string
  setState: Dispatch<SetStateAction<string>>
  setPageNum: Dispatch<SetStateAction<number>>
}

const FilterBtn = ({ name, index, item, setState, setPageNum }: Props) => {
  return (
    <>
      <style jsx>
        {`
          input[type='radio'] {
            display: none;
          }

          .input:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
        `}
      </style>
      <div className='form-check' style={{ paddingLeft: '.5rem' }}>
        <input
          onClick={() => {
            setPageNum(1)
            setState(item)
          }}
          className='form-check-input input'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label className='btn btn-outline-primary' htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </>
  )
}

export default FilterBtn
