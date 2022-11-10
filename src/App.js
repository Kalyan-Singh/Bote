import "./App.css";
import { Route, Routes, Link, Router } from "react-router-dom";
import Home from "./components/Home";
import ResponsiveAppBar from "./components/Navbar";
import Vote from "./components/Vote";
import CreatePoll from "./components/CreatePoll";
import MyPoll from "./components/MyPoll";
import Announce from "./components/Announce";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider,darkTheme } from "@rainbow-me/rainbowkit";
import {
  chain,
  configureChains,
  createClient,
  useSigner,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme_MUI = createTheme({
  palette: {
    mode: 'dark',
  },
});

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: "f8TXTM1cuIoEj67B3c9Cm73LeT0xvLR2" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit demo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme_MUI}>
      <CssBaseline />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <ResponsiveAppBar></ResponsiveAppBar>
        </RainbowKitProvider>
      </WagmiConfig>
      <WagmiConfig client={wagmiClient}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Vote" element={<Vote></Vote>}></Route>
          <Route
            path="/CreatePoll"
            element={<CreatePoll></CreatePoll>}
          ></Route>
          <Route path="/MyPoll" element={<MyPoll></MyPoll>}></Route>
          <Route path="/Announce" element={<Announce></Announce>}></Route>
        </Routes> 
      </WagmiConfig>
      </ThemeProvider>
    </>
  );
}

export default App;
