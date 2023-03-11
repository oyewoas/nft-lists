
import { styled, Box } from '@mui/material'
import NftCard from './card/card';
import { useContext } from 'react';
import { DataContext } from '../../provider/data-provider';
import nftsRes from './nfts.json'
import { TNft } from '../../config/alchemy';
import InfiniteScroll from '../common/infinite-scroll';

const NftListContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(4),
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
}))

const NftLists = () =>{
  const { state } = useContext(DataContext);
  // console.log(state, 'NFTSSSSSS')
  const nfts = nftsRes.nfts
  return (
    
      <InfiniteScroll data={state.nfts} containerComponent={NftListContainer}>
      {(nft: any, i: number) => (
        <NftCard data={nft} key={i} />
      )}
       {/* {nfts.map((nft: any, i) => {
        return <NftCard data={nft} key={i} />
       })} */}
       </InfiniteScroll>

  );
}

export default NftLists