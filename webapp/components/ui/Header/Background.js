import {useState, useEffect} from 'react';
import cx from 'classnames';
import {useWindowScroll} from 'react-recipes';

const Background = (props) => {
  const {
    navigationVisibility,
    anyDropdownVisibility,
  } = props;
  const [backgroundBorder, setBackgroundBorder] = useState(false);
  const {y} = useWindowScroll();

  useEffect(() => {
    if (navigationVisibility == true) {
      setBackgroundBorder(true);
    } else if (anyDropdownVisibility == true) {
      setBackgroundBorder(true);
    } else if (y > 1) {
      setBackgroundBorder(true);
    } else {
      setBackgroundBorder(false);
    }
  });

  return (
    <div
      className={cx(
          'h-14 l:h-16',
          'fixed -z-10 top-0 right-0',
          'w-screen pt-0-safe box-content',
          'bg-white',
      )}
    >
      {backgroundBorder && (
        <div
          className={cx(
              'w-full h-0.25',
              'absolute -z-10 -bottom-0.25 right-0',
              'pointer-events-none',
              'bg-green',
          )}
        />
      )}
    </div>
  );
};

export default Background;
