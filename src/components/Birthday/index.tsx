/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { Tooltip } from '@components'
import { useBirthday } from '@hooks'
import { getAge } from '@utils'
import { useEffect, useState } from 'react'
import { Container, Content, Trigger } from './styles'

type MessageBirthdayProps = {
  emoji: string
  text: string
}

const Birthday: React.FC = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false)

  const { isBirthday, isBirthdayLeft, birthdayMessage } = useBirthday()

  const [messageBirthday, setMessageBirthday] = useState<MessageBirthdayProps>(
    {} as MessageBirthdayProps
  )

  const yearsOld = getAge()

  const handleTooltip = (value: boolean) => setIsOpenTooltip(value)

  const data = [
    {
      emoji: '',
      text: '',
    },
    {
      emoji: '🎂',
      text: birthdayMessage,
    },
    {
      emoji: '🎉',
      text: 'Happy birthday to me!',
    },
  ]

  useEffect(() => {
    if (isBirthday) {
      setMessageBirthday(data[2])
    } else if (isBirthdayLeft) {
      setMessageBirthday(data[1])
    } else {
      setMessageBirthday(data[0])
    }
  }, [data, isBirthday, isBirthdayLeft, setMessageBirthday])

  return (
    <Container>
      <Content>
        <span>
          {`I'm`} <b>{yearsOld}</b> years.
        </span>

        <Tooltip
          open={isOpenTooltip}
          triggerChildren={
            <Trigger
              onClick={() => handleTooltip(!isOpenTooltip)}
              onMouseOver={() => handleTooltip(true)}
              onMouseLeave={() => handleTooltip(false)}
            >
              {messageBirthday.emoji}
            </Trigger>
          }
          children={
            <span style={{ fontSize: '14px' }}>{messageBirthday.text}</span>
          }
        />
      </Content>
    </Container>
  )
}

export { Birthday }
