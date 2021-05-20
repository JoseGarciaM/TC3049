import {useState, useEffect} from 'react';
import cx from 'classnames';

const Backdrop = (props) => {
  const {
    backdropVisibility,
    ...rest
  } = props;
  const [visible, setVisible] = useState(backdropVisibility);

  useEffect(() => {
    if (backdropVisibility == true) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <div
      className={cx(
        visible ? 'flex' : 'hidden',
        'fixed z-100 top-0 right-0',
        'h-screen w-screen',
        'bg-black bg-opacity-60',
        'transition-all duration-200 linear',
      )}
      {...rest}
    />
  );
};

export default Backdrop;
