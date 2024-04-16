describe('Проверяем конструктор', () => {
  const URL = 'https://norma.nomoreparties.space/api';
  it('Перехват запроса на получение списка ингредиентов', () => {
    cy.visit('localhost:4000');
    cy.intercept('GET', `${URL}/ingredients`, {
      fixture: 'ingredients.json'
    });
  });
});
