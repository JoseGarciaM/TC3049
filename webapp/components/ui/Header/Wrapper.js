import cx from 'classnames';

const Wrapper = (props) => {
  const {
    children,
    ...rest
  } = props;

  return (
    <nav
      className={cx(
          'fixed',
          'z-130',
          'top-0 right-0',
          'w-screen max-w-full',
          'mt-0-safe px-4-safe l:px-5-safe',
          'flex justify-between',
      )}
      {...rest}
    >
      {children}
    </nav>
  );
};

export default Wrapper;
