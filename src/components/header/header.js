import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
        <header>
        <nav>
          <img />
          <Link href='/'>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/about'>About</Link>
        </nav>
      </header>
  )
}

export default Header