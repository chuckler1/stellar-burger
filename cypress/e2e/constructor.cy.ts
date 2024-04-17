describe('Проверяем конструктор', () => {
  const baseURL = 'http://localhost:4000';
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', {
      fixture: 'ingredients.json'
    }).as('getIngredients');

    cy.intercept('POST', '/api/orders', {
      fixture: 'orders.json'
    }).as('postOrder');

    cy.intercept('GET', '/api/auth/user', {
      fixture: 'user.json'
    }).as('checkAuth');

    cy.setCookie('accessToken', 'testToken');
    localStorage.setItem('refreshToken', 'testRefreshToken');
  });

  it('Добавление ингредиента в конструктор', () => {
    cy.visit(baseURL);
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa093c"]').contains('Добавить').click();
    cy.get('.constructor-element').contains('Краторная булка');
  });

  it('Проверяем модальное окно ингредиента', () => {
    cy.visit(baseURL);
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa093c"]')
      .contains('Краторная булка')
      .click();
    cy.get('li').contains('Калории, ккал');
    cy.get('[data-cy="modal-close"]').click();
    cy.get('li').contains('Калории, ккал').should('not.exist');
  });

  it('Проверяем создание заказа', () => {
    cy.visit(baseURL);
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa093c"]')
      .contains('Добавить')
      .click();
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa0941"]')
      .contains('Добавить')
      .click();
    cy.get('[data-cy="ingredient-643d69a5c3f7b9001cfa093e"]')
      .contains('Добавить')
      .click();
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('38237');
    cy.get('[data-cy="modal-close"]').click();
    cy.contains('Выберите булки').should('be.visible');
    cy.contains('Выберите начинку').should('be.visible');
  });
});
