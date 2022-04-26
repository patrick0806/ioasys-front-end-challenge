import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Login.styles";
import { Logo } from "../../assets/icons";
import { TextInput } from "../../components/TextInput/TextInput";
import { Button } from "../../components/Button/Button";
import { SignIn } from "../../services/SignIn";
import { useUserContext } from "../../context/UserContext";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  return (
    <S.Container>
      <S.FormContainer>
        <S.PageTitle>
          <Logo /> &nbsp; Books
        </S.PageTitle>

        <TextInput
          placeholder="Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextInput
          placeholder="Senha"
          name="password"
          isPassword={true}
          error={error}
          onChange={(event) => setPassword(event.target.value)}
          buttonRight={
            <Button
              label="Entrar"
              onClick={async () => {
                const response = await SignIn({ email, password });
                if (typeof response === "string") {
                  setError(response);
                } else {
                  dispatch({ type: "LOGIN", payload: response });
                  navigate("/books");
                }
              }}
            />
          }
        />
      </S.FormContainer>
    </S.Container>
  );
}
