import { useEffect, useState } from "react";
import InboxPage from "./Page";
import { ThirdwebProvider } from "@thirdweb-dev/react";
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
          activeChain="ethereum"
        >
          <Page />
        </ThirdwebProvider>
      ) : null}
    </>
  );
}
