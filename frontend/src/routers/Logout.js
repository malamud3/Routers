import { redirect } from 'react-router-dom';

const LogOutAction = () => {
  localStorage.removeItem('token');
  return redirect('/');
};

export default LogOutAction;
