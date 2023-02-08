import { useState } from 'react'
import Entry from './Components/Pages/Entry/Entry';
import Main from './Components/Pages/Main/Main';

function App() {
  const [logged, setLogged] = useState<boolean>(false);

  if (!logged) {
    return <Entry/>
  } else {
    return <Main/>
  }
}

export default App;
