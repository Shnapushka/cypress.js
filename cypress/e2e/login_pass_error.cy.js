describe('Логирование с кривым паролем', function () {
  it('Проверка с кривым паролем', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru'); 
       cy.get('#pass').type('ERRORPASSWORD');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
})