class PricingPage {

    // Locators
    getPricingDescription() {
        return cy.get('section.section-pt-contrasting').find('p.typography-paragraph-lead')
    }

    // Actions
}

export default new PricingPage();