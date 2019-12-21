import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
