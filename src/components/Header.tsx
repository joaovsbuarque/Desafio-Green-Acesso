import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/characters">Mostrar todos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
