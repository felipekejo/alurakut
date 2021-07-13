import { useState } from "react";


import { Link } from '../Link'
import { AlurakutMenuProfileSidebar } from '../AlurakutMenuProfileSidebar'

import { Logo, Wrapper } from './styles'

interface AlurakutMenuProps {
  githubUser: string;
}

export function AlurakutMenu({ githubUser }: AlurakutMenuProps) {
  const [isMenuOpen, setMenuState] = useState(false);
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <Logo src="/logo.svg" />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/' }, { name: 'Amigos', slug: '/amigos' }, { name: 'Comunidades', slug: '/comunidades' }].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src="menu-open.svg" />}
          {!isMenuOpen && <img src="menu-closed.svg" />}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={githubUser} />
    </Wrapper>
  )
}