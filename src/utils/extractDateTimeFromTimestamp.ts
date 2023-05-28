export const extractDateTimeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp)
  return (
    date.getUTCFullYear() +
    '-' +
    ('0' + date.getUTCMonth()).slice(-2) +
    '-' +
    ('0' + date.getUTCDate()).slice(-2) +
    ' ' +
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2)
  )
}

export const extractDateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp)
  return (
    date.getUTCFullYear() +
    '-' +
    ('0' + (date.getUTCMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getUTCDate()).slice(-2)
  )
}

export const extractTimeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp)
  return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
}
