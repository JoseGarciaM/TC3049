import {useState} from 'react';
import {Wrapper, Logo, Navigation, Background} from '.';
import {Menu, MenuItem} from './Menu';
import {useWindowSize} from 'react-recipes';
import Backdrop from 'components/ui/Backdrop';
import LockScroll from 'components/ui/LockScroll';

export default function Header(props) {
  const [navigationVisibility, setNavigationVisibility] = useState(false);
  const [backdropVisibility, setBackdropVisibility] = useState(false);
  const [anyDropdownVisibility, setAnyDropdownVisibility] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisibility(!navigationVisibility);
  };
  function handleAnyDropdownVisibility(anyDropdownVisibility) {
    setBackdropVisibility(anyDropdownVisibility);
    setAnyDropdownVisibility(anyDropdownVisibility);
  }

  const {width} = useWindowSize();

  return (
    <header>
      <Wrapper>
        <Logo/>
        {width < '992' ? (
          <button onClick={toggleNavigation}>
            {navigationVisibility ? (
              <>cerrar</>
            ) : (
              <>abrir</>
            )}
          </button>
        ) : null}
        <Navigation navigationVisibility={navigationVisibility}>
          <Menu>
            <MenuItem
              itemType="dropdown"
              backdropVisibility={backdropVisibility}
              handleAnyDropdownVisibility={handleAnyDropdownVisibility}
              label={'Venta'}
            >
              dd1
            </MenuItem>
            <MenuItem
              itemType="dropdown"
              backdropVisibility={backdropVisibility}
              handleAnyDropdownVisibility={handleAnyDropdownVisibility}
              label={'Renta'}
            >
              dd2
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem
              itemType="button"
              label={'Iniciar Sesion'}
            />
            <MenuItem
              itemType="link"
              href="/"
              label={'Anunciate'}
            />
          </Menu>
        </Navigation>
        <Background
          navigationVisibility={navigationVisibility}
          anyDropdownVisibility={anyDropdownVisibility}
        />
      </Wrapper>
      {width < '992' ? (
        <>
          {navigationVisibility ? (
            <LockScroll/>
          ) : null}
        </>
      ) : (
        <>
          {anyDropdownVisibility ? (
            <LockScroll/>
          ) : null}
          <Backdrop backdropVisibility={backdropVisibility}/>
        </>
      )}
    </header>
  );
}
