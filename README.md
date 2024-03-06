# XMTP PWA with WalletConnect & Wagmi

![xmtp](https://github.com/xmtp/xmtp-quickstart-reactjs/assets/1447073/3f2979ec-4d13-4c3d-bf20-deab3b2ffaa1)

## Installation

```bash
yarn install
yarn dev
```

## Concepts

Head to our docs to understand XMTP's concepts

- [Get started](https://xmtp.org/docs/build/get-started/overview?sdk=react)
- [Authentication](https://xmtp.org/docs/build/authentication?sdk=react)
- [Conversations](https://xmtp.org/docs/build/conversations?sdk=react)
- [Messages](https://xmtp.org/docs/build/messages/?sdk=react)
- [Streams](https://xmtp.org/docs/build/streams/?sdk=react)

#### Troubleshooting

If you get into issues with `Buffer` and `polyfills` check out the fix below:

- [Check out Buffer issue](https://github.com/xmtp/xmtp-js/issues/487)

## Thirdweb

### Getting started

For thirdweb SDK to work as a fresh install you need to install this packages

```bash
npm install @thirdweb-dev/react "ethers@^5"
```

You also need to polyfill with multiple libraries. Copy paste this into your `packages.json`

```bash
"url": "latest",
"http": "npm:http-browserify",
"https": "npm:https-browserify",
"zlib": "npm:browserify-zlib",
"http-browserify": "latest",
"https-browserify": "latest",
"browserify-zlib": "latest",
"assert": "^2.0.0",
"stream": "^0.0.2"
```

### Setup

First, you need to import the necessary libraries and components. In your `App.js` file, import the `ThirdwebProvider` from `@thirdweb-dev/react` and wrap your main component with it.

```jsx
import { ThirdwebProvider } from "@thirdweb-dev/react";
```

```jsx
<ThirdwebProvider
  authConfig={{
    authUrl: "/",
    domain: "http://localhost:3000/",
  }}
  activeChain="ethereum"
>
  <InboxPage />
</ThirdwebProvider>
```

### Web3Button

Use the `Web3Button` hook to get the wallet modal button.

![](modal.png)

```jsx
{
  !signer && (
    <div style={styles.xmtpContainer}>
      <Web3Button action={() => login()}>Login</Web3Button>
    </div>
  );
}
{
  signer && (
    <FloatingInbox isPWA={isPWA} wallet={signer} onLogout={handleLogout} />
  );
}
```

### XMTP Integration

In your component, use the `useSigner` hook from `@xmtp/react-sdk` to get the XMTP client.

```jsx
import { useSigner } from "@thirdweb-dev/react";
import { useClient } from "@xmtp/react-sdk";

//Thirdweb
const signer = useSigner();
//XMTP
const { client, error, isLoading, initialize } = useClient();
await initialize({ keys, options, signer });
```

That's it! You've now created an XMTP app with Thirdweb.
