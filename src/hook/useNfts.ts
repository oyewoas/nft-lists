import { useCallback, useContext, useEffect, useState } from "react";
import { getNfts } from "../config/alchemy";
import { DataContext } from "../provider/data-provider";

const useNfts = () => {
  const { dispatch } = useContext(DataContext);
  const [address, setAddress] = useState<string>("");
  const [gettingNfts, setGettingNfts] = useState(false);

  const handleAddress = useCallback((address: string) => {
    setAddress(address);
  }, []);

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
      handleError('An error occured check if address is valid')
      setGettingNfts(false);
    }
  }, [address, dispatch, handleError]);

  useEffect(() => {
    if(address.length > 0){
      // getRes();
    }
  }, [address, dispatch, getRes]);
  return {
    handleAddress,
    handleError,
    isLoading: gettingNfts,
  };
};

export default useNfts;
