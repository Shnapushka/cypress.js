describe('Логирование с кривым мылом', function () {
    it('Проверка с кривым мылом', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('433dsd@mail.ru'); 
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
  })