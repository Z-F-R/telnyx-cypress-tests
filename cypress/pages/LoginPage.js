class LoginPage {

    // Locators
    loginTitleSelector = '[data-testid="login.signin.title"]'

    getLoginTitle() {
        return cy.get(this.loginTitleSelector)
    }

    // Actions
}

export default new LoginPage();