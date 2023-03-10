import { Network, Alchemy, OwnedBaseNftsResponse, NftContractNftsResponse } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

export const getNftsByOwnerAddress =  async (address: string): Promise<OwnedBaseNftsResponse> => {
    try{
        const nfts = await alchemy.nft.getNftsForOwner(address)
        return nfts
    } catch(error){
        throw error
    }
}

export const getNftsByContractAddress =  async (address: string): Promise<NftContractNftsResponse> => {
    try{
        const nfts = await alchemy.nft.getNftsForContract(address)
        return nfts
    } catch(error){
        throw error
    }
}
