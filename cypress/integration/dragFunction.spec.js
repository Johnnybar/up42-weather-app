describe("Drag to scroll", () => {
  it("should allow drag by scroll functionality", () => {
    cy.visit("/");
    cy.get(".scroll").scrollTo("500px");
  });
});
