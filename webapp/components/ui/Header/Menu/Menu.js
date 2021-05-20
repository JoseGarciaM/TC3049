import cx from 'classnames';

const Menu = (props) => {
  return (
    <div className={cx(
        'flex flex-col l:flex-row',
        'l:items-center',
        'w-full l:w-auto l:h-16',
    )}>
      {props.children}
    </div>
  );
};

export default Menu;
