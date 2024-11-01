import { Selector } from "testcafe";

fixture`Address Resolver - Entry add`
  .page`http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`;

const InputName = Selector("input[placeholder='Name']");
const InputEndpoint = Selector("input[placeholder='Endpoint']");
const InputApiHeader = Selector("input[placeholder='API Header']");
const InputApiKey = Selector("input[placeholder='API Key']");

const ButtonAdd = Selector("button").withText("Add");
const ButtonSave = Selector("button").withText("Save");
const IconEdit = Selector("[data-testid='edit-icon']");

test.skip("Address Resolver should edit, save input values correctly", async (t) => {
  await t.click(ButtonAdd);

  await t.expect(InputName.value).eql("");
  await t.typeText(InputName, "Demo");
  await t.expect(InputName.value).contains("Demo");

  await t.expect(InputEndpoint.value).eql("");
  await t.typeText(InputEndpoint, "https://demo-resolver.tradetrust.io/");
  await t
    .expect(InputEndpoint.value)
    .contains("https://demo-resolver.tradetrust.io/");

  await t.expect(InputApiHeader.value).eql("");
  await t.typeText(InputApiHeader, "x-api-key");
  await t.expect(InputApiHeader.value).contains("x-api-key");

  await t.expect(InputApiKey.value).eql("");
  await t.typeText(InputApiKey, "DEMO");
  await t.expect(InputApiKey.value).contains("DEMO");

  await t.click(ButtonSave);
  await t.expect(IconEdit.count).eql(1);

  await t.click(IconEdit);
  await t.typeText(InputName, " edited");
  await t.expect(InputName.value).contains("Demo edited");
  await t.click(ButtonSave);
});
