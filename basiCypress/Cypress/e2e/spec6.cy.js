
describe("Handling Mouse Over Events", function (){
    it("should handle mouse over", function (){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
     cy.get('div.mouse-hover-content').invoke('show');
     cy.contains('Top').click({force:true});
     cy.url().should('include', 'top');
    })


})