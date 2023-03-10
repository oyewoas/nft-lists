
import { styled, Box } from '@mui/material'
import NftCard from './card';

const NftListContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(4),
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
}))
const NftLists = () =>{
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