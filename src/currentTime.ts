export const getCurrentTime = (timezone: number): string => {
  const utcTimeInMilliseconds = (new Date()).getTime()
  const timezoneMilliseconds = timezone * 1000
  const timeInTimezone = utcTimeInMilliseconds + timezoneMilliseconds
  const date = new Date(timeInTimezone)
  return `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
}
