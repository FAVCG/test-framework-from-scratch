class JobDetailsPage {
    get applyForThisJobLink() {return cy.contains("a", "Apply for this job");}
}

export default new JobDetailsPage();