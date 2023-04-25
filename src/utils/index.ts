const getEtherscanBaseUrl = (network: string): string => {
  return `https://${network === "mainnet" ? "" : network + "."}etherscan.io/`;
};

const getPolygonscanBaseUrl = (network: string): string => {
  return `https://${network === "matic" ? "" : "mumbai."}polygonscan.com/`;
};

const getBaseUrl = (network: string): string => {
  return network.includes("matic")
    ? getPolygonscanBaseUrl(network)
    : getEtherscanBaseUrl(network);
};

export const makeAddressURL = (address: string, network: string): string => {
  return `${getBaseUrl(network)}address/${address}`;
};
