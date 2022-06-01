import { GetServerSideProps } from 'next'
import Navbar from '../../components/navbar/navbar'
import { Character } from '../../types'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const result = await response.json()
  return {
    props: { result },
  }
}

type Props = { result: Character }

const Character = ({ result }: Props) => {
  const { origin, type, location, name, status, species, image, gender } =
    result
  return (
    <>
      <Navbar />
      <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-column gap-3'>
          <h1 className='text-center fw-bold'>{name}</h1>
          <img src={image} alt={name} className='img-fluid' />
          <div
            className={`text-white text-center fs-5 ${
              result.status === 'Alive'
                ? 'bg-success'
                : result.status === 'Dead'
                ? 'bg-danger'
                : 'bg-secondary'
            }`}
          >
            {status}
          </div>
          <div className='content mb-4'>
            <div className=''>
              <span className='fw-bold'>Gender: </span>
              {gender}
            </div>
            <div className=''>
              <span className='fw-bold'>Location: </span>
              {location?.name}
            </div>
            <div className=''>
              <span className='fw-bold'>Status: </span>
              {status}
            </div>
            <div className=''>
              <span className='fw-bold'>Type: </span>
              {type === '' ? 'Unknown' : type}
            </div>
            <div className=''>
              <span className='fw-bold'>Species: </span>
              {species}
            </div>
            <div className=''>
              <span className='fw-bold'>Origin: </span>
              {origin?.name}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Character
