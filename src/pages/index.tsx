import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';

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
    </div>
  );
}
