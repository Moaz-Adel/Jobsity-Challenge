/// <reference types="cypress" />

import { feedbackPage } from "../pages/feedback-page";
import { sendFeedBackPage } from "../pages/send-feedback-page";
import { faker } from "@faker-js/faker";

const userName = faker.name.findName();
const userEmail = faker.internet.email();
const subject = faker.random.words(2);
const questions = faker.random.words(20);

describe("Feedback Form Tests", () => {
  beforeEach("Setup", () => {
    cy.visit("/feedback.html");
  });

  context("Happy Scenarios for submitting feedback form", () => {
    it("should submit feedback form successfully when entering all valid data", () => {
      feedbackPage.sendFeedBack(userName, userEmail, subject, questions);
      sendFeedBackPage.Selectors.feedbackTitle().should("be.visible");
      sendFeedBackPage.Selectors.confirmationMessage(userName).should(
        "be.visible"
      );
    });

    it("should clear all entered data when clicking on 'Clear' button", () => {
      feedbackPage.clearEntries(userName, userEmail, subject, questions);

      feedbackPage.Selectors.yourNameTextField().should("have.value", "");
      feedbackPage.Selectors.emailTextField().should("have.value", "");
      feedbackPage.Selectors.subjectTextField().should("have.value", "");
      feedbackPage.Selectors.commentTextField().should("have.value", "");
    });

    it("should clear any field of the entered values", () => {
      feedbackPage.clearEntries(userName, userEmail);
      feedbackPage.Selectors.yourNameTextField().should("have.value", "");
      feedbackPage.Selectors.emailTextField().should("have.value", "");
    });
  });
  context("Negative Scenarios of Feedback Form", () => {
    it("should display validation error message when missing 'User Name'", () => {
      feedbackPage.validateForm();
      feedbackPage.Selectors.yourNameTextField()
        .invoke("attr", "required")
        .should("exist");
      feedbackPage.Selectors.yourNameTextField().then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Please fill out this field."
        );
      });
    });

    it("should display validation error message when missing 'Email'", () => {
      feedbackPage.validateForm(userName);
      feedbackPage.Selectors.emailTextField().then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Please fill out this field."
        );
      });
    });

    it("should display validation error message when missing 'Subject'", () => {
      feedbackPage.validateForm(userName, userEmail);
      feedbackPage.Selectors.subjectTextField().then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Please fill out this field."
        );
      });
    });

    it("should display validation error message when missing 'Questions'", () => {
      feedbackPage.validateForm();
      feedbackPage.Selectors.commentTextField().then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Please fill out this field."
        );
      });
    });
  });
});
