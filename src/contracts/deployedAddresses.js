// Deployed contract addresses for different networks

// Avalanche Fuji Testnet (Chain ID: 43113)
const FUJI_ADDRESSES = {
  RealEstateRegistry: '0x0000000000000000000000000000000000000000', // Replace with actual address
  AssetTokenizationManager: '0x0000000000000000000000000000000000000000', // Replace with actual address
  VerifyingOperatorVault: '0x0000000000000000000000000000000000000000', // Replace with actual address
  USDC: '0x0000000000000000000000000000000000000000', // Testnet USDC on Fuji
  estateVerification: "0x0000000000000000000000000000000000000000",
};

// Ethereum Sepolia Testnet (Chain ID: 11155111)
const SEPOLIA_ADDRESSES = {
  RealEstateRegistry: '0x0000000000000000000000000000000000000000', // Replace with actual address
  AssetTokenizationManager: '0x0000000000000000000000000000000000000000', // Replace with actual address
  VerifyingOperatorVault: '0x0000000000000000000000000000000000000000', // Replace with actual address
  USDC: '0x0000000000000000000000000000000000000000', // Testnet USDC on Sepolia
  estateVerification: "0x0000000000000000000000000000000000000000",
};

// Get addresses based on chain ID
export const getAddresses = (chainId) => {
  if (chainId === 43113) {
    return FUJI_ADDRESSES;
  } else if (chainId === 11155111) {
    return SEPOLIA_ADDRESSES;
  } else {
    return null;
  }
};

export default {
  FUJI_ADDRESSES,
  SEPOLIA_ADDRESSES,
  getAddresses
};
