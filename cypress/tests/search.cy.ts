/// <reference types="cypress" />

import { homePage } from "../pages/home-page";
import { searchResultsPage } from "../pages/search-results-page";

describe("Search Zero Bank Tests", () => {
  beforeEach("Setup", () => {
    cy.visit("/");
  });
  const existingKeyword = "Log in";
  const nonExistingKeyword = "Non Exist Keyword";

  context("Happy Scenarios of Search Functionality", () => {
    it("should return the matching results of the entered search query successfully", () => {
      homePage.search(existingKeyword);
      searchResultsPage.Selectors.searchResultsTitle().should("be.visible");
      searchResultsPage.Selectors.searchResultsResult(existingKeyword).should(
        "be.visible"
      );
    });
  });

  context("Negative Scenarios of Search Functionality", () => {
    it("should return empty list and message that no matching result with the entered keyword", () => {
      homePage.search(nonExistingKeyword);
      searchResultsPage.Selectors.searchResultsTitle().should("be.visible");
      searchResultsPage.Selectors.notMatchingResultResponse(
        nonExistingKeyword
      ).should("be.visible");
    });
  });
});
