import {
  AppCard,
  Article,
  Layout,
  Paragraph,
  SetupComponent,
  Title
} from '@components'
import dataJson from '../../data.json'
import { useMediaQuery } from '@hooks'
import {
  Apps,
  Container,
  Content,
  Section,
  Setup,
  Wrapper
} from '@styles/tools'
import Head from 'next/head'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const Tools: NextPageWithLayout = () => {
  const { isMobile } = useMediaQuery()

  const { appsAndServices, setup } = dataJson

  return (
    <Container>
      <Head>
        <title>Tools | Érik Albuquerque</title>
      </Head>
      <Content>
        <Wrapper>
          <Title>Tools.</Title>

          <Section>
            <Paragraph isChildrenBold={false}>
              The <b>products</b>, <b>apps</b> and <b>services</b> I use on
              daily basis and life.
            </Paragraph>
          </Section>

          <Article title="Apps & services">
            <Paragraph>
              Some of the apps & services I use to keep track of my personal
              life.
            </Paragraph>

            <Apps>
              {appsAndServices.length > 0 &&
                appsAndServices.map((app) => (
                  <AppCard key={app.name} data={app} />
                ))}
            </Apps>
          </Article>

          <Article title="Setup" style={{marginTop: isMobile ? "1rem" : undefined}}>
            <Paragraph>
              My setup for designing, coding and some other things.
            </Paragraph>

            <Setup>
              {setup.length > 0 &&
                setup.map((component) => (
                  <SetupComponent key={component.title} data={component} />
                ))}
            </Setup>
          </Article>
        </Wrapper>
      </Content>
    </Container>
  )
}

Tools.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Tools
