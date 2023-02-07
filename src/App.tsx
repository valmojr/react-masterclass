import { useState } from 'react'
import Login from './Components/Pages/Login/Login';
import Main from './Components/Pages/Main/Main';

function App() {
  const [logged, setLogged] = useState<boolean>(false);

  if (!logged) {
    return <Login/>
  } else {
    return <Main/>
  }
}

export default App;
