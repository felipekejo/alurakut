import Head from 'next/head'
import { MainGrid, Box, ProfileRelationsBoxWrapper } from '../../styles/pages/Homes'
import { ProfileSideBar } from '../components/ProfileSideBar'
import { AlurakutMenu } from '../components/AlurakutMenu'
import { OrkutNostalgicIconSet } from '../components/OrkutNostalgicIconSet'

export default function Home() {

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]
  const githubUser = "felipekejo"
  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea">
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>


          </ProfileRelationsBoxWrapper>

        </div>

      </MainGrid>

    </>
  )
}
