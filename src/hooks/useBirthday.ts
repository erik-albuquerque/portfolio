import { BirthdayContext } from '@contexts'
import { useContext } from 'react'

const useBirthday = () => {
  const context = useContext(BirthdayContext)

  return context
}

export { useBirthday }
