import Config from '../config';

describe('Correct Config', () => {
  it('uses a valid API URL', async () => {
    expect(Config.apiUrl).toMatch('http://movienight-api.joestrong.co.uk');
  });
});
