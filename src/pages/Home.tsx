import { useState } from 'react'
import styled from 'styled-components'
import { UserCard } from '../components/UserCard'
import { RepoCard } from '../components/RepoCard'
import { usePosts } from '../hooks'

export function Home() {
  const { status, data, error } = usePosts()
  const [search, setSearch] = useState('')

  const posts = data?.items || []

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <Container>
      <UserCard />
      <SearchForm>
        <StyledLabel htmlFor="search">
          <h2>Posts</h2>
          <span>{`${'6'} posts`}</span>
        </StyledLabel>
        <StyledInput
          id="search"
          type="text"
          placeholder={'Search content'}
          onChange={handleSearch}
          value={search}
        ></StyledInput>
      </SearchForm>

      <Grid>
        {status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          posts
            .filter((post) => post.body !== null)
            .map((post) => <RepoCard key={post.id} post={post} />)
        )}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  margin-top: 4.5rem;
`

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.6;
  }

  > span {
    color: ${({ theme }) => theme['base-span']};
    text-align: right;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;
  }
`

const StyledInput = styled.input`
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-border']};
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  line-height: 1.6;

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus-visible {
    outline: none;
    border: 1px solid ${({ theme }) => theme.blue};
  }
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`
