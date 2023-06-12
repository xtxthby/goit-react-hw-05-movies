
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavItem, NavList, Link  } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <NavItem>
              <Link to="/">
                Home<span>.</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">
                Movies<span>.</span>
              </Link>
            </NavItem>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;