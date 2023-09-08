import { CHAIN_ID, SUPPORTED_CHAINS } from "@govtechsg/tradetrust-utils";

const NETWORK_NAMES: Map<string, CHAIN_ID> = new Map<string, CHAIN_ID>();

Object.values(CHAIN_ID).forEach((chainId) => {
  const networkName = SUPPORTED_CHAINS[chainId].name;
  NETWORK_NAMES.set(networkName, chainId);
});

const getBaseUrl = (chainId: CHAIN_ID): string => {
  return SUPPORTED_CHAINS[chainId].explorerUrl;
};

const getChainID = (networkName: string): CHAIN_ID => {
  networkName = networkName.toLowerCase();
  if (networkName === "mumbai") networkName = "maticmum";
  const chainId = NETWORK_NAMES.get(networkName);
  if (!chainId)
    throw new Error(`Network ${networkName} has not been configured.`);
  return chainId;
};

export const makeAddressURLwithChainId = (
  address: string,
  chainId: CHAIN_ID
): string => {
  return `${getBaseUrl(chainId)}address/${address}`;
};

export const makeAddressURL = (address: string, network: string): string => {
  const chainId = getChainID(network);
  return makeAddressURLwithChainId(address, chainId);
};
