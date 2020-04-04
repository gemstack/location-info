import 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import { getWeatherDataForMultipleLocations } from '../src/weather'
import request from '../src/utils/request'
import mockDataLondon from './mockData/london.json'

describe('getWeatherDataForMultipleLocations', () => {

  let getRequestsStub

  beforeEach(() => {
    getRequestsStub = sinon.stub(request, 'get');
  });

  afterEach(() => {
    getRequestsStub.restore();
  });

  it('should return proper current Time for GMT:', async () => {
    getRequestsStub.returns(Promise.resolve({ data: mockDataLondon }));
    const weatherAndTimeData = await getWeatherDataForMultipleLocations(['London'])
    const expectedData = [
      {
        city: 'London',
        timezone: 3600,
        weather: {
          description: 'clear sky',
          humidity: 58,
          pressure: 1021,
          temp: 12.2,
          tempMax: 13.89,
          tempMin: 9.44,
        }
      }
    ]
    expect(weatherAndTimeData).to.deep.equal(expectedData)
  })
})
