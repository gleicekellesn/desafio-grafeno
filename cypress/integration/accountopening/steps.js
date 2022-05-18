
Given(/^que eu acesse o site da Grafeno$/, () => {
	cy.visit("http://grafeno-stg-site-institucional.s3.sa-east-1.amazonaws.com/conta-digital-empresas.html#abertura-contas");
	cy.get('#hs-eu-confirmation-button').click({force: true});
});

And(/^clique em "([^"]*)"$/, (args1) => {
	cy.get('.col-lg-7 > .button').click({force: true});
});

When(/^"([^"]*)" com dados válidos$/, (args1) => {
    
	cy.get("#hs-form-iframe-0")
    .its("0.contentDocument.body")
    .then(cy.wrap)
	.as("iframe")
    .find('input[name="firstname"]')
    .type("Gleice Kelle");
	cy.get('@iframe').find('input[name="lastname"]').type("Santos Nascimento");
	cy.get('@iframe').find('input[name="email"]').type("santosgleicekelle@gmail.com");
	cy.get('@iframe').find('input[name="phone"]').type("73981559055");
	cy.get('@iframe').find('input[name="company"]').type("TechInside Desenvolvimento LTDA");
	cy.get('@iframe').find('input[name="cnpj"]').type("38297984000197");
	cy.get('@iframe').find('select').select('1 a 20');
	cy.get('@iframe').find('input[class="hs-button primary large"]').click({force: true});
	cy.get('.page > :nth-child(1)').should('be.visible');

});
Then(/^receberei uma mensagem de sucesso "([^"]*)"$/, (args1) => {
	cy.get("#hs-form-iframe-0")
    .its("0.contentDocument.body")
    .then(cy.wrap)
	.contains('Obrigado').should('be.visible');
});




Given(/^que eu acesse o site da Grafeno$/, () => {
	cy.visit("http://grafeno-stg-site-institucional.s3.sa-east-1.amazonaws.com/conta-digital-empresas.html#abertura-contas");
	cy.get('#hs-eu-confirmation-button').click({force: true});
});

And(/^clique em "([^"]*)"$/, (args1) => {
	cy.get('.col-lg-7 > .button').click({force: true});
});

When(/^deixar o campo "([^"]*)"$/, (args1) => {
	cy.get("#hs-form-iframe-0")
    .its("0.contentDocument.body")
    .then(cy.wrap)
	.as("iframe")
    .find('input[name="firstname"]')
    .type("Gleice Kelle");
	cy.get('@iframe').find('input[name="lastname"]').type("Santos Nascimento");
	cy.get('@iframe').find('input[name="phone"]').type("73981559055");
	cy.get('@iframe').find('input[name="company"]').type("TechInside Desenvolvimento LTDA");
	cy.get('@iframe').find('input[name="cnpj"]').type("38297984000197");
	cy.get('@iframe').find('select').select('1 a 20');
	cy.get('@iframe').find('input[class="hs-button primary large"]').click({force: true});
	cy.get('.page > :nth-child(1)').should('be.visible');
});

Then(/^receberei a mensagem "([^"]*)"$/, (args1) => {
	cy.get("#hs-form-iframe-0")
    .its("0.contentDocument.body")
    .then(cy.wrap)
	.contains('Preencha todos os campos obrigatórios.').should('be.visible');
});
