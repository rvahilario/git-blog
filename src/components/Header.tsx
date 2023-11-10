import styled from 'styled-components'

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Logo src={logo} />
      <Title>GITHUB BLOG</Title>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 18.5rem;
  background: ${({ theme }) => theme['base-profile']};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -5.5rem;
`

const Logo = styled.img`
  height: 2.5rem;
  margin: 4rem auto 1.25rem;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.blue};
  font-family: 'Coda', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
`
