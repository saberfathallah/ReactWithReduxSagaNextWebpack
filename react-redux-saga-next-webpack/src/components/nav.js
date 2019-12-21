import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/home">
          <p>Home</p>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
