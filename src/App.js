import './App.css';
import React, { useEffect, useState } from "react";
import apiAtividade from './service/apiTutorial';

function App() {
  const [usuario, setUsuario] = useState();

  useEffect(()=>{
    apiAtividade.get("kaioluiz03")
    .then(
      (response) => setUsuario(response.data)
    ).catch((error) =>{
      console.error("erro" + error);
    });
  },[])

  return (
    <div className="App">
      <div id='retorno'>
        <img src={usuario?.avatar_url}/>
        <p>{usuario?.name}</p>
        <p>{usuario?.bio}</p>
      </div>
    </div>
  );
}

export default App;
