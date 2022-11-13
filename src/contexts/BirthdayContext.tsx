/* eslint-disable react-hooks/exhaustive-deps */
import { getDay, getMonth } from '@utils'

import { formatDistance } from 'date-fns'

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'

type BirthdayContextProps = {
  isBirthday: boolean
  isBirthdayLeft: boolean
  handleIsBirthDay: (value: boolean) => void
  birthdayMessage: string
}

type BirthdayContextProviderProps = {
  children: ReactNode
}

const BirthdayContext = createContext({} as BirthdayContextProps)

let birthdayInterval: NodeJS.Timer

const BirthdayContextProvider = ({
  children,
}: BirthdayContextProviderProps) => {
  const [isBirthday, setIsBirthday] = useState(false)
  const [isBirthdayLeft, setIsBirthdayLeft] = useState(false)

  const [birthdayMessage, setBirthdayMessage] = useState('')

  const currentDate = new Date()

  const birthday = new Date(`11/06/${new Date().getFullYear()} 5:40:00`)

  const birthdayDay = getDay(birthday)
  const currentDay = getDay(currentDate)

  const birthMonth = getMonth(birthday)
  const currentMonth = getMonth(currentDate)

  const handleIsBirthDay = useCallback(
    (value: boolean) => setIsBirthday(value),
    []
  )

  const handleIsBirthDayLeft = useCallback(
    (value: boolean) => setIsBirthdayLeft(value),
    []
  )

  const optionsTimeLeft = [
    'in about 1 month',
    'in 2 days',
    'in 3 days',
    'in 4 days',
    'in 5 days',
  ]

  useEffect(() => {
    if (birthMonth === currentMonth && currentDay === birthdayDay) {
      handleIsBirthDay(true)
    } else {
      handleIsBirthDay(false)
    }
  }, [birthMonth, birthdayDay, currentDay, currentMonth, handleIsBirthDay])

  useEffect(() => {
    birthdayInterval = setInterval(() => {
      const timeToBirthday = formatDistance(birthday, currentDate, {
        addSuffix: true,
      })
      
      setBirthdayMessage(timeToBirthday)
    }, 5000)

    return () => clearInterval(birthdayInterval)
  }, [birthday, currentDate])


  useEffect(() => {
    if (optionsTimeLeft.includes(birthdayMessage)) {
      handleIsBirthDayLeft(true)
    } else {
      handleIsBirthDayLeft(false)
    }
  }, [birthdayMessage, handleIsBirthDayLeft, optionsTimeLeft])

  return (
    <BirthdayContext.Provider
      value={{ isBirthday,isBirthdayLeft, handleIsBirthDay, birthdayMessage }}
    >
      {children}
    </BirthdayContext.Provider>
  )
}

export { BirthdayContext, BirthdayContextProvider }
