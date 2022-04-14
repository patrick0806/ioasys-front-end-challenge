import { User } from "../types/user";
import { issueRequest } from "../util/issusRequest";

type SignInProps = {
  email: string;
  password: string;
};

export async function SignIn({
  email,
  password,
}: SignInProps): Promise<User | string> {
  const response = await issueRequest({
    path: "auth/sign-in",
    method: "POST",
    body: { email, password },
  });

  if (response.status === 200) {
    const authorization = response.headers.get("Authorization");
    const refreshToken = response.headers.get("refresh-Token");

    document.cookie = `Authorization=${authorization}`;
    document.cookie = `refreshToken=${refreshToken}`;

    const user: User = await response.json();
    document.cookie = `user=${JSON.stringify(user)}`;
    return user;
  }

  const error = await response.json();
  return error.errors.message;
}
