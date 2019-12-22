import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/users">
          <p>Users</p>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
