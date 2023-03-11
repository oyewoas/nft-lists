import * as React from "react";
import { TNft } from "../../config/alchemy";
import {
  DialogProps,
  styled,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import {
  FloorStatusContainer,
  FloorText,
  StatusText,
  StyledTypography,
} from "./card/styles";

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  backgroundColor: "#131820",
  wordBreak: "break-word",
  minHeight: "150px",
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  color: "#ffff",
  padding: theme.spacing(3),
  backgroundColor: "#131820",
  display: "flex",
  justifyContent: "center",
}));
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: "#ffff",
  maxWidth: "100%",
  backgroundColor: "#131820",
  wordWrap: "break-word",
  textOverflow: "ellipsis",
}));
const StyledDialogImage = styled("img")(({ theme }) => ({
  backgroundPosition: "center center",
  backgroundSize: "cover",
  maxHeight: "400px",
  width: "100%",
}));
const StyledDialogLink = styled("a")(({ theme }) => ({
  borderRadius: "2.25rem",
  padding: "14px 20px",
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  boxShadow: "none",
  textAlign: "center",
  width: "50%",
  border: "1px solid rgb(81, 56, 237)",
  color: "rgb(255, 255, 255)",
  background: "rgb(81, 56, 237)",
}));

const Hero = styled('span')(({ theme })=> ({
    color: 'rgb(88 208 234/1)',
    fontSize: theme.spacing(2),
    fontWeight: 'bold',
    padding: theme.spacing(1, 0)
}))
interface TModal extends DialogProps {
  handleClose: () => void;
  handleOpen: () => void;
  children?: React.ReactNode;
  data?: TNft;
}
const NftModal = ({
  handleClose,
  handleOpen,
  open,
  data,
  ...props
}: TModal) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose} {...props}>
        <StyledDialogImage src={data?.contract.openSea?.imageUrl} />
        <StyledDialogTitle>
          <Hero>Name:</Hero> <br />
          {data?.contract.openSea?.collectionName}
        </StyledDialogTitle>
        <StyledDialogContent>
          <StyledTypography>
          <Hero>Address:</Hero>  <br /> {data?.contract.address}
          </StyledTypography>
          <StyledTypography>
          <Hero>Description:</Hero> <br /> {data?.contract.openSea?.description}
          </StyledTypography>
          <FloorStatusContainer>
            <FloorText>
                {data?.contract.openSea?.floorPrice}
            </FloorText>
            <StatusText>
           {data?.contract.openSea?.safelistRequestStatus}
            </StatusText>
          </FloorStatusContainer>
        </StyledDialogContent>
        <StyledDialogActions>
          <StyledDialogLink
            href={data?.contract.openSea?.externalUrl}
            target="_blank"
          >
            Open URL
          </StyledDialogLink>
        </StyledDialogActions>
      </Dialog>
    </>
  );
};

export default NftModal;
