import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  const navMain = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navMain.state === 'loading' && <p>loading...</p>}
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
