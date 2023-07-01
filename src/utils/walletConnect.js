import Web3 from 'web3';

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            console.log('Connected to wallet:', accounts[0]);
            return accounts[0];
        } catch (error) {
            console.error('Failed to connect to the wallet:', error);
        }
    } else {
        console.error('No Web3 provider found');
    }
};

export const logoutWallet = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
        try {
            const web3 = new Web3(window.ethereum);
            web3.eth.currentProvider.disconnect();
            console.log('Logged out from wallet');
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    } else {
        console.error('No Web3 provider found or MetaMask is not installed');
    }
};