import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [value, setValue] = useState<number>(0)
  const { pathname } = useRouter()
  const navLinks = [
    { name: 'Characters', url: '/' },
    { name: 'Episodes', url: '/episodes' },
    { name: 'Locations', url: '/locations' },
    { name: 'Breaking Bad', url: '/breakingBad' },
  ]
  useEffect(() => {
    navLinks.map((el, index) => {
      setValue((val) => (pathname === el.url ? index : val))
    })
  }, [pathname])

  return (
    <>
      <style jsx>{`
        .active {
          border-bottom: 3px solid #0b5ed7;
          font-weight: bold;
          color: #0b5ed7;
        }
        button[aria-expanded='false'] > .close {
          display: none;
        }
        button[aria-expanded='true'] > .open {
          display: none;
        }
      `}</style>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container'>
          <Link href='/'>
            <h1
              className='fs-3 navbar-brand my-2 ubuntu'
              style={{ cursor: 'pointer' }}
            >
              Rick & Morty <span className='text-primary'>Universe</span>
            </h1>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars open'></i>
            <i className='fas fa-times close'></i>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav'>
              {navLinks.map((link, index) => {
                return (
                  <Link key={index} href={link.url}>
                    <a
                      onClick={() => setValue(index)}
                      className={`nav-link ${index === value && 'active'}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
