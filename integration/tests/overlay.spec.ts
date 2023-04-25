import { Selector } from "testcafe";

fixture`Text Overlay`
  .page`http://localhost:9009/iframe.html?id=ui-overlay--text&args=&viewMode=story`;

const RootSelector = Selector("#root", { visibilityCheck: true });
const ModalSelector = Selector("#root > div.overlay", {
  visibilityCheck: true,
});

const openButton = RootSelector.find("#root > button");
const modalCloseButton = ModalSelector.find("[data-testid='overlay-close']");
const overlayTitle = ModalSelector.find("[data-testid='overlay-title']");

test("Toggle Overlay Modal", async (t) => {
  await t.hover(openButton);
  await t.click(openButton);
  await t.expect(overlayTitle.exists).ok();
  await t.hover(modalCloseButton);
  await t.click(modalCloseButton);
  await t.expect(overlayTitle.exists).notOk();
});
