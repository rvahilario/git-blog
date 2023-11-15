import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { useUser } from '../hooks'

export function UserCard() {
  const { status, data, error } = useUser()

  return (
    <Container>
      {status === 'pending' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <Image src={data.avatar_url} alt={`Profile image of ${data.name}`} />
          <InfoDiv>
            <InfoHeader>
              <h2>{data.name}</h2>
              <NavLink to={data.html_url || ''} target="_blank">
                GITHUB <ArrowSquareOut weight="bold" />
              </NavLink>
            </InfoHeader>
            <UserBio>{data.bio}</UserBio>
            <InfoFooter>
              <p>
                <GithubLogo weight="fill" />
                {data.login}
              </p>
              {data.company && (
                <p>
                  <Buildings weight="fill" />
                  {data.company}
                </p>
              )}
              <p>
                <Users weight="fill" />
                {`${data.followers} followers`}
              </p>
            </InfoFooter>
          </InfoDiv>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 54rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  gap: 1.5rem;
`

const Image = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  margin: 0 0.5rem;
  border-radius: 8px;
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 0;
  gap: 0.5rem;
`

const InfoHeader = styled.div`
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
    line-height: 1;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
    > svg {
      margin-left: 0.5rem;
    }
  }
`

const UserBio = styled.p`
  color: ${({ theme }) => theme['base-text']};
  line-height: 1.6;
`

const InfoFooter = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  height: 100%;

  > p {
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
