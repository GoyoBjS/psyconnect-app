import {
  extractDateFromTimestamp,
  extractDateTimeFromTimestamp,
  extractTimeFromTimestamp
} from './extractDateTimeFromTimestamp'

describe('getDateFromTimestamp', () => {
  it('should return full date', () => {
    const date = extractDateTimeFromTimestamp(1620000000)
    expect(date).toEqual('2021-04-03 02:00')
  })
  it('should return date', () => {
    const date = extractDateFromTimestamp(1620000000)
    expect(date).toEqual('2021-04-03')
  })
  it('should return time', () => {
    const date = extractTimeFromTimestamp(1620000000)
    expect(date).toEqual('02:00')
  })
})
