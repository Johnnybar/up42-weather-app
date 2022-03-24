describe("Click functionality", () => {
  it("should add background color to hour after clicking it", () => {
    cy.visit("/");

    cy.get(".weather-app__hour-view").first().click({ force: true });
    cy.get(`.weather-app__hour-view`)
      .first()
      .should("have.class", "weather-app__hour-view--selected");
  });
});
