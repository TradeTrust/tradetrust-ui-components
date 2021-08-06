import { Selector } from "testcafe";

fixture`Address Resolver - Buttons`
  .page`http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`;

const NoEndpointFound = Selector("p").withText("No third party's endpoint found.");
const EndpointEntryId = Selector("[data-testid='endpoint-entry-id']");
const ButtonAdd = Selector("button").withText("Add");
const ButtonDelete = Selector("button").withText("Delete");

test("Address Resolver should show disabled add button when clicked, delete button should exit", async (t) => {
  await t.click(ButtonAdd);
  await t.expect(ButtonAdd.hasAttribute("disabled")).ok();
  await t.expect(EndpointEntryId.textContent).contains("1");
  await t.click(ButtonDelete);
  await t.expect(NoEndpointFound.exists).ok();
  await t.expect(ButtonAdd.hasAttribute("disabled")).notOk();
});
