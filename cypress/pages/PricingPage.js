class PricingPage {

    // Locators
    pricingDescription() {
        return cy.get('section.section-pt-contrasting').find('p.typography-paragraph-lead')
    }

    // Actions
}

export default new PricingPage();