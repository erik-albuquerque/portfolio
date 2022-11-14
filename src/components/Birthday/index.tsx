/* eslint-disable react/no-children-prop */
import { Tooltip } from '@components'
import { useBirthday } from '@hooks'
import { getAge } from '@utils'
import { useState } from 'react'
import { Container, Content, Trigger } from './styles'


const Birthday: React.FC = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false)

  const { birthdayMessage } = useBirthday()

  const yearsOld = getAge()

  const handleTooltip = (value: boolean) => setIsOpenTooltip(value)


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
              {birthdayMessage.emoji}
            </Trigger>
          }
          children={
            <span style={{ fontSize: '14px' }}>{birthdayMessage.text}</span>
          }
        />
      </Content>
    </Container>
  )
}

export { Birthday }
