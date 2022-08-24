import { formatDistanceToNowStrict } from 'date-fns'
const formatDate = (date: string) => {
  const newDate = formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  })
  return newDate
}

export { formatDate }
