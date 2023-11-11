import styled from 'styled-components'
import { UserCard } from '../components/UserCard'

export function Home() {
  return (
    <Container>
      <UserCard />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
