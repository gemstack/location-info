import 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import { getCurrentTime } from '../src/currentTime'

describe('getCurrentTime', () => {
  let clock
  let now

  beforeEach(() => {
    now = new Date()
    clock = sinon.useFakeTimers(now.getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('should return proper current Time for GMT:', () => {
    const timezone = 0
    const currentTime = getCurrentTime(timezone)
    const utcTime = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`
    expect(currentTime).to.deep.equal(utcTime)
  })

  it('should return proper current Time for +5:30:', () => {
    const timezone = 19800
    const currentTime = getCurrentTime(timezone)
    const min = now.getUTCMinutes() + 30 > 60 ? now.getUTCMinutes() - 30 : now.getUTCMinutes() + 30;
    const hours = now.getUTCMinutes() + 30 > 60 ? now.getUTCHours() + 6 : now.getUTCHours() + 5;
    const locationTime = `${hours}:${min}:${now.getUTCSeconds()}`
    expect(currentTime).to.deep.equal(locationTime)
  })

  it('should return proper current Time for -5:30:', () => {
    const timezone = -19800
    const currentTime = getCurrentTime(timezone)
    const min = now.getUTCMinutes() - 30 > 0 ? now.getUTCMinutes() - 30 : now.getUTCMinutes() + 30;
    const hours = now.getUTCMinutes() - 30 > 0 ? now.getUTCHours() - 5 : now.getUTCHours() - 6;
    const locationTime = `${hours}:${min}:${now.getUTCSeconds()}`
    expect(currentTime).to.deep.equal(locationTime)
  })
})
