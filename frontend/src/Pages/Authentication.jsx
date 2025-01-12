import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const AuthAction = async (req) => {
  console.log('dafawe');

  const searchParams = new URL(req.url).searchParams;
  const mode = searchParams?.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'singup') {
    throw new Response(JSON.stringify({ message: 'Unkow mode' }), {
      status: 422,
    });
  }

  const data = await req.formData();
  console.log(data);
  if (!data) {
    console.log('dafawe');
  }
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
  const res = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (res.status === 422 || res.status === 401) {
    return res;
  }

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: 'fetch failed' }), {
      status: 500,
    });
  }
  return redirect('/');
};
