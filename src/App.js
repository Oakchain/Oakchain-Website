import Router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/index.css";
import "./assets/font/css/index.css";
import { createContext, useState } from "react";
import { Arbitrum, Ethereum, Polygon } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      <div id={theme}>
        <ThirdwebProvider
          supportedChains={[Arbitrum, Ethereum, Polygon]}
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            embeddedWallet({
              auth: {
                options: ["email", "google", "apple", "facebook"],
              },
              recommended: true,
            }),
          ]}
          clientId="f834ca0ad370cc60524088a7152429eb"
        >
          <Router />
        </ThirdwebProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
