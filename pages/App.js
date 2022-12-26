import React, { useState } from "react";
import { Container, ImageLogo } from './style';
import Input from "../components/input";
import Button from "../components/button";
import ItemRepo from "../components/itemRepo";
import { api } from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }

    }
    alert('Respositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id); 
  }

  return (
    <Container>  
      <ImageLogo src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;