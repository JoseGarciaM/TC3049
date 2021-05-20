import cx from 'classnames';
import Link from 'next/link';

const LinkType = (props) => {
  const {
    href,
    label,
    className,
    callToAction,
    ...rest
  } = props;

  return (
    <Link href={href}>
      <a
        className={cx(
          callToAction ? 'l:ml-2.5' :
            '',
          className,
        )}
        {...rest}
      >
        {label}
      </a>
    </Link>
  );
};

export default LinkType;
