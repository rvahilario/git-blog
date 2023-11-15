type IssueType = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: UserType
  // labels: any[] // Pode ser mais específico dependendo da estrutura real dos labels
  state: string
  locked: boolean
  // assignee: any // Pode ser mais específico dependendo da estrutura do assignee
  // assignees: any[] // Pode ser mais específico dependendo da estrutura real dos assignees
  // milestone: any // Pode ser mais específico dependendo da estrutura real do milestone
  comments: number
  created_at: string
  updated_at: string
  closed_at: string | null
  // author_association: string
  // active_lock_reason: string | null
  body: string
  // closed_by: any // Pode ser mais específico dependendo da estrutura real do closed_by
  // reactions: Reactions
  timeline_url: string
  // performed_via_github_app: any // Pode ser mais específico dependendo da estrutura real
  // state_reason: string | null
}

type Reaction = {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

type RepositoriesType = {
  total_count: number
  incomplete_results: boolean
  items: IssueType[]
}
