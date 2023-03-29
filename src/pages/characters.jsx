import React, { useState } from "react";
import Pagination from "../components/Pagination";

function CharactersPage({ characters }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredCharacters.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCharacters = filteredCharacters.slice(startIndex, endIndex);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        <h1>Rick and Morty Characters</h1>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <div className="character-grid">
          {currentCharacters.map((character) => (
            <div key={character.id} className="character-card">
              <img src={character.image} alt={character.name} />
              <div className="character-details">
                <h2>{character.name}</h2>
                <p>
                  {character.status} - {character.species}
                </p>
                <p>Location: {character.location.name}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
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

export default CharactersPage;
