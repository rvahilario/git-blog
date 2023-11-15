import styled from 'styled-components'
import { formatDistanceToNow } from 'date-fns'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'

type PostTitleProps = {
  title: string
  url: string
  user: string
  date: Date
  comments: number
}

export function PostHeader({
  title,
  url,
  user,
  date,
  comments,
}: PostTitleProps) {
  return (
    <Container>
      <Header>
        <a href={'/'} rel="noreferrer">
          <CaretLeft weight="bold" /> BACK
        </a>
        <a target="_blank" href={url} rel="noreferrer">
          VIEW ON GITHUB <ArrowSquareOut weight="bold" />
        </a>
      </Header>
      <InfoDiv>
        <h2>{title}</h2>
        <InfoFooter>
          <span>
            <GithubLogo weight="fill" />
            {user}
          </span>
          <span>
            <CalendarBlank weight="fill" />
            {formatDistanceToNow(date, { addSuffix: true })}
          </span>
          <span>
            <ChatCircle weight="fill" />
            {`${comments} comments`}
          </span>
        </InfoFooter>
      </InfoDiv>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  gap: 1.25rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3;
  }

  > a {
    display: flex;
    height: fit-content;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    line-height: 1;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
  }
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`

const InfoFooter = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  height: 100%;

  > span {
    display: flex;
    justify-content: center;
    align-items: stretch;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 400;
    line-height: 1.6;
    > svg {
      color: ${({ theme }) => theme['base-label']};
      font-size: 1.425rem;
      margin-right: 0.5rem;
    }
  }
`
