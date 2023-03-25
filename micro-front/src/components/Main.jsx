import { useState } from 'react';

import App from './App';
import './styles.css';

const MainApp = () => {
  const [name, setName] = useState(null);

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>{name ? <p>Your name is: {name}</p> : null}</h3>
      <App onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default MainApp;
