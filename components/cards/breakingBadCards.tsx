import Link from 'next/link'
import { BreakingBadCharacter } from '../../types'
import styles from './cards.module.css'

const BreakingBadCards = ({ results }: { results: BreakingBadCharacter[] }) => {
  if (results?.length > 0) {
    return (
      <>
        {results.map((result) => {
          const { name, img, nickname, status, char_id, occupation } = result
          return (
            <div
              className='col-lg-4 col-md-6 col-12 mb-4 position-relative'
              key={char_id}
            >
              <div className={styles.cards} title={name}>
                <img
                  src={img}
                  alt={name}
                  className={`img-fluid ${styles.img}`}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <div className='content' style={{ padding: '10px' }}>
                  <div className='fs-5 fw-bold mb-1'>
                    {name.length > 12 ? `${name.slice(0, 12)}...` : name}
                  </div>
                  <small>
                    {occupation[0].length > 10
                      ? `${occupation[0].slice(0, 10)}...`
                      : occupation[0]}
                  </small>
                  |{' '}
                  <span className='fs-6 text-secondary'>
                    {nickname.length > 8
                      ? `${nickname.slice(0, 8)}...`
                      : nickname}
                  </span>
                </div>
              </div>
              <div
                className={`badge ${styles.badge} ${
                  status === 'Alive'
                    ? 'bg-success'
                    : status === 'Deceased'
                    ? 'bg-danger'
                    : status === 'Presumed dead'
                    ? 'bg-info'
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

export default BreakingBadCards
