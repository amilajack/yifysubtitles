const got = require('got');

describe('bar', () => {
  test(`http://yifysubtitles.com should be alive`, async () => {
    const res = await got(`http://yifysubtitles.com`);
    expect(res.statusCode).toEqual(200);
  });
});
