import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

describe("Desktop layout", () => {

    beforeEach(() => {
        HomePage.visit()
        HomePage.closeCookieBanner()
    });

    it("TC-001 Verify Home page loads successfully", () => {
        cy.url().should('eq', 'https://telnyx.com/')
    });

    it("TC-002 Verify company logo is displayed and clickable", () => {
        HomePage.getCompanyLogo().should('be.visible')
        HomePage.clickOnLogo()
        cy.url().should('eq', 'https://telnyx.com/')
    });

    it("TC-003 Verify header elements are displayed", () => {
        HomePage.getHeaderMenu().should('be.visible')
        cy.fixture('navigation').then((navigation) => {
            navigation.headerItems.forEach((item) => {
                HomePage.getHeaderMenu().contains(item).should('be.visible');
            });
        });
    });

    it("TC-004 Verify 'Sign up' button is displayed and clickable", () => {
        HomePage.getSignUpButton().should('be.visible')
        HomePage.clickSignUp()
        cy.url().should('include', '/sign-up')
        SignUpPage.createAccountTitle().should('be.visible')
    });

    it("TC-005 Verify 'Log in' button is displayed and clickable", () => {
        HomePage.getLogInButton().should('be.visible')
        HomePage.clickLogIn()
        cy.url().should('include', 'portal.telnyx.com')
        cy.origin('https://portal.telnyx.com', () => {
            cy.get('[data-testid="login.signin.title"]')
                .should('contain', 'Welcome Back')
        })
    });

    it("TC-006 Verify Pricing page is opened", () => {
        HomePage.getPricingMenu().should('be.visible')
        HomePage.clickPricingMenu()
        HomePage.getViewAllPricingButton().should('be.visible')
        HomePage.clickViewAllPricing()
        cy.url().should('include', '/pricing')
        PricingPage.pricingDescription().should('be.visible')
    });

    it("TC-007 Verify footer elements are displayed", () => {
        HomePage.getFooter().scrollIntoView().should('be.visible')
        cy.fixture('navigation').then((navigation) => {
            navigation.footerItems.forEach((item) => {
                HomePage.getFooter().contains(item).should('be.visible');
            });
        });
    });

    it("TC-009 Verify social media icons and links correctness", () => {
        HomePage.getFooter().scrollIntoView().should('be.visible')
        cy.fixture("navigation").then((navigation) => {
            HomePage.linkedInIcon().should("be.visible").and("have.attr", "href", navigation.socialLinks.linkedin);
            HomePage.xIcon().should("be.visible").and("have.attr", "href", navigation.socialLinks.x);
            HomePage.facebookIcon().should("be.visible").and("have.attr", "href", navigation.socialLinks.facebook);
        });
    });

    it('TC-010 Verify page title', () => {
        cy.title().should('eq', 'Telnyx—Voice AI Agents with Built-In Global Telco Infrastructure')
    })
})

describe("Mobile layout", () => {

    beforeEach(() => {
        cy.viewport(430, 932)
        HomePage.visit()
        HomePage.closeCookieBanner()
    });

    it("TC-008 Verify mobile navigation menu", () => {
        HomePage.getMobileMenu().should('have.attr', 'data-state', 'close')
        HomePage.getMobileMenuButton().should('be.visible')
        HomePage.openMobileMenu()
        HomePage.getMobileMenu().should('have.attr', 'data-state', 'open')
    });
})