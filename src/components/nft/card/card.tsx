import { CardContent } from "@mui/material";
import { TNft } from "../../../config/alchemy";
import {
  CardContainer,
  CardImage,
  FloorStatusContainer,
  FloorText,
  StatusText,
  StyledTypography,
} from "./styles";
import NftModal from "../modal";
import { useState } from "react";

const NftCard = ({ data }: { data: TNft }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <CardContainer onClick={handleOpen}>
      <CardImage image={data.contract.openSea?.imageUrl} title="nft-image" />
      <CardContent>
        <StyledTypography>
          {data.contract.openSea?.collectionName}
        </StyledTypography>
        <FloorStatusContainer>
          <FloorText>{data.contract.openSea?.floorPrice}</FloorText>
          <StatusText>
            {data.contract.openSea?.safelistRequestStatus}
          </StatusText>
        </FloorStatusContainer>
      </CardContent>
    </CardContainer>
    {open && <NftModal open={open} data={data} handleClose={handleClose} handleOpen={handleOpen}/>}
    </>
  );
};

export default NftCard;
