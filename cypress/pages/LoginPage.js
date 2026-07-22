class LoginPage {

    // Locators
    loginTitle() {
        return cy.get('[data-testid="login.signin.title"]')
    }

    // Actions
}

export default new LoginPage();