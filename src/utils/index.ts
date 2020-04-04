export const getLocationsFromProcessArguements = (arguements: string[]): string[] => {
  const arguementsString = arguements.join(' ')
  const locations = arguementsString.split(',')
  return trimStringArray(locations)
}

const trimStringArray = strings => strings.map(singleString => singleString.trim())
