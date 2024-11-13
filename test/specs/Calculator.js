describe('calculator', () => {
  it('tests calculator', async () => {
    await browser.maximizeWindow();
    await browser.url('https://cloud.google.com/products/calculator');
    await expect(browser).toHaveUrl(
      'https://cloud.google.com/products/calculator'
    );
    await browser.$("//span[text() = 'Add to estimate'][1]").click();
    await browser.$("//p[contains(text(),'A secure')]").click();

await browser.waitUntil(
  async () => {
    return (
      (await browser.getUrl()) ===
      'https://cloud.google.com/products/calculator'
    ); // или другой ожидаемый URL
  },
  { timeout: 10000, timeoutMsg: 'URL не изменился после клика по ссылке' }
);

    // await browser.url('https://cloud.google.com/products/calculator');
    await expect(browser).toHaveUrl(
      'https://cloud.google.com/products/calculator'
    );
const element = await browser.$('div.wX4xVc-Bz112c-RLmnJb');
// await element.waitForDisplayed({ timeout: 5000 }); // Ждем, пока элемент станет видимым
await element.click();

  });
});
