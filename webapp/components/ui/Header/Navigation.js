import {useState, useEffect} from 'react';
import cx from 'classnames';

const Navigation = (props) => {
  const {
    navigationVisibility,
    children,
    ...rest
  } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (navigationVisibility == true) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className={cx(
      visible ? 'opacity-100 pointer-events-auto duration-0' :
        'opacity-0 pointer-events-none duration-200',
      'l:opacity-100 l:pointer-events-auto',
      'transition-opacity l:transition-none',
      'fixed l:static',
      '-z-10 l:z-auto',
      'top-0 left-0',
      'h-screen l:h-16 w-screen l:w-full',
    )}
    {...rest}
    >
      <div className={cx(
        visible ? 'translate-y-full duration-200' :
          'duration-200 translate-y-0 delay-700',
        'transform-gpu l:transform-none l:translate-y-0',
        'transition-transform ease-in-out l:transition-none l:duration-0',
        'fixed l:static -z-20 l:z-auto',
        '-top-full l:top-auto',
        'h-screen l:h-auto w-screen l:w-full',
        'pt-14 l:pt-0 px-0',
        'flex flex-grow flex-col l:flex-row',
        'l:justify-between items-start',
        'bg-cyan l:bg-transparent',
      )}
      >
        {children}
      </div>
    </div>
  );
};

export default Navigation;
