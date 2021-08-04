describe("Address Resolver - Error", () => {
  it("Address Resolver should show the correct error messages on save", () => {
    cy.visit(
      `http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`
    );

    const getButtonAdd = () => cy.get("button:contains('Add')");
    const getButtonSave = () => cy.get("button:contains('Save')");
    const getInputName = () => cy.findByPlaceholderText("Name");
    const getInputEndpoint = () => cy.findByPlaceholderText("Endpoint");
    const getInputApiHeader = () => cy.findByPlaceholderText("API Header");
    const getInputApiKey = () => cy.findByPlaceholderText("API Key");

    getButtonAdd().click();
    getButtonSave().click();
    cy.get("p:contains('Name must not be blank.')").should("be.visible");

    getInputName().type("Demo");
    getButtonSave().click();
    cy.get("p:contains('Endpoint must not be blank.')").should("be.visible");

    getInputEndpoint().type("https://demo-resolver2.tradetrust.io/");
    getButtonSave().click();
    cy.get("p:contains('Network Error')").should("be.visible");

    getInputEndpoint().clear();
    getInputEndpoint().type("https://demo-resolver.tradetrust.io/");

    // "API Header must not be blank." // TODO
    getInputApiHeader().type("x-api-key");

    // // "API Key must not be blank.";  // TODO
    getInputApiKey().type("DEMO");

    getButtonSave().click();
    getButtonAdd().click();
    getInputName().type("Demo 2");
    getInputEndpoint().type("https://demo-resolver.tradetrust.io/");
    getButtonSave().click();
    cy.get("p:contains('Endpoint already exists.')").should("be.visible");
  });
});
