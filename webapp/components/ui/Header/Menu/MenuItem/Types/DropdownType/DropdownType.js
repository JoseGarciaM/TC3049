import {useState} from 'react';
import cx from 'classnames';
import {Button} from '..';

const DropdownType = (props) => {
  const {
    label,
    className,
    backdropVisibility,
    handleAnyDropdownVisibility,
    children,
    ...rest
  } = props;
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const showDropdown = () => {
    setDropdownVisibility(true);
    handleAnyDropdownVisibility(true);
  };

  const hideDropdown = () => {
    setDropdownVisibility(false);
    handleAnyDropdownVisibility(false);
  };

  const toggleDropdown = () => {
    if (backdropVisibility === true) {
      hideDropdown();
    } else if (backdropVisibility === false) {
      showDropdown();
    }
  };

  return (
    <div
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className={cx(
          'group',
          'w-full l:w-auto l:h-full',
      )}
      {...rest}
    >
      <Button
        label={label}
        onClick={toggleDropdown}
        className={cx(
            'l:h-full',
            'l:group-hover:shadow-inner-header',
            className,
        )}
      />
      <div
        className={cx(
          dropdownVisibility ? 'opacity-100 pointer-events-auto' :
            'hidden opacity-0 pointer-events-none',
          'static z-20 l:fixed l:-z-20',
          'top-0 right-0',
          'w-full',
          'l:pt-16',
          'bg-yellow-400',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownType;
