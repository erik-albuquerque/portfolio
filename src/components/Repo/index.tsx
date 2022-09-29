import { Link } from '@components'
import { RepoProps } from '@types'
import { formatDate } from '@utils'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'
import {
  Container,
  Content,
  Description,
  Footer,
  ForkCount,
  Forked,
  Header,
  Language,
  License,
  StargazerCount,
  Updated
} from './styles'

const Repo: React.FC<RepoProps> = (data: RepoProps) => {
  const shortLicense =
    data.licenseInfo && data.licenseInfo.name.split(' ').slice(0, 1)

  const formattedDate = formatDate(data.updatedAt)

  return (
    <Container>
      <Content>
        <Header>
          <Link
            href={data.url}
            isTargetBlank
            {...{
              color: 'gray50',
            }}
          >
            <strong>{data.name}</strong>
          </Link>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00016 1.33331C4.32016 1.33331 1.3335 4.31998 1.3335 7.99998C1.3335 11.68 4.32016 14.6666 8.00016 14.6666C11.6802 14.6666 14.6668 11.68 14.6668 7.99998C14.6668 4.31998 11.6802 1.33331 8.00016 1.33331ZM2.66683 7.99998C2.66683 7.59331 2.72016 7.19331 2.80683 6.81331L5.9935 9.99998V10.6666C5.9935 11.4 6.5935 12 7.32683 12V13.2866C4.70683 12.9533 2.66683 10.7133 2.66683 7.99998ZM11.9268 11.6C11.7535 11.06 11.2602 10.6666 10.6602 10.6666H9.99349V8.66665C9.99349 8.29998 9.6935 7.99998 9.32683 7.99998H5.32683V6.66665H6.66016C7.02683 6.66665 7.32683 6.36665 7.32683 5.99998V4.66665H8.66016C9.3935 4.66665 9.99349 4.06665 9.99349 3.33331V3.05998C11.9468 3.84665 13.3335 5.76665 13.3335 7.99998C13.3335 9.38665 12.7935 10.6533 11.9268 11.6Z"
              fill="#F2F2F2"
            />
          </svg>
        </Header>

        {data.isForked && (
          <Forked>
            <span>Forked from</span>
            {data.parent && (
              <Link
                href={data.parent.url}
                isTargetBlank
                {...{
                  color: 'blue100',
                  fontSize: 'xs',
                }}
              >
                {data.parent.nameWithOwner}
              </Link>
            )}
          </Forked>
        )}

        {data.description && <Description>{data.description}</Description>}

        <Footer>
          {data.languages &&
            data.languages.map((language) => (
              <Language key={language.id}>
                <svg
                  style={{ color: language.color }}
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                >
                  <path
                    fillRule="evenodd"
                    fill={language.color}
                    d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                  ></path>
                </svg>

                <span>{language.name}</span>
              </Language>
            ))}
          {shortLicense && (
            <License>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path
                  fill="#848484"
                  fillRule="evenodd"
                  d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                ></path>
              </svg>
              <span>{shortLicense}</span>
            </License>
          )}

          {data.forkCount > 0 && (
            <ForkCount>
              <TbGitFork color="#848484" size={18} />
              <span>{data.forkCount}</span>
            </ForkCount>
          )}

          {data.stargazerCount > 0 && (
            <StargazerCount>
              <AiOutlineStar color="#848484" size={18} />
              <span>{data.stargazerCount}</span>
            </StargazerCount>
          )}

          {data.updatedAt && (
            <Updated>
              <span>Updated {formattedDate}</span>
            </Updated>
          )}
        </Footer>
      </Content>
    </Container>
  )
}

export { Repo }
