import { Selector } from "testcafe";

fixture`Address Resolver - Error`
  .page`http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`;

const InputName = Selector("input[placeholder='Name']");
const InputEndpoint = Selector("input[placeholder='Endpoint']");
const InputApiHeader = Selector("input[placeholder='API Header']");
const InputApiKey = Selector("input[placeholder='API Key']");

const ButtonAdd = Selector("button").withText("Add");
const ButtonSave = Selector("button").withText("Save");

const ErrorMsgName = Selector("p").withText("Name must not be blank.");
const ErrorMsgEndpoint = Selector("p").withText("Endpoint must not be blank.");
const ErrorMsgAPIHeader = Selector("p").withText("API Header must not be blank.");
const ErrorMsgAPIKey = Selector("p").withText("API Key must not be blank.");
const ErrorMsgEndpointExists = Selector("p").withText("Endpoint already exists");

test("Address Resolver should show the correct error messages on save", async (t) => {
  await t.click(ButtonAdd);

  await t.click(ButtonSave);
  await t.expect(ErrorMsgName.exists).ok();

  await t.typeText(InputName, "Demo");
  await t.click(ButtonSave);
  await t.expect(ErrorMsgEndpoint.exists).ok();

  await t.typeText(InputEndpoint, "https://demo-resolver2.tradetrust.io/");
  await t.click(ButtonSave);
  await t.expect(ErrorMsgAPIHeader.exists).ok();

  await t.typeText(InputApiHeader, "x-api-key");
  await t.click(ButtonSave);
  await t.expect(ErrorMsgAPIKey.exists).ok();

  await t.typeText(InputApiKey, "DEMO");

  await t.selectText(InputEndpoint).pressKey("delete");
  await t.typeText(InputEndpoint, "https://demo-resolver.tradetrust.io/");
  await t.click(ButtonSave);

  await t.click(ButtonAdd);
  await t.typeText(InputName, "Demo 2");
  await t.typeText(InputEndpoint, "https://demo-resolver.tradetrust.io/");
  await t.click(ButtonSave);
  await t.expect(ErrorMsgEndpointExists.exists).ok();
});
