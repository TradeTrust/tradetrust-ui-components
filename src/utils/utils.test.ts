import { makeAddressURL } from "./index";

describe("makeAddressURL", () => {
  it("should get the correct url, given an ethereum network and address", () => {
    expect(makeAddressURL("0x123", "mainnet")).toStrictEqual("https://etherscan.io/address/0x123");
    expect(makeAddressURL("0x123", "goerli")).toStrictEqual("https://goerli.etherscan.io/address/0x123");
    expect(makeAddressURL("0x123", "sepolia")).toStrictEqual("https://sepolia.etherscan.io/address/0x123");
  });

  it("should get the correct url, given a polygon network and address", () => {
    expect(makeAddressURL("0x123", "matic")).toStrictEqual("https://polygonscan.com/address/0x123");
    expect(makeAddressURL("0x123", "maticmum")).toStrictEqual("https://mumbai.polygonscan.com/address/0x123");
  });
});
