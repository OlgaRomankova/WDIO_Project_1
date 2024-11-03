describe('Demo Tests', function () {
  it('My First Test', async () => {
    await browser.url('https://google.com');
    browser.pause(2000);
    await $('[name="q"]').setValue('WebdriverIO');
    await $('input[name="btnK"]').click();
   
    // await browser.waitUntil(
    //   async () => {
    //     return await $('input[name="btnK"]').isDisplayed(); // Ждем, пока кнопка станет доступной
    //   },
    //   { timeout: 2000, timeoutMsg: 'Кнопка поиска не доступна' }
    // );
    // await $('input[name="btnK"]').click();
  });
});
