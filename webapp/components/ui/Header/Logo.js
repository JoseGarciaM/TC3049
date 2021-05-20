import Link from 'next/link';
import cx from 'classnames';

const Logo = (props) => {
  return (
    <Link href="/">
      <a
        className={cx(
            'h-14 l:h-16',
            'flex items-center',
            'pr-6 pt-px',
        )}
      >
        Logo
      </a>
    </Link>
  );
};

export default Logo;
