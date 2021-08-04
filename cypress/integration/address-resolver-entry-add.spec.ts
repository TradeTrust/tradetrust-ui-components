describe("Address Resolver - Entry add", () => {
  it("should show only 1 row with no endpoint found text", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`
    );

    const getInputName = () => cy.findByPlaceholderText("Name");
    const getInputEndpoint = () => cy.findByPlaceholderText("Endpoint");
    const getInputApiHeader = () => cy.findByPlaceholderText("API Header");
    const getInputApiKey = () => cy.findByPlaceholderText("API Key");

    cy.get("button:contains('Add')").click();

    getInputName().should("have.value", "");
    getInputName().type("Demo");
    getInputName().should("have.value", "Demo");

    getInputEndpoint().should("have.value", "");
    getInputEndpoint().type("https://demo-resolver.tradetrust.io/");
    getInputEndpoint().should("have.value", "https://demo-resolver.tradetrust.io/");

    getInputApiHeader().should("have.value", "");
    getInputApiHeader().type("x-api-key");
    getInputApiHeader().should("have.value", "x-api-key");

    getInputApiKey().should("have.value", "");
    getInputApiKey().type("DEMO");
    getInputApiKey().should("have.value", "DEMO");

    cy.get("button:contains('Save')").click();
    cy.findByTestId("edit-icon").click();

    cy.findByPlaceholderText("Name").type(" edited");
    getInputName().should("have.value", "Demo edited");
  });
});
