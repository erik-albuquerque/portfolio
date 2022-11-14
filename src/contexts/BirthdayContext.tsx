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

type MessageBirthdayProps = {
  emoji: string
  text: string
}

type BirthdayContextProps = {
  isBirthday: boolean
  isBirthdayLeft: boolean
  handleIsBirthDay: (value: boolean) => void
  birthdayMessageLeft: string
  birthdayMessage: MessageBirthdayProps
  emojis: string[]
}

type BirthdayContextProviderProps = {
  children: ReactNode
}

const BirthdayContext = createContext({} as BirthdayContextProps)

const BIRTHDAY_INTERVAL_MS = 3600000 // 1 hour

let birthdayInterval: NodeJS.Timer

const BirthdayContextProvider = ({
  children,
}: BirthdayContextProviderProps) => {
  const [isBirthday, setIsBirthday] = useState(false)
  const [isBirthdayLeft, setIsBirthdayLeft] = useState(false)

  const [birthdayMessageLeft, setBirthdayMessageLeft] = useState('')

  const [birthdayMessage, setMessageBirthday] = useState<MessageBirthdayProps>(
    {} as MessageBirthdayProps
  )

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

  const emojis = ['🎂', '🎉']

  const optionsTimeLeft = [
    'in about 1 month',
    'in 2 days',
    'in 3 days',
    'in 4 days',
    'in 5 days',
  ]

  const birthdayMessages = [
    {
      emoji: '',
      text: '',
    },
    {
      emoji: emojis[0],
      text: birthdayMessageLeft,
    },
    {
      emoji: emojis[1],
      text: 'Happy birthday to me!',
    },
  ]

  const handleMessage = useCallback(() => {
    if (isBirthday) {
      setMessageBirthday(birthdayMessages[2])
    } else if (isBirthdayLeft) {
      setMessageBirthday(birthdayMessages[1])
    } else {
      setMessageBirthday(birthdayMessages[0])
    }
  }, [isBirthday, isBirthdayLeft])

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
      
      setBirthdayMessageLeft(timeToBirthday)
    }, BIRTHDAY_INTERVAL_MS)

    return () => clearInterval(birthdayInterval)
  }, [birthday, currentDate])

  useEffect(() => {
    if (optionsTimeLeft.includes(birthdayMessageLeft)) {
      handleIsBirthDayLeft(true)
    } else {
      handleIsBirthDayLeft(false)
    }
  }, [birthdayMessageLeft, handleIsBirthDayLeft, optionsTimeLeft])

  useEffect(() => {
    handleMessage()

    return () => handleMessage()
  }, [handleMessage])

  return (
    <BirthdayContext.Provider
      value={{
        isBirthday,
        birthdayMessage,
        isBirthdayLeft,
        handleIsBirthDay,
        birthdayMessageLeft,
        emojis,
      }}
    >
      {children}
    </BirthdayContext.Provider>
  )
}

export { BirthdayContext, BirthdayContextProvider }
