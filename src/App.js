import { useEffect, useState } from "react";
import InboxPage from "./InboxPage-hooks";
import { ThirdwebProvider } from "@thirdweb-dev/react";

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
          <InboxPage />
        </ThirdwebProvider>
      ) : null}
    </>
  );
}
