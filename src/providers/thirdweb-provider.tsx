import { createThirdwebClient } from 'thirdweb';
import { ThirdwebProvider as Provider } from 'thirdweb/react';
import { inAppWallet } from 'thirdweb/wallets';

export const thirdWebClient = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

export const thirdWebWallets = [
  inAppWallet({
    auth: {
      options: ['line', 'x'],
    },
  }),
];

export function ThirdWebProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
