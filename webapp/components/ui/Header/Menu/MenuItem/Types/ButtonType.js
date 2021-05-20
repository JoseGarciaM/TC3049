import cx from 'classnames';
import Button from 'components/ui/Button';

const ButtonType = (props) => {
  const {
    label,
    className,
    callToAction,
    ...rest
  } = props;

  return (
    <Button
      className={cx(
        callToAction ? 'l:ml-2.5' :
          '',
        className,
      )}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default ButtonType;
