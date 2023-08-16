describe('template spec', () => {
  it('should change url to /pokemons?limit=10&offset=0', () => {
    cy.visit('http://localhost:3000/pokemons?limit=10&offset=0');
    cy.url().should('eq', 'http://localhost:3000/pokemons?limit=10&offset=0'); // => true
  });

  it('should  catch pokemon after clickling empty pokeball', () => {
    cy.visit('http://localhost:3000/pokemons?limit=10&offset=0');
    cy.get('[data-testid=avatar-img').click({ multiple: true });
  });

  it('should navigate to pokemon details if clicked on specify pokemon', () => {
    cy.visit('http://localhost:3000/pokemons?limit=10&offset=0');
    cy.contains('bulbasaur').click();
    cy.url().should('eq', 'http://localhost:3000/pokemons/bulbasaur'); // => true
  });

  it('should navigate to next page', () => {
    cy.visit('http://localhost:3000/pokemons?limit=10&offset=0');
    cy.contains('Next').click();
    cy.url().should('eq', 'http://localhost:3000/pokemons?offset=10&limit=10'); // => true
  });

  it('should navigate to prev page', () => {
    cy.visit('http://localhost:3000/pokemons?offset=10&limit=10');
    cy.contains('Prev').click();
    cy.url().should('eq', 'http://localhost:3000/pokemons?offset=0&limit=10'); // => true
  });
});
