import { TanstackQueryProvider } from './tanstack-query';
import { ThirdWebProvider } from './thirdweb-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackQueryProvider>
      <ThirdWebProvider>{children}</ThirdWebProvider>
    </TanstackQueryProvider>
  );
}
