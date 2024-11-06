const LoginPage = require('../pages/login.page');

describe('Demo Test', () => {
  it('Login Test', async () => {
    await browser.url('https://the-internet.herokuapp.com/login');
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    // await $('#username').setValue('tomsmith');
    // await $('#password').setValue('SuperSecretPassword!');
    // await $('button[type="submit"]').click();
    // const flashText = await $('#flash').getText();
    // expect(flashText).toContain(
    //   'You logged into a secure area!');
  });
});
