class LoginPage {
  get usernameTextbox() {
    return $('#username');
  }
    
  get passwordTextBox() {
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
       await this.usernameTextbox.setValue(username)
       await this.passwordTextBox.setValue(password)
       await this.loginButton.click()
    }

    async checkMessage(msg) {
        expect(this.loginMessage).toContain(
            msg);
    }
}
