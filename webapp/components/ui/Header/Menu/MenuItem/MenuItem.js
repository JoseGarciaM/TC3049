import {Button, Link, Dropdown} from './Types';

const MenuItem = (props) => {
  const {
    className,
    itemType,
    ...rest
  } = props;

  return (
    <>
      {itemType === 'button' ? (
        <Button
          className={className}
          {...rest}
        />
      ) : itemType === 'link' ? (
        <Link
          className={className}
          {...rest}
        />
      ) : itemType === 'dropdown' ? (
        <Dropdown
          className={className}
          {...rest}
        />
      ) : null}
    </>
  );
};

export default MenuItem;
