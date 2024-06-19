import React, { useState } from 'react';
import LinkList from './components/Linklist';
import AddLinkForm from './components/AddLinkForm';
import './App.css';
import Perfil from './assets/Perfil.gif';

const App: React.FC = () => {
  const [links, setLinks] = useState<{ url: string; label: string }[]>([]); 

  const addLink = (url: string, label: string) => {
    setLinks([...links, { url, label }]);
  };

  return (
    <div className="App">
      <h1 className='titulo-animado'>Meu LinkTree</h1>
      <div className='gif-container'>
        <img src= {Perfil} alt='Perfil ' className='circular-gif' />
      </div>
      <AddLinkForm onAddLink ={addLink} />
      <LinkList links={links} /> 
    </div>
  );
};

export default App;
