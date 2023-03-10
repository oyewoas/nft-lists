import { Box, Typography, styled } from "@mui/material";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#070e13",
  color: "#fff",
  padding: theme.spacing(2, 4),
}));

const AppHeader = () => {
  return (
    <HeaderContainer>
      <Typography>NFT LIST</Typography>
    </HeaderContainer>
  );
};

export default AppHeader;
