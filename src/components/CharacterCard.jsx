import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
    >
      <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{character.name}</h2>
      </div>
    </Link>
  );
}

export default CharacterCard;
