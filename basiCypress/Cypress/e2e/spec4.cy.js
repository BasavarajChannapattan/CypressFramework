describe("Handling child windows", function() {
    it("Should handle child windows", function (){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");

        // cy.get('#opentab').invoke('removeAttr','target').click();
        // cy.origin("https://www.qaclickacademy.com/",()=>{
        //     cy.get("#navbarSupportedContent a[href*='about']").click();
        //     cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ');
        //     cy.get('.breadcrumb-item a').should('have.text', 'Home').click();
        //  })

        cy.get('#opentab').then(function (e1){

            const url= e1.prop("href");
            cy.visit(url);
            cy.origin(url,()=>{
                cy.get("div .sub-menu-bar a[href*='about']").click();
            })
        })

    })
})