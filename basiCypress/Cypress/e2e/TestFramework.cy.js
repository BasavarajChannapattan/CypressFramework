
import homePage from "../e2e/pageObjects/homePage.cy";
import prouctPage from "../e2e/pageObjects/ProductPage.cy";



const baseUrl="https://rahulshettyacademy.com/angularpractice/"
describe('TestFrameWork', function()
{
    before("Setup", function (){

        cy.fixture('example').then(function  (data){

            this.data=data;
        })
    })
    it('My FirstTest case',function() {
        let HomePage;
        HomePage = new homePage();
        const ProductPage = new prouctPage();

        cy.visit(Cypress.env('url')+"/angularpractice");
        HomePage.getEditBox().type(this.data.name);
        HomePage.getGender().select(this.data.gender);
        HomePage.getTwoWayDataBinding().should('have.value', this.data.name);
        HomePage.getEnterprenureButton().should('be.disabled');
        HomePage.getShopTab().click();

        Cypress.config('defaultCommandTimeout', 8000);

        this.data.productName.forEach(function (item){
            cy.selectProduct(item)
        })
var sum =0;
        ProductPage.checkOutButton().click();
        cy.get("tr td:nth-child(4) strong").each(($e1, index, list)=>{
         const amount=$e1.text()
            var res= amount.split(" ");
           res= res[1].trim()
           sum= Number(sum)+ Number(res)
        }).then(function (){
            cy.log(sum)

        })
        cy.get("h3 strong").then(function (element){
            const amount=element.text()
            var res= amount.split(" ");
            res= res[1].trim()
            const result= parseFloat(res);
            expect(result).to.eql(sum);

        })
        cy.contains("Checkout").click();
        cy.get('#country').type("India");
        cy.get('.suggestions > ul > li > a').click();
        cy.get('.checkbox').click();
        cy.get("input[type='submit']").click();

        cy.get('.alert').then(function (element){
            const actualText= element.text();
           expect(actualText.includes("Success!")).to.be.true;
        })

    })

})