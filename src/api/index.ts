import axios from 'axios'
import { BLOG_CONFIG } from '../blogConfig'

const GITHUB_API_URL = 'https://api.github.com'

export const api = {
  getPosts: async (query?: string) => {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/search/issues?q=${query || ''}+is:open repo:${
        BLOG_CONFIG.github_user
      }/${BLOG_CONFIG.repo_name}`,
    )
    return data
  },
}
