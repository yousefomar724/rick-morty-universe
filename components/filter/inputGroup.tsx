interface Props {
  total: number
  name: string
  setId: Function
}

const InputGroup = ({ total, name, setId }: Props) => {
  return (
    <div className='input-group mb-3'>
      <select
        onChange={(e) => setId(e.target.value)}
        className='form-select'
        id={name}
      >
        {[...Array(total).keys()].map((epiNum, index) => (
          <option value={epiNum + 1} key={index}>
            {name} - {epiNum + 1}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputGroup
