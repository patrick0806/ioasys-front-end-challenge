import { User } from '../../types/user';
import { HttpMethod, makeRequest } from '../../util/makeRequest';

type SignInProps = {
  email: string;
  password: string;
};

async function SignIn({
  email,
  password,
}: SignInProps): Promise<User | string> {
  const response = await makeRequest({
    path: '/auth/sign-in',
    method: HttpMethod.POST,
    body: { email, password },
  });

  const authorization = response.headers.get('Authorization');
  const refreshToken = response.headers.get('refresh-Token');

  if (response.status === 200 && authorization && refreshToken) {
    const user = await response.json();
    sessionStorage.setItem('authorization', authorization);
    sessionStorage.setItem('refreshToken', refreshToken);
    sessionStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  const error = await response.json();
  return error.errors.message;
}

async function SignOut() {
  sessionStorage.clear();
  window.location.assign('http://localhost:3000/login');
}

export { SignIn, SignOut };
