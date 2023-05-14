import getDateFromTimestamp  from './getDateFromTimestamp';

describe('getDateFromTimestamp', () => {
    it('should return date', () => {
        const date = getDateFromTimestamp(1620000000000);
        expect(date).toEqual("2021-05-03T00:00:00.000Z");
    });
    }
);