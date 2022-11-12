class HomePage {
  Selectors = {
    searchField: () => cy.get("#searchTerm"),
  };

  search(keyword: string) {
    this.Selectors.searchField().clear().type(keyword).type("{enter}");
  }
}

export const homePage = new HomePage();
