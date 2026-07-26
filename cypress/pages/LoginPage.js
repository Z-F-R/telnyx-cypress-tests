class LoginPage {

    // Locators
    getLoginTitle() {
        return cy.get('[data-testid="login.signin.title"]')
    }

    // Actions
}

export default new LoginPage();