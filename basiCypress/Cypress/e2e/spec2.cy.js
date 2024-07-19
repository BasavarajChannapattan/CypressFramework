describe("Automation practice", function() {
    it("web element actions", function (){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        cy.get("#checkBoxOption1").check();
        cy.get("#checkBoxOption1").uncheck();


        //visble and unvisible
        cy.get('#displayed-text').should("be.visible");
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should("not.be.visible");
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should("be.visible");


        //static dropowns
        cy.get('select').select('option2').should('have.value', 'option2');

        //dynamic dropdowns
        cy.get('#autocomplete').type('Chi');
cy.get('.ui-menu-item div').each(($e1, index, num)=>{

    if($e1.text()==="China")
    {
        cy.wrap($e1).click();
    }

})


        cy.get('#autocomplete').should('have.value', 'China');

  //radio buttons
        cy.get('input[value="radio1"]').should('have.value', 'radio1').check();

    })
})