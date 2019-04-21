const yifysubtitles = require('..');

describe('basic', () => {
  test('basic', async () => {
    await expect(
      yifysubtitles('tt1156398', { langs: ['fr', 'en', 'zh'], path: '/tmp' })
    ).resolves.toMatchSnapshot();
  });
});
