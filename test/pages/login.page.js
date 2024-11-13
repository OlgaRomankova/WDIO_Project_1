class LoginPage {
  get usernameTextbox() {
    return $('#username');
  }

  get passwordTextbox() {
    return $('#password');
  }

  get loginButton() {
    return $('button[type="submit"]');
  }
  get loginMessage() {
    return $('#flash');
  }

  // enterUsername() {  }
  // enterPassword() {  }
  // clickLogin() {  }

  async login(username, password) {
    await this.usernameTextbox.setValue(username);
    await this.passwordTextbox.setValue(password);
    await this.loginButton.click();
  }

  async checkMessage(msg) {
    const actualMessage = await this.loginMessage.getText(); // Получаем текст элемента
    expect(actualMessage).toContain(msg); // Проверяем текст на содержание
  }
}
module.exports = new LoginPage();
