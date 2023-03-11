import {
  styled,
  CardMedia,
  Typography,
  CardContent,
  Card,
  Box,
  keyframes
} from "@mui/material";
import { TNft } from "../../config/alchemy";
const shadowSize = '5px';
const shadowColor = 'rgba(35, 43, 57, 0.2)';

const boxShadow = `
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor},
  0 ${shadowSize} ${shadowSize} ${shadowColor}
`;

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: ${boxShadow};
  }
  50% {
    transform: scale(1.05);
    box-shadow: ${boxShadow};
  }
  100% {
    transform: scale(1);
    box-shadow: ${boxShadow};
  }
`;
const CardContainer = styled(Card)({
  padding: "0.75rem 0.75rem 1rem",
  borderRadius: "32px",
  cursor: "pointer",
  backgroundColor: "#131820",
  overflow: "hidden",
  transition: 'box-shadow 0.3s ease-in-out',
  boxShadow: `${boxShadow}`,
  '&:hover': {
    animation: `${hoverAnimation} 0.8s ease-in-out forwards`
  }
});
const CardImage = styled(CardMedia)({
  position: "relative",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "288px",
  width: "100%",
  borderRadius: "24px",
});

const StyledTypography = styled(Typography)({
  color: "#ffff",
  maxWidth: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const StatusText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  fontWeight: "bold",
  borderRadius: theme.spacing(0.5),
  backgroundColor: "#3729966d",
  display: "inline-block",
  textTransform: "capitalize",
  color: "#8c7fee",
  fontSize: theme.spacing(1.6),
  lineHeight: theme.spacing(1),
}));

const FloorText = styled(StatusText)({
  backgroundColor: "rgb(246 92 225/1)",
  color: "rgb(0 0 0/1)",
});

const FloorStatusContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
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
