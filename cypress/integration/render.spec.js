describe("App", () => {
  it("should render with necessary elements", () => {
    cy.visit("/");
    cy.get(`.weather-app-top-view`).should("be.visible");

    cy.get(`.weather-app-top-view`)
      .children()
      .first()
      .should("have.class", "row");

    cy.get(`.weather-app-bottom-view`).should("be.visible");

    cy.get(`.weather-app-bottom-view`)
      .children()
      .first()
      .should("have.class", "weather-app-bottom-view__hour-list");
  });
});
