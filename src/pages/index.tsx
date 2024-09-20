import { Link } from 'react-router-dom';
import { ConnectButton } from 'thirdweb/react';

import { buttonVariants } from '@/components/ui/button';
import { thirdWebClient, thirdWebWallets } from '@/providers/thirdweb-provider';

export default function IndexPage() {
  return (
    <div>
      Hello world!{' '}
      <Link
        to="/about"
        className={buttonVariants({
          variant: 'link',
        })}
      >
        About us...
      </Link>
      <ConnectButton
        client={thirdWebClient}
        wallets={thirdWebWallets}
        locale="ja_JP"
      />
    </div>
  );
}
