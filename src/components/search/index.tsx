import { styled, Box, CircularProgress } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import useNfts, { isNftAddressValid } from "../../hook/useNfts";
import { DataContext } from "../../provider/data-provider";

const StyledForm = styled("form")(({ theme }) => ({
  padding: theme.spacing(2, 3),
  margin: theme.spacing(3, 1),
  alignItems: "center",
  width: "85%",
  maxWidth: "500px",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
  background: "rgba(51,54,62,.24)",
  borderRadius: "24px",
  color: "#fff",
  fontSize: theme.spacing(2),
}));
const StyledInput = styled("input")(({ theme }) => ({
  outline: 0,
  width: "100%",
  border: "none",
  backgroundColor: "transparent",
  color: "#fff",
  fontSize: theme.spacing(2),
  fontWeight: 500,
}));
const InputContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
});
const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  fontSize: theme.spacing(2),
  cursor: "pointer",
}));

const ErrorText = styled("p")({
  color: "red",
});

const Search = () => {
  const { state } = useContext(DataContext);
  const { handleAddress, handleError, isLoading, isValidAddress } = useNfts();
  const [nftAddress, setNftAddress] = useState<string>("");
  //Test addresss 0x60E4d786628Fea6478F785A6d7e704777c86a7c6
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleAddress(nftAddress);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [handleAddress, isValidAddress, nftAddress]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const address = event.target.value;
      if (address.length > 0 && !isNftAddressValid(address)) {
        handleError(`${event.target.value} is not a valid address.`);
      } else {
        handleError("");
      }
      setNftAddress(address);
    },
    [handleError]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleAddress(nftAddress);
    },
    [handleAddress, nftAddress]
  );

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <StyledInput
            type="text"
            value={nftAddress}
            onChange={handleInputChange}
            placeholder="Search nft by address..."
          />
          <StyledButton type="submit" disabled={!isValidAddress}>
            {isLoading ? <CircularProgress size="20px" /> : "🔍"}
          </StyledButton>
        </InputContainer>
      </StyledForm>
      {state.error && <ErrorText>{state.error}</ErrorText>}
    </>
  );
};

export default Search;
