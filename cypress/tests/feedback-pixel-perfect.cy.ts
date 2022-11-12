/// <reference types="cypress" />

describe("Home Page Pixel-perfect Test (Visual Validation)", () => {
  before("Setup", () => {
    cy.visit("/");
  });
  context("Pixel-Perfect test (Visual Validation)", () => {
    it("Should validate the pixel-perfect of the page on Chrome at view port 1200", () => {
      cy.eyesOpen({
        appName: "Jobsity TestChallenge Zero Bank",
        testName: Cypress.currentTest.title,
      });
      cy.eyesCheckWindow("Base Home Page");
    });
  });

  after("TearDown", () => {
    //cy.eyesClose - close the eyes for take screenshots
    cy.eyesClose();
  });
});
