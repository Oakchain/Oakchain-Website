import Router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.css'
import './assets/font/css/index.css'
import { createContext, useState } from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
export const ThemeContext = createContext(null)


const chains = [arbitrum, mainnet, polygon]
const projectId = '5211f08b0f1c65f5ac9a9d5b4a6b3a65'
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  const [theme, setTheme] = useState("light")
  const toggler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      <div id={theme}>
        <WagmiConfig config={wagmiConfig}>
          <Router />
        </WagmiConfig>

        <Web3Modal
          projectId={projectId}
          ethereumClient={ethereumClient}
          themeVariables={{
            '--w3m-overlay-background-color': 'rgba(0,0,0,0.5)',
            '--w3m-overlay-backdrop-filter': "blur(20px)",
            '--w3m-logo-image-url':'https://res.cloudinary.com/dmgydkvnt/image/upload/v1694268719/logo_qo4eoh.png',
            '--w3m-background-color':"#fff"
          }}
        />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
