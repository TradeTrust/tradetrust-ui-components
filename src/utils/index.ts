const getEtherscanBaseUrl = (network: string): string => {
  return `https://${network === "mainnet" ? "" : network + "."}etherscan.io/`;
};

export const makeEtherscanAddressURL = (address: string, network: string): string => {
  return `${getEtherscanBaseUrl(network)}address/${address}`;
};

export const checkUndefinedClassName = (className: string | undefined): string => {
  return className ? className : "";
};
