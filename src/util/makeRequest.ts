const BASE_URL = 'https://books.ioasys.com.br/api/v1/';

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

type RequestProps = {
  path: string;
  method: HttpMethod;
  body?: unknown;
};

const makeRequest = async ({
  path,
  method,
  body,
}: RequestProps): Promise<Response> => {
  const authorization = sessionStorage.getItem('authorization');
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ? `Bearer ${authorization}` : '',
    },
  });

  if (response.status === 401 && path !== 'auth/sign-in') {
    const refreshToken = sessionStorage.getItem('refreshToken');
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 204) {
      const authorization = response.headers.get('Authorization');
      const refreshToken = response.headers.get('refresh-Token');
      if (authorization && refreshToken) {
        sessionStorage.setItem('authorization', authorization);

        sessionStorage.setItem('refreshToken', refreshToken);
        return makeRequest({ path, method, body });
      }
      sessionStorage.clear();
      window.location.assign('http://localhost:3000/login');
    }

    window.location.assign('http://localhost:3000/login');
  }

  return response;
};

export { makeRequest };
