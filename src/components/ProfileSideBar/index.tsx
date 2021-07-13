
import { Box } from './styles'

interface ProfileSideBarProps {
  githubUser: string;
}

export function ProfileSideBar({ githubUser }: ProfileSideBarProps) {

  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} alt="" />
    </Box>
  )
}