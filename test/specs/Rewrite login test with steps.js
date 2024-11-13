describe('Login Test', () => {
  it('should login and logout successfully', async () => {
    await browser.setWindowSize(727, 898);
    await browser.url('https://the-internet.herokuapp.com/login');

    // Проверяем URL
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');

    // Вводим имя пользователя
    const usernameField = await browser.$('#username');
    await usernameField.setValue('tomsmith');

    // Вводим пароль
    const passwordField = await browser.$('#password');
    await passwordField.setValue('SuperSecretPassword!');

    // Нажимаем на кнопку входа
    const loginButton = await browser.$("button[type='submit']");
    await loginButton.click();

    // Проверяем, что произошел переход на страницу secure
    await expect(browser).toHaveUrl(
      'https://the-internet.herokuapp.com/secure'
    );

    // Выходим из аккаунта
    const logoutButton = await browser.$('a.button.secondary.radius');
    await logoutButton.click();

    // Проверяем, что произошел возврат на страницу логина
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');
  });
});
