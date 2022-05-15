import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../assets/icons';
import * as S from './Login.styles';
import { TextInput } from '../../Components/TextInput/TextInput';

type HandleSubmitProps = {
  event: React.FormEvent<HTMLFormElement>;
};

export function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = ({ event }: HandleSubmitProps) => {
    console.log(event);
  };
  return (
    <S.Container>
      <S.FormContainer
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSubmit({ event })
        }
      >
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
          buttonRight={{ label: 'Entrar', type: 'submit' }}
        />
      </S.FormContainer>
    </S.Container>
  );
}
