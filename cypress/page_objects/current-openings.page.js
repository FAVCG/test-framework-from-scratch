class CurrentOpeningsPage {
    get filterByTeamButton() {return cy.get('div[role="button"][aria-label="Filter by Team: All"]');}
    get filterPopup() {return cy.get('.filter-popup');}
    get teamCategoryLink() {return cy.contains("a.category-link", "Software Engineering");}
    get postTitleLink() {return cy.get("a.posting-title");}
    postingName($postElement) {
    return $postElement.find('[data-qa="posting-name"]');
    }
}

export default new CurrentOpeningsPage();