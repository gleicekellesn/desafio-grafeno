Feature: SecurityPage

    Eu como um possível cliente da Plataforma Grafeno Pagamentos, 
    desejo acessar o site da Grafeno Pagamento e acessar a página de segurança 
    no menu Sobre a Grafeno>Segurança com o objetivo de entender mais sobre os 
    processos e procedimentos de segurança da Grafeno.

Scenario: Visualizar página de Segurança da Grafeno 
    Given que eu acesse o site da Grafeno
    And deseje acessar a "Página de Segurança"
    When clicar sobre "Sobre a Grafeno>Segurança" 
    Then terei acesso aos "processos e segurança da Grafeno"



