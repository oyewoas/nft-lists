import { useCallback, useContext, useEffect, useState } from "react";
import { getNfts } from "../config/alchemy";
import { DataContext } from "../provider/data-provider";
export const isNftAddressValid = (address: string) => {
  return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
};
const useNfts = () => {
  const { dispatch, state } = useContext(DataContext);
  const [address, setAddress] = useState<string>("");
  const [gettingNfts, setGettingNfts] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState<boolean>(false);

  const handleAddress = (address: string) => {
    setIsValidAddress(isNftAddressValid(address));
    setAddress(address);
  };

  const handleError = useCallback((error: string) => {
    dispatch({
      type: "SET_ERROR",
      payload: {
        error,
        nfts: [],
      },
    });
  }, [dispatch]);

  const getRes = useCallback(async () => {
    setGettingNfts(true);
    try {
      const data = await getNfts(address);
        dispatch({
          type: "SET_NFTS",
          payload: {
            ...data
          },
        });
      setGettingNfts(false);
    } catch (error) {
      handleError('Cannot find nfts, try again with valid address')
      setGettingNfts(false);
    }
  }, [address, dispatch, handleError]);

  useEffect(() => {
    if(isValidAddress){
      getRes();
    }
  }, [address, dispatch, getRes, isValidAddress]);

  return {
    handleAddress,
    handleError,
    isLoading: gettingNfts,
    isValidAddress,
    state,
  };
};

export default useNfts;
