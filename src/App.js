import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [serverMsg, setServerMsg] = useState("");

  useEffect(() => {
    axios.get("https://vercel-demo-backend.vercel.app/")

      .then(response => {
        console.log(response.data);
        setServerMsg(response.data.serverMsg);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {serverMsg}
        </p>
      </header>
    </div>
  );
}

export default App;
