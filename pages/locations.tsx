import Head from 'next/head'
import { useEffect, useState } from 'react'
import Cards from '../components/cards/cards'
import InputGroup from '../components/filter/inputGroup'
import Navbar from '../components/navbar/navbar'
import { Location, Result } from '../types'

const Locations = () => {
  const [locationId, setLocationId] = useState<number>(1)
  const [data, setData] = useState([])
  const [results, setResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(true)
  const { type, dimension, name } = data as unknown as Location
  const API_ENDPOINT = `https://rickandmortyapi.com/api/location/${locationId}`

  useEffect(() => {
    ;(async () => {
      const response = await fetch(API_ENDPOINT)
      const data = await response.json()
      setData(data)

      const res = await Promise.all(
        data.residents.map((char: RequestInfo) =>
          fetch(char).then((r) => r.json())
        )
      )
      setResults(res)
      setLoading(false)
    })()
  }, [API_ENDPOINT])
  return (
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <div className='row my-4'>
            <h1 className='text-center mb-4'>
              Location:{' '}
              <span className='text-primary'>
                {name === '' ? 'Unknown' : name}
              </span>
            </h1>
            <h5 className='text-center'>
              Dimension:{' '}
              <span className='text-primary'>
                {dimension === '' ? 'Unknown' : dimension}
              </span>
            </h5>
            <h6 className='text-center'>
              Type:{' '}
              <span className='text-primary'>
                {type === '' ? 'Unknown' : type}
              </span>
            </h6>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-12'>
              <h5 className='text-center mb-4'>Pick Location</h5>
              <InputGroup name='Location' total={126} setId={setLocationId} />
            </div>
            <div className='col-lg-8 col-12'>
              <div className='row'>
                {loading ? (
                  <div style={{ display: 'grid', placeItems: 'center' }}>
                    <div className='spinner-border text-primary' role='status'>
                      <span className='visually-hidden'>Loading...</span>
                    </div>
                  </div>
                ) : (
                  <Cards results={results} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locations
