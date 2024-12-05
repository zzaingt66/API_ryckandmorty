import { useEffect, useState } from "react";
import api from "../api/api";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await api.get("character");
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default Home;
