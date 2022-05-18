Given(/^que eu acesse o site da Grafeno$/, () => {
	cy.visit('http://grafeno-stg-site-institucional.s3.sa-east-1.amazonaws.com/conta-digital-empresas.html#abertura-contas');
});

When(/^deseje acessar a "([^"]*)"$/, (operacaoDesejada) => {
    Cypress.env('operador', operacaoDesejada)
	});

When(/^clicar sobre "([^"]*)"$/, (args1) => {
    cy.get('#hs-eu-confirmation-button').click({force: true});
    cy.get(':nth-child(3) > #content-submenu').click({force: true});
    cy.get('.dropdown-menu > [href="/seguranca.html"]').click({force: true}); 
});

Then(/^terei acesso aos "([^"]*)"$/, (args1) => {
    cy.get('#menu-navegacao1').should('be.visible');
});
