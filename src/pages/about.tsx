import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div>
      About Us{' '}
      <Link
        to="/"
        className={buttonVariants({
          variant: 'link',
        })}
      >
        Go home
      </Link>
    </div>
  );
}
