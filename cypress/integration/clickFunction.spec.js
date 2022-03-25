describe("Click functionality", () => {
  it("should add background color to last hour after clicking it", () => {
    cy.visit("/");

    cy.get(".weather-app-hour-view").last().click({ force: true });
    cy.get(`.weather-app-hour-view`)
      .last()
      .should("have.class", "weather-app-hour-view--selected");
  });
});
