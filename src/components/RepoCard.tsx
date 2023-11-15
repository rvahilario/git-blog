import styled from 'styled-components'
import { format } from 'date-fns'

type RepoCardProps = {
  post: IssueType
}

export function RepoCard({ post }: RepoCardProps) {
  return (
    <Container>
      <Header>
        <h2>{post.title}</h2>
        <span>{format(new Date(post.created_at), 'dd/MM/yy')}</span>
      </Header>
      <PostBody>{post.body}</PostBody>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  gap: 1rem;

  > h2 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  > span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.6;
    min-width: fit-content;
  }
`

const PostBody = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  color: ${({ theme }) => theme['base-text']};
  line-height: 1.6;
`
