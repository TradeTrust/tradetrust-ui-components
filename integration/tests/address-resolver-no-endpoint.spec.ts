import { Selector } from "testcafe";

fixture`Address Resolver - No endpoint`
  .page`http://localhost:9009/iframe.html?id=addressresolver-addressresolver--address-resolver-no-third-party-end-point&args=&viewMode=story`;

const NoEndpointFound = Selector("p").withText("No third party's endpoint found.");

test("Address Resolver should show only 1 row with no endpoint found text", async (t) => {
  await t.expect(NoEndpointFound.exists).ok();
});
