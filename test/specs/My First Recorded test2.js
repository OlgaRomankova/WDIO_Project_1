describe("Recorded Login Test", () => {
  it("tests Recorded Login Test", async () => {
    await browser.maximizeWindow();
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("button[type='submit']").click();
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
  //   await browser.$("aria/Logout").click()
  //   await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
