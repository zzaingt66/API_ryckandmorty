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
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-48 rounded-lg shadow-lg object-cover border-4 border-gray-700"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-2 text-teal-400">
            {character.name}
          </h1>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <p>
              <span className="font-semibold text-gray-300">Status: </span>
              <span
                className={`${
                  character.status === "Alive"
                    ? "text-green-400"
                    : character.status === "Dead"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {character.status}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-300">Species: </span>
              {character.species}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Gender: </span>
              {character.gender}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Origin: </span>
              {character.origin.name}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Location: </span>
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
