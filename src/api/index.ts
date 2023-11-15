import axios from 'axios'
import { BLOG_CONFIG } from '../blogConfig'

const GITHUB_API_URL = 'https://api.github.com'

export const api = {
  getUser: async (): Promise<UserType> => {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/users/${BLOG_CONFIG.github_user}`,
    )
    return data
  },

  getPosts: async (query?: string): Promise<RepositoryType> => {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/search/issues?q=${query || ''}+is:open repo:${
        BLOG_CONFIG.github_user
      }/${BLOG_CONFIG.repo_name}`,
    )
    return data
  },

  getPostByNumber: async (postNumber: string): Promise<IssueType> => {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/repos/${BLOG_CONFIG.github_user}/${BLOG_CONFIG.repo_name}/issues/${postNumber}`,
    )
    return data
  },
}
