describe("Address Resolver - Ordering", () => {
  it("first entry click up arrow should not move", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--default-address-resolver&args=&viewMode=story`
    );

    const getRowFirst = () => cy.findByTestId("endpoint-entry-row-1");
    getRowFirst().realHover().findByTestId("endpoint-entry-move-up").should("be.visible").click();
    getRowFirst().should("contain.text", "Demo 1");
  });

  it("first entry click down arrow should move down", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--default-address-resolver&args=&viewMode=story`
    );

    const getRowFirst = () => cy.findByTestId("endpoint-entry-row-1");
    getRowFirst().realHover().findByTestId("endpoint-entry-move-down").should("be.visible").click();
    getRowFirst().should("contain.text", "Demo 2");
  });

  it("second entry click arrow up should move up", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--default-address-resolver&args=&viewMode=story`
    );

    const getRowSecond = () => cy.findByTestId("endpoint-entry-row-2");
    getRowSecond().realHover().findByTestId("endpoint-entry-move-up").should("be.visible").click();
    getRowSecond().should("contain.text", "Demo 1");
  });
});
