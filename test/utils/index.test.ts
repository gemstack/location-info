import 'mocha'
import { expect } from 'chai'
import { getLocationsFromProcessArguements } from "../../src/utils"

describe('getLocationsFromProcessArguements', () => {
  it('should return proper locations:', () => {
    const arguements = ['New', 'York,', '110001,', 'London,', 'Sao', 'Paula']
    const locations = getLocationsFromProcessArguements(arguements)
    const expectedResult = ['New York', '110001', 'London', 'Sao Paula']
    expect(locations).to.deep.equal(expectedResult)
  })
})
