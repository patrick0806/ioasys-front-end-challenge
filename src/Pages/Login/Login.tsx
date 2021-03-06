import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../assets/icons';
import * as S from './Login.styles';
import { TextInput } from '../../Components/TextInput/TextInput';
import { SignIn } from '../../services/user/userService';
import { useUserContext } from '../../context/UserContext';

type HandleSubmitProps = {
  event: React.FormEvent<HTMLFormElement>;
};

export function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const { dispatch } = useUserContext();

  const handleSubmit = async ({ event }: HandleSubmitProps) => {
    event.preventDefault();
    const response = await SignIn({ email, password });
    if (typeof response === 'string') {
      setError(response);
    } else {
      dispatch({ type: 'LOGIN', payload: response });
      navigate('/books');
    }
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
