import { getLocationsFromProcessArguements } from './utils'
import { getWeatherDataForMultipleLocations } from './weather'
import { getCurrentTime } from './currentTime'

const main = async () => {
  const arguementsArray = process.argv.slice(2)
  const locations = getLocationsFromProcessArguements(arguementsArray)
  const data = await getWeatherDataForMultipleLocations(locations)
  const dataWithCurrentTime = data.map(city => ({ ...city, currentTime: getCurrentTime(city.timezone)}))
  console.log(dataWithCurrentTime)
}

main()
