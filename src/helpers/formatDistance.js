import { formatDistanceToNow } from 'date-fns'


export const formatDistance = (data) => {
  return  formatDistanceToNow(
    new Date(data)
  )
}
