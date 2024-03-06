import { useState } from "react";

function MyWalletSelectionUI(props) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const usesMoreWallets = props.supportedWallets.length > 1;

  const handleNext = () => {
    if (step === 1) {
      // Validate email or perform any other action needed for step 1
      setStep(2);
    } else if (step === 2) {
      // Perform any action needed for step 2 and select the wallet
      props.onSelect(email);
    }
  };

  return (
    <div>
      {step === 1 && (
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      )}
      {step === 2 && (
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      )}
      <button onClick={handleNext}>{step === 1 ? "Next" : "Submit"}</button>
      {usesMoreWallets && <p> --- OR --- </p>}
    </div>
  );
}

function MyWalletConnectionUI(props) {
  // Get the email address entered by the user in MyWalletSelectionUI
  const email = props.selectionData;

  return <div> ... </div>;
}

const myWallet = (options) => {
  return {
    id: "my-wallet",
    meta: {
      name: "My Wallet",
      iconURL: "https://...", // or ipfs://...
    },

    // create and return wallet instance
    create: (walletOptions) => {
      return new myWallet({ ...walletOptions, ...options });
    },

    // optional - render a UI for connecting your wallet
    connectUI: (props) => {
      return <MyWalletConnectionUI {...props} />;
    },

    // optional - override the default UI for selecting your wallet in the wallet selector screen
    selectUI: (props) => {
      return <MyWalletSelectionUI {...props} />;
    },

    // optional
    isInstalled: () => {
      // detect if your wallet extension is installed on the user's browser/device
      return true; // or false
    },

    // optional - show a "recommended" badge below your wallet's name in the wallet selector screen
    recommended: true,
  };
};
export default myWallet;
