import { useCallback, useContext, useEffect, useState } from "react";
import { getNfts } from "../config/alchemy";
import { DataContext } from "../provider/data-provider";

const useNfts = () => {
  const { dispatch } = useContext(DataContext);
  const [address, setAddress] = useState<string>("");
  const [gettingNfts, setGettingNfts] = useState(false);

  const handleAddress = useCallback((address: string) => {
    console.log('HERERERE -1')

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
      console.log('HERERERE 0')

      if (data.nfts.length > 0) {
        console.log('HERERERE 1')
        dispatch({
          type: "SET_NFTS",
          payload: {
            ...data
          },
        });
      }
      setGettingNfts(false);
    } catch (error) {
      console.log(error)
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
