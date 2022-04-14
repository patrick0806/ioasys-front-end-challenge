import { getCookie } from "./getCookie";

export const BASE_URL = "https://books.ioasys.com.br/api/v1/";

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT",
}

export type ApiProps = {
  path: string;
  method: string;
  body?: unknown;
};

export const issueRequest = async ({
  path,
  method,
  body,
}: ApiProps): Promise<Response> => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("Authorization")}`,
    },
  });

  if (response.status === 401 && path !== "auth/sign-in") {
    const refreshToken = getCookie("refreshToken");
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 204 ) {
      document.cookie = `Authorization=${response.headers.get("Authorization")};`;
      document.cookie = `refreshToken=${response.headers.get("refresh-Token")}`;

      return issueRequest({ path, method, body });
    }

    window.location.assign("http://localhost:3000/login");
  }

  return response;
};
