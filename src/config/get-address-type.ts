import Web3 from 'web3';
const checkAddress = async (address: string) => {
    const web3 = new Web3(process.env.REACT_APP_ALCHEMY_HTTPS || '');

    // Check if the address is a contract address
    const code = await web3.eth.getCode(address);
    
    const balance = await web3.eth.getBalance(address);
    return {
        isContract: code !== '0x' && code !== '0x0',
        isOwner: parseInt(balance, 10) > 0 && balance !== '0'
    }
  };

  export default checkAddress