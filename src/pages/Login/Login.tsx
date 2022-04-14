import * as React from "react";
import * as S from "./Login.styles";
import { Logo } from "../../assets/icons";
import { TextInput } from "../../components/TextInput/TextInput";
import { Button } from "../../components/Button/Button";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <S.Container>
      <S.PageTitle>
        <Logo /> &nbsp; Books
      </S.PageTitle>
      <S.FormContainer>
        <TextInput
          placeholder="Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextInput
          placeholder="Senha"
          name="password"
          isPassword={true}
          onChange={(event) => setPassword(event.target.value)}
          buttonRight={
            <Button
              label="Entrar"
              onClick={async () => {
                console.log("cliquei");
              }}
            />
          }
        />
      </S.FormContainer>
    </S.Container>
  );
}
