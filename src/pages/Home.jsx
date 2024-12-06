import { useEffect, useState } from "react";
import api from "../api/api";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Estado para la página actual

  // Fetch Characters cada vez que cambie la página
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true); // Activa el estado de carga
      try {
        const response = await api.get(`character/?page=${page}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false); // Desactiva el estado de carga
      }
    };
    fetchCharacters();
  }, [page]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  // Manejo del estado de carga
  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <SearchBar value={search} onChange={setSearch} />
      
      {/* Contenedor de personajes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          disabled={page === 1}
        >
          Back
        </button>
        <span className="text-lg font-semibold text-white">{` ${page}`}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
