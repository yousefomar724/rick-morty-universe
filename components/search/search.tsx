import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import styles from './search.module.css'

interface Props {
  setSearchQuery: Dispatch<SetStateAction<string>>
  setPageNum?: Dispatch<SetStateAction<number>>
}

const Search = ({ setSearchQuery, setPageNum }: Props) => {
  const [searchInput, setSearchInput] = useState<string>('')

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault()
    setSearchQuery(searchInput)
    if (setPageNum) setPageNum(1)
  }

  return (
    <form
      className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'
      onSubmit={handleSearch}
    >
      <input
        type='search'
        className={styles.input}
        placeholder='Search for characters'
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}
      />
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search
