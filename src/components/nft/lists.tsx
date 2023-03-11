
import { styled, Box } from '@mui/material'
import NftCard from './card';
import { useContext } from 'react';
import { DataContext } from '../../provider/data-provider';

const NftListContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(4),
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
}))

const NftLists = () =>{
  const { state } = useContext(DataContext);
  // console.log(state, 'NFTSSSSSS')
  return (
    
    <NftListContainer>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />

    </NftListContainer>

  );
}

export default NftLists