import { PostHeader } from '../components/PostHeader'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remarkBreaks from 'remark-breaks'
import { ISSUE_MOCK } from '../mocks'

type BlogPostProps = {
  // post: IssueType // TODO: uncomment this line
}

export function BlogPost({}: BlogPostProps) {
  const post: IssueType = ISSUE_MOCK

  return (
    <>
      <PostHeader
        title={post.title}
        url={post.html_url}
        user={post.user.login}
        date={new Date(post.created_at)}
        comments={post.comments}
      />
      <Content>
        <StyledMarkdown
          remarkPlugins={[remarkGfm, remarkParse, remarkBreaks]}
          rehypePlugins={[rehypeReact]}
        >
          {post.body.toString()}
        </StyledMarkdown>
      </Content>
    </>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem 2rem;
`

const StyledMarkdown = styled(Markdown)`
  white-space: pre-wrap;
  color: ${({ theme }) => theme['base-text']};
  line-height: 1.6;
  a {
    color: ${({ theme }) => theme.blue};
  }
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`
