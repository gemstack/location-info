# Problem Statement

Given an array of inputs (location name, postal code), log the current time and weather for those locations.

Example: "./weather New York, 10005, Tokyo, São Paulo, Pluto"

## Project Setup

- Run `yarn install`
- Create .env file and add api key from Open Weather Map in  `OPEN_WEATHER_API_KEY` variable.

## Run

To get weather and current time for the location, run the app by command `yarn run start ${comma separated locations array}`. 

For example, `yarn run start New York, 10005, Tokyo, Sao Paulo, Pluto`
