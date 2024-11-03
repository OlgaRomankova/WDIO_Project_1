describe('Demo Tests', function () {
    it('My First Test', async () => {
      await browser.url('https://google.com');
      $('[name="q"]').setValue('WebdriverIO');
       $('[name="btnK"]').click();
      browser.pause(2000)
    });
});
