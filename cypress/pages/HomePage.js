class HomePage {

    headerItems = [
        'Products',
        'Solutions',
        'Pricing',
        'Why Telnyx',
        'Resources',
        'Developers'
    ]

    footerItems = [
        'Social',
        'Company',
        'Legal',
        'Compare',
        'Ask AI'
    ]

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
        return cy.get('a[href="/sign-up"]').first()
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

    linkedInIcon() {
        return this.getFooter().find('a[href="https://www.linkedin.com/company/telnyx"]')
    }

    xIcon() {
        return this.getFooter().find('a[href="https://x.com/telnyx"]')
    }

    facebookIcon() {
        return this.getFooter().find('a[href="https://www.facebook.com/Telnyx/"]')
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