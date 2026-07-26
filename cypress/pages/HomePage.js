class HomePage {

    // Locators
    getCookieBannerCloseButton() {
        return cy.get('#onetrust-close-btn-container button')
    }

    getCompanyLogo() {
        return cy.get('img[alt="Telnyx - Global Communications Platform Provider"]')
    }

    getHeaderMenu() {
        return cy.get('#main-menu')
    }

    getSignUpButton() {
        return cy.get('a[href="/sign-up"]:visible')
    }

    getLogInButton() {
        return cy.get('a[href="https://portal.telnyx.com"]:visible')
    }

    getPricingMenu() {
        return cy.contains('button', 'Pricing')
    }

    getViewAllPricingButton() {
        return cy.get('a[href="/pricing"]:visible')
    }

    getFooter() {
        return cy.get('#site-footer')
    }

    getMobileMenuButton() {
        return cy.get('button[aria-controls="main-menu-content"]')
    }

    getMobileMenu() {
        return cy.get('#main-menu')
    }

    getLinkedInLink() {
        return this.getFooter().find('svg[aria-describedby="linkedin"]').contains('LinkedIn').parents('a')
    }

    getXLink() {
        return this.getFooter().find('svg[aria-describedby="twitter"]').contains('Twitter').parents('a')
    }

    getFacebookLink() {
        return this.getFooter().find('svg[aria-describedby="facebook"]').contains('Facebook').parents('a')
    }

    // Actions
    visit() {
        cy.visit('/')
    }

    closeCookieBanner() {
        this.getCookieBannerCloseButton().click()
    }

    clickOnLogo() {
        this.getCompanyLogo().click()
    }

    clickSignUp() {
        this.getSignUpButton().click()
    }

    clickLogIn() {
        this.getLogInButton().invoke('removeAttr', 'target').click()
    }

    clickPricingMenu() {
        this.getPricingMenu().click()
    }

    clickViewAllPricing() {
        this.getViewAllPricingButton().click()
    }

    openMobileMenu() {
        this.getMobileMenuButton().click()
    }


}

export default new HomePage();