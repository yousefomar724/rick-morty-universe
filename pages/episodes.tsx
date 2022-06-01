import Head from 'next/head'
import { useEffect, useState } from 'react'
import Cards from '../components/cards/cards'
import InputGroup from '../components/filter/inputGroup'
import Navbar from '../components/navbar/navbar'
import { Episode, Result } from '../types'

const Episodes = () => {
  const [episodeId, setEpisodeId] = useState<number>(1)
  const [data, setData] = useState([])
  const [results, setResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(true)
  const { air_date, name } = data as unknown as Episode
  const API_ENDPOINT = `https://rickandmortyapi.com/api/episode/${episodeId}`

  useEffect(() => {
    ;(async () => {
      const response = await fetch(API_ENDPOINT)
      const data = await response.json()
      setData(data)

      const res = await Promise.all(
        data.characters.map((char: RequestInfo) =>
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
        <title>Episodes</title>
      </Head>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <div className='row my-4'>
            <h1 className='text-center mb-4'>
              Episode:{' '}
              <span className='text-primary'>
                {name === '' ? 'Unknown' : name}
              </span>
            </h1>
            <h5 className='text-center'>
              Air date:{' '}
              <span className='text-primary'>
                {air_date === '' ? 'Unknown' : air_date}
              </span>
            </h5>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-12'>
              <h5 className='text-center mb-4'>Pick Episodes</h5>
              <InputGroup name='Episode' total={51} setId={setEpisodeId} />
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

export default Episodes
