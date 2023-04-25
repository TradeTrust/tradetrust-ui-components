import { Selector } from "testcafe";

fixture`Address Resolver - Ordering`
  .page`http://localhost:9009/iframe.html?id=addressresolver-addressresolver--default-address-resolver&args=&viewMode=story`;

const EndpointEntryRow1 = Selector("[data-testid='endpoint-entry-row-1']", {
  visibilityCheck: true,
});
const EndpointEntryRow2 = Selector("[data-testid='endpoint-entry-row-2']", {
  visibilityCheck: true,
});

const IconMoveUp1 = EndpointEntryRow1.find(
  "[data-testid='endpoint-entry-move-up']"
);
const IconMoveDown1 = EndpointEntryRow1.find(
  "[data-testid='endpoint-entry-move-down']"
);
const IconMoveUp2 = EndpointEntryRow2.find(
  "[data-testid='endpoint-entry-move-up']"
);

test("Address Resolver first entry click up arrow should not move", async (t) => {
  await t.hover(EndpointEntryRow1);
  await t.click(IconMoveUp1);
  await t.expect(EndpointEntryRow1.find("div").withText("Demo 1").exists).ok();
});

test("Address Resolver first entry click down arrow should move down", async (t) => {
  await t.hover(EndpointEntryRow1);
  await t.click(IconMoveDown1);
  await t.expect(EndpointEntryRow1.find("div").withText("Demo 2").exists).ok();
});

test("Address Resolver second entry click arrow up should move up", async (t) => {
  await t.hover(EndpointEntryRow2);
  await t.click(IconMoveUp2);
  await t.expect(EndpointEntryRow1.find("div").withText("Demo 2").exists).ok();
});
