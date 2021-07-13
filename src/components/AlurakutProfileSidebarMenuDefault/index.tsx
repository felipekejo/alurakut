
import { Wrapper } from './styles'

export function AlurakutProfileSidebarMenuDefault() {
  return (
    <Wrapper>
      <nav>
        <a href="/">
          <img src='/user.svg' />
          Perfil
        </a>
        <a href="/">
          <img src='/book.svg' />
          Recados
        </a>
        <a href="/">
          <img src='/camera.svg' />
          Fotos
        </a>
        <a href="/">
          <img src='/sun.svg' />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src='/plus.svg' />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src='/logout.svg' />
          Sair
        </a>
      </nav>
    </Wrapper>
  )
}