import { Network, Alchemy, OwnedNft } from "alchemy-sdk";
import checkAddress from "./get-address-type";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

export interface TNft extends Omit<OwnedNft, "balance"> {
  balance?: number;
}

export interface TResponse {
  nfts: TNft[];
  pageKey?: string;
  totalCount?: number
  blockHash?: string
}
export const getNftsByOwnerAddress = async (
  address: string
): Promise<TResponse> => {
  try {
    const { ownedNfts, pageKey, totalCount, blockHash } = await alchemy.nft.getNftsForOwner(address);
    return {
      nfts: ownedNfts,
      pageKey,
      totalCount,
      blockHash
    };
  } catch (error) {
    throw error;
  }
};

export const getNftsByContractAddress = async (
  address: string
): Promise<TResponse> => {
  try {
    const { nfts, pageKey } = await alchemy.nft.getNftsForContract(address);
    return {
      nfts,
      pageKey,
    };
  } catch (error) {
    throw error;
  }
};

export const getNfts = async (address: string) => {
  try {
    let res: TResponse = {
      nfts: [],
      pageKey: "0",
    };
    const { isContract, isOwner } = await checkAddress(address);
    if (isContract) {
      res = await getNftsByContractAddress(address);
    }

    if (isOwner) {
      res = await getNftsByOwnerAddress(address);
    }
    return res;
  } catch (error) {
    throw error;
  }
};
