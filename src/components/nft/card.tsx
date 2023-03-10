import {
  styled,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
const CardContainer = styled(Card)({
  padding: "0.75rem 0.75rem 1rem",
  borderRadius: "32px",
  cursor: "pointer",
  backgroundColor: "#131820",
  overflow: "hidden",
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
  fontWeight: '500',
  color: '#ffff',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
const NftCard = () => {
  return (
    <CardContainer>
      <CardImage
        image="https://dummyimage.com/600x400/000/fff"
        title="nft-image"
      />
      <CardContent>
        <StyledTypography>
          Word of the Day
        </StyledTypography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardContainer>
  );
};

export default NftCard;
