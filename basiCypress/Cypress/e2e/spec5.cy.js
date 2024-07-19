describe("Handling web tables", function (){
    it("should handle web tables", function (){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($e1, index,$list)=>{

            const text= $e1.text();
            if(text.includes("Python"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price){
                    const priceText= price.text();
                    expect(priceText).to.equal('25');
                })
            }


        })
    })


})