describe("Address Resolver - No endpoint", () => {
  it("should show only 1 row with no endpoint found text", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`
    );
    cy.get("p").should("contain.text", "No third party's endpoint found.");
  });
});
