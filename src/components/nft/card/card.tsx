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

const NftCard = ({ data }: { data: TNft }) => {
  return (
    <CardContainer>
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
  );
};

export default NftCard;
