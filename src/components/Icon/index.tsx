import * as Ai from 'react-icons/ai'

type Icon = {
  name: string
}

const Icon: React.FC<Icon> = ({ name }) => {
  const aiIcons = Object.values(Ai)

  const icons = aiIcons.filter((_, i) =>
    aiIcons[i].name.includes(`AiFill${name}`)
  )

  const SimpleIcon = icons[0]
  const IconSquare = icons[1]

  if (IconSquare) return <IconSquare size={24} color="#848484" />

  return <SimpleIcon size={24} color="#848484" />
}

export { Icon }
