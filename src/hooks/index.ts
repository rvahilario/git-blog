import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

const DEFAULT_STALE_TIME = 1000 * 60 // 1 minute

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => api.getUser(),
    staleTime: DEFAULT_STALE_TIME,
  })
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => api.getPosts(),
    staleTime: DEFAULT_STALE_TIME,
  })
}

export function usePostByNumber(postNumber: string) {
  return useQuery({
    queryKey: ['post', postNumber.toString()],
    queryFn: () => api.getPostByNumber(postNumber),
    staleTime: DEFAULT_STALE_TIME,
  })
}
