Feature: Enviar Solicitação de Abertura de Conta 

Eu como um possível cliente da Plataforma Grafeno Pagamentos,
desejo realizar uma solicitação de abertura de conta na página principal do site oficial da Grafeno
com objetivo de receber um contato do time comercial para iniciar meu cadastro na Plataforma da Grafeno. 

Scenario: Acessar Formulário de Solicitação  
    Given que eu acesse o site da Grafeno
    And clique em "Abra sua conta"
    When "preencher o formulário" com dados válidos
    Then receberei uma mensagem de sucesso "Obrigado por enviar o formulário. Entraremos em contato com você em breve!"
  
Scenario: Verificar obrigatoriedade do email 
    Given que eu acesse o site da Grafeno
    And clique em "Abra sua conta"
    When deixar o campo "email em branco"
    Then receberei a mensagem "Preencha todos os campos obrigatórios."