import { getRequests } from './utils/request'

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

if (!OPEN_WEATHER_API_KEY) throw Error(`OPEN_WEATHER_API_KEY not defined!`)

const openWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getURLForCurrentWeather = (location: string): string => `${openWeatherBaseUrl}?q=${location}&appid=${OPEN_WEATHER_API_KEY}&units=metric`

interface ResponseData {
  name: string;
  timezone: number;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
}

interface ParsedData {
  city: string;
  timezone: number;
  weather: {
    temp: number,
    tempMax: number,
    tempMin: number,
    humidity: number,
    pressure: number,
    description: string;
  };
}

interface ErrorData {
  city: string;
  error: string;
}

const dataParser = (data: ResponseData): ParsedData => ({
  city: data.name,
  weather: {
    temp: data.main.temp,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    description: data.weather[0].description,
  },
  timezone: data.timezone,
})

const getWeatherDataForLocation = async (location: string): Promise<ParsedData | ErrorData> => {
  const currentWeatherUrl = getURLForCurrentWeather(location)
  try {
    const response = await getRequests(currentWeatherUrl)
    const data = dataParser(response.data)
    return data
  } catch (error) {
    console.log(error.response)
    return { city: location, error: 'City Not Found!'}
  }
}

export const getWeatherDataForMultipleLocations = async (locations: string[]): Promise<ParsedData[]> => {
  const data = []
  let i = 0
  for ( i = 0; i< locations.length; i++){
    const result = await getWeatherDataForLocation(locations[i])
    data.push(result)
  }
  return data
}
