/// <reference types="cypress" />

class SendFeedbackPage {
  Selectors = {
    feedbackTitle: () => cy.contains("#feedback-title", "Feedback"),
    confirmationMessage: (name: string) => cy.contains("div", name),
  };
}

export const sendFeedBackPage = new SendFeedbackPage();
