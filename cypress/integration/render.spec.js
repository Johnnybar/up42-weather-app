describe("App", () => {
  it("should render with necessary elements", () => {
    cy.visit("/");
    cy.get(`.weather-app__top-view`).should("be.visible");

    cy.get(`.weather-app__top-view`)
      .children()
      .first()
      .should("have.class", "row");

    cy.get(`.weather-app__bottom-view`).should("be.visible");

    cy.get(`.weather-app__bottom-view`)
      .children()
      .first()
      .should("have.class", "weather-app__bottom-view-hour-list");
  });
});
