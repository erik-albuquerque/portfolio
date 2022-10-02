import { ReactElement } from 'react'
import * as Ai from 'react-icons/ai'

type Icon = {
  name: string
}

const Icon: React.FC<Icon> = ({ name }) => {
  const icons: { [key: string]: ReactElement } = {
    Linkedin: <Ai.AiFillLinkedin size={24} color="#848484" />,
    Github: <Ai.AiFillGithub size={24} color="#848484" />,
    Twitter: <Ai.AiFillTwitterSquare size={24} color="#848484" />,
    Instagram: <Ai.AiFillInstagram size={24} color="#848484" />,
  }

  return icons[name]
}

export { Icon }
