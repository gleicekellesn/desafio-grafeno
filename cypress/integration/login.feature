Feature: Login

    Eu como um usuário da Plataforma Grafeno Pagamentos, 
    desejo realizar login com a finalidade de ver todas as funcionalidades. 

Scenario: Login
    Given que eu acesse a página de login
    And insira "email e senha incorretos"
    When clicar em "Login"
    Then retornará uma "Modal de Login Incorreto"
    And a mensagem deve ser "E-mail, senha e/ou código de seguraça incorreto(s).Seu login será bloqueado após 5 tentativas incorretas."



