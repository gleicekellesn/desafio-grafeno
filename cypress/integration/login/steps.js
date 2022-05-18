
Given(/^que eu acesse a página de login$/, () => {
	cy.visit('https://pagamentos.grafeno.be/users/sign_in');
	});

When(/^insira "([^"]*)"$/, (args1) => {
	cy.get('#user_email').type('santosgleicekelle@gmail.com');
	cy.get('#user_password').type('123456');
});

When(/^clicar em "([^"]*)"$/, (args1) => {
	cy.get('.btn-primary').click({force:true});
});

Then(/^retornará uma "([^"]*)"$/, (args1) => {
	cy.get('#hs-eu-confirmation-button').click();
});


When(/^a mensagem deve ser "([^"]*)"$/, (args1) => {
	cy.contains('E-mail, senha e/ou código de segurança incorreto(s). Seu login será bloqueado após 5 tentativas incorretas.');

});
