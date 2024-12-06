import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="flex items-center justify-center transform hover:scale-105 transition duration-300"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-32 h-32 object-cover rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 hover:scale-110"
      />
    </Link>
  );
}

export default CharacterCard;
