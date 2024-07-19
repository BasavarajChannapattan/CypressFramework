describe("POP_UP", function() {
    it("pop-ups", function (){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        cy.get('#alertbtn').click();
        //cypress auto accepts popups, cypress have capability to fetch alert

        //window:alert
        cy.on('window:alert',(str)=>{
            expect(str).eql("Hello , share this practice page and share your knowledge");
        })
        cy.wait(4000)
        cy.get('[value="Confirm"]').click();
        cy.on('window:confirm',(str2)=>{
            expect(str2).eql("Hello , Are you sure you want to confirm?");
        })



    })
})