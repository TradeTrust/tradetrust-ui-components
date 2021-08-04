describe("Address Resolver - Buttons", () => {
  it("should show disabled add button when clicked, delete button should exit", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`
    );

    const getButtonAdd = () => cy.get("button:contains('Add')");

    getButtonAdd().click();
    getButtonAdd().should("be.disabled");
    cy.findByTestId("endpoint-entry-id").should("contain.text", "1");
    cy.get("button:contains('Delete')").click();
    cy.get("p").should("contain.text", "No third party's endpoint found.");
    getButtonAdd().should("not.be.disabled");
  });
});
