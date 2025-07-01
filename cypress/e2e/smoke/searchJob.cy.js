/// <reference types="cypress" />
import userInfo from "../../fixtures/userData.json";
import applicationPage from "../../page_objects/application.page";
import currentOpeningsPage from "../../page_objects/current-openings.page";
import jobDetailsPage from "../../page_objects/job-details.page";
import jobTitles from "../../fixtures/jobTitles.json";

describe("Smoke Test: Apply for a role", () => {
  before(() => {
    cy.visit("/");
  });

  it("Filter team, select role, and apply", () => {
    currentOpeningsPage.filterByTeamButton.click();
    currentOpeningsPage.filterPopup.should("be.visible");
    currentOpeningsPage.teamCategoryLink.click();

    currentOpeningsPage.postTitleLink.each(($el) => {
      const title = currentOpeningsPage.postingName($el).text();

      if (title.includes(jobTitles.webDevelopment.fullStack)) {
        cy.wrap($el).click();
        jobDetailsPage.applyForThisJobLink.should("be.visible").click();
      }
    });

    applicationPage.inputResumeUpload.should("exist").should("have.attr", "type", "file");
    applicationPage.inputResumeUpload.attachFile("resume/testResume.docx");
    applicationPage.analyzingResumeMessage.should("exist");
    applicationPage.inputName.type(userInfo.user.fullName);
    applicationPage.inputEmail.type(userInfo.user.email);
    applicationPage.inputPhone.type(userInfo.user.phone);
    applicationPage.inputOrganization.type(userInfo.user.currentCompany);
    applicationPage.inputLinkedIn.type(userInfo.user.linkedIn);
    applicationPage.inputGitHub.type(userInfo.user.gitHub);
    applicationPage.additionalInfo.type(userInfo.user.additionalInfo);
  });
});
