import Link from 'next/link'
import { Result } from '../../types'
import styles from './cards.module.css'

const Cards = ({ results }: { results: Result[] }) => {
  if (results?.length > 0) {
    return (
      <>
        {results.map((result) => {
          const { name, species, origin, status, image, id, gender } = result
          return (
            <div
              className='col-lg-4 col-md-6 col-12 mb-4 position-relative'
              key={id}
            >
              <Link href={`/character/${id}`}>
                <div className={styles.cards} title={name}>
                  <img
                    src={image}
                    alt={name}
                    className={`img-fluid ${styles.img}`}
                  />
                  <div className='content' style={{ padding: '10px' }}>
                    <div className='fs-5 fw-bold mb-1'>
                      {name.length > 12 ? `${name.slice(0, 12)}...` : name}
                    </div>
                    <small>{species}</small> |{' '}
                    <span className='fs-6 text-secondary'>{gender}</span>
                    {origin && (
                      <small style={{ display: 'block' }}>
                        Origin:{' '}
                        <small>
                          {origin.name.length > 16
                            ? `${origin.name.slice(0, 16)}...`
                            : origin.name}
                        </small>
                      </small>
                    )}
                  </div>
                </div>
              </Link>
              <div
                className={`badge ${styles.badge} ${
                  result.status === 'Alive'
                    ? 'bg-success'
                    : result.status === 'Dead'
                    ? 'bg-danger'
                    : 'bg-secondary'
                }`}
              >
                {status}
              </div>
            </div>
          )
        })}
      </>
    )
  } else {
    return <h1 className='text-center my-6'>No Results Found :/</h1>
  }
}

export default Cards
