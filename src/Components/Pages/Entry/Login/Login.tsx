import { useState } from 'react';
import Button from '../../../Shared/MainButton/MainButton';
import LoginStyled from './Login.styled';

const Login = (props: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setLoginUp, loginUp} = props.handler

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log('Enviando Login Info...');
    console.log('Username: ', username);
    console.log('Password: ', password);

    setUsername('');
    setPassword('');
  };

  return (
    <LoginStyled
      initial = {{
        height: 0
      }}
      animate = {{
        height: '100vh'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type = "text"
            id = "username"
            value = {username}
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type = "password"
            id = "password"
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
          />
        </div>
        <Button type={'primary'}>Entrar</Button>
        <Button type={'secondary'} onClick={() => setLoginUp(false)}>Voltar</Button>
      </form>
    </LoginStyled>
  );
};

export default Login;