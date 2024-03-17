import Router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/index.css";
import "./assets/font/css/index.css";
import { createContext, useContext, useState } from "react";
import { Arbitrum, Ethereum, Polygon } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
export const ThemeContext = createContext(null);

const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

function App() {
  const [theme, setTheme] = useState("light");
  const toggler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [postContent, setPostContent] = useState(null);
  const setPost = ({post, content}) => {
    setPostContent({post, content});
  };

  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      <PostContext.Provider value={{ postContent, setPost }}>
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
      </PostContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
