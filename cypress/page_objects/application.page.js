class ApplicationPage {
    get inputResumeUpload() {return cy.get('input#resume-upload-input');}
    get analyzingResumeMessage() {return cy.contains('Analyzing resume...');}
    get inputName() {return cy.get('input[data-qa="name-input"]');}
    get inputEmail() {return cy.get('input[data-qa="email-input"]');}
    get inputPhone() {return cy.get('input[data-qa="phone-input"]');}
    get inputOrganization() {return cy.get('input[data-qa="org-input"]');}
    get inputLinkedIn() {return cy.get('input[name="urls[LinkedIn]"]');}
    get inputGitHub() {return cy.get('input[name="urls[GitHub]"]');}
    get additionalInfo() {return cy.get(".application-additional");}
}

export default new ApplicationPage();