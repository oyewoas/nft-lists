import { Box, Typography, styled } from "@mui/material";
import myImage from "../../assets/images/alturalogo.png";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#070e13",
  color: "#fff",
  padding: theme.spacing(2, 4),
  margin: theme.spacing(2, 0),
}));

const AppHeader = () => {
  return (
    <HeaderContainer>
      <Typography 
      fontWeight='bold'
      ><img src={myImage} alt="logo" width='50' />NFT LISTS</Typography>
    </HeaderContainer>
  );
};

export default AppHeader;
