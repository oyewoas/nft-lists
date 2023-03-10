import { Box, Typography, styled } from "@mui/material";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#070e13",
  color: "#fff",
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2, 4),
}));

const AppFooter = () => {
  return (
    <FooterContainer>
      <Typography>@ Ayooluwa Oyewo {new Date().getFullYear()}</Typography>
    </FooterContainer>
  );
};

export default AppFooter;
