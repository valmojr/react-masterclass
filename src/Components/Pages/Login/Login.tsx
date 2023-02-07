import { useState } from 'react';
import LoginStyled from './Login.styled';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log('Enviando Login Info...');
    console.log('Username: ', username);
    console.log('Password: ', password);

    setUsername('');
    setPassword('');
  };

  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type = "text"
            id = "username"
            value = {username}
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type = "password"
            id = "password"
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
          />
        </div>
        <button type = "submit">Entrar</button>
      </form>
    </LoginStyled>
  );
};

export default Login;