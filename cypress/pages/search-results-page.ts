class SearchResultsPage {
  Selectors = {
    searchResultsTitle: () => cy.contains("h2", "Search Results:"),
    searchResultsResult: (searchKeyword: string) =>
      cy.contains("li > a", searchKeyword),
    notMatchingResultResponse: (searchKeyword: string) =>
      cy.contains(
        "div",
        `No results were found for the query: ${searchKeyword}`
      ),
  };
}

export const searchResultsPage = new SearchResultsPage();
