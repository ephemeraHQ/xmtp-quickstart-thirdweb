import { useEffect, useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import embeddedWallet from "./CustomWallet";
import Page from "./Page";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <ThirdwebProvider
          authConfig={{
            authUrl: "/",
            domain: "http://localhost:3000/",
          }}
          supportedWallets={[embeddedWallet()]}
          activeChain="ethereum"
        >
          <Page />
        </ThirdwebProvider>
      ) : null}
    </>
  );
}
