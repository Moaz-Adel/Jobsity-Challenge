/// <reference types="cypress" />

class FeedbackPage {
  Selectors = {
    yourNameTextField: () => cy.get("#name"),
    emailTextField: () => cy.get("#email"),
    subjectTextField: () => cy.get("#subject"),
    commentTextField: () => cy.get("#comment"),
    sendMessageBtn: () => cy.get(".btn-signin"),
    clearBtn: () => cy.get('[type="reset"]'),

    //Form Validations
    nameFieldValidation: () => cy.get,
  };

  sendFeedBack(
    name?: string,
    email?: string,
    subject?: string,
    questions?: string
  ) {
    if (name) this.Selectors.yourNameTextField().type(name);
    if (email) this.Selectors.emailTextField().type(email);
    if (subject) this.Selectors.subjectTextField().type(subject);
    if (questions) this.Selectors.commentTextField().type(questions);
    this.Selectors.sendMessageBtn().click();
  }

  clearEntries(
    name?: string,
    email?: string,
    subject?: string,
    questions?: string
  ) {
    if (name) this.Selectors.yourNameTextField().type(name);
    if (email) this.Selectors.emailTextField().type(email);
    if (subject) this.Selectors.subjectTextField().type(subject);
    if (questions) this.Selectors.commentTextField().type(questions);
    this.Selectors.clearBtn().click();
  }

  validateForm(
    name?: string,
    email?: string,
    subject?: string,
    questions?: string
  ) {
    if (name) this.Selectors.yourNameTextField().type(name);
    if (email) this.Selectors.emailTextField().type(email);
    if (subject) this.Selectors.subjectTextField().type(subject);
    if (questions) this.Selectors.commentTextField().type(questions);
    this.Selectors.sendMessageBtn().click();
  }
}

export const feedbackPage = new FeedbackPage();
