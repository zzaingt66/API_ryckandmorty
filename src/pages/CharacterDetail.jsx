import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await api.get(`character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <img src={character.image} alt={character.name} className="rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
