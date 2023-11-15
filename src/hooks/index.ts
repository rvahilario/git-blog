import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: (): Promise<RepositoryType> => api.getPosts(),
  })
}
