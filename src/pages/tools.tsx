import { AppCard, Article, Layout, SetupComponent, Title } from '@components'
import { appsAndServices, setup } from '@constants'
import Head from 'next/head'
import { ReactElement } from 'react'
import {
  Apps,
  Container,
  Content,
  Paragraph,
  Section,
  Setup,
  Wrapper
} from '../styles/tools'
import { NextPageWithLayout } from './_app'

const Tools: NextPageWithLayout = () => {
  return (
    <Container>
      <Head>
        <title>Tools | Érik Albuquerque</title>
      </Head>
      <Content>
        <Wrapper>
          <Title>Tools.</Title>

          <Section>
            <Paragraph>
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

          <Article title="Setup">
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
