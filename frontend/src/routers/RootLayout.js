import {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit,
} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

const RootLayout = () => {
  const navMain = useNavigation();
  const token = useLoaderData('root');
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenD = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenD);
  }, [token, submit]);

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
