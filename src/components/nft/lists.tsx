import { styled, Box } from "@mui/material";
import NftCard from "./card/card";
import { useContext } from "react";
import { DataContext } from "../../provider/data-provider";
import nftsRes from "./nfts.json";
import { TNft } from "../../config/alchemy";
import InfiniteScroll from "../common/infinite-scroll";

const NftListContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(4),
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
}));

const NftLists = () => {
  const { state } = useContext(DataContext);
  // const nfts = nftsRes.nfts; For Testing
  return (
    <InfiniteScroll data={state.nfts} containerComponent={NftListContainer}>
      {(nft, i: number) => <NftCard data={nft} key={i} />}
    </InfiniteScroll>
  );
};

export default NftLists;
