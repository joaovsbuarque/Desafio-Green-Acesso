import React, { useState } from "react";
import Pagination from "../components/Pagination";

function CharactersPageAll({ characters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalItems = filteredCharacters.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCharacters = filteredCharacters.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <>
            <li key={character.id}>{character.name}</li>
            <img src={character.image} key={character.image} />
            <p key={character.id}>Planeta de Origen: {character.origin.name}</p>
            <p>Localização: {character.location.name}</p>
            <p>Especie: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Genero: {character.gender}</p>
          </>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const characters = data.results;

  return {
    props: { characters },
  };
}

export default CharactersPageAll;
