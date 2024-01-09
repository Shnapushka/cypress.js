describe('Логирование', function () {
  it('Проверка логина', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru'); 
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
})