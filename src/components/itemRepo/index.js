import React from 'react'
import { ItemContainer } from './style';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver Repositório</a><br />
        <a href='#' rel="noreferrer" className='remove'>Remover</a>
        <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
