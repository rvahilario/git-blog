import { PostHeader } from '../components/PostHeader'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { usePostByNumber } from '../hooks'

import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeFormat from 'rehype-format'
import remarkParse from 'remark-parse'
import rehypeRaw from 'rehype-raw'

export function BlogPost() {
  const { postNumber } = useParams()
  const { status, data, error } = usePostByNumber(postNumber || '')

  return (
    <>
      {status === 'pending' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {console.log('data.body', data.body)}
          <PostHeader
            title={data.title}
            url={data.html_url}
            user={data.user.login}
            date={new Date(data.created_at)}
            comments={data.comments}
          />
          <Content>
            <StyledMarkdown
              skipHtml={false}
              remarkPlugins={[remarkGfm, remarkParse, remarkBreaks]}
              rehypePlugins={[rehypeRaw, rehypeFormat]}
            >
              {data.body.toString()}
            </StyledMarkdown>
          </Content>
        </>
      )}
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
  white-space: pre-line;
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
