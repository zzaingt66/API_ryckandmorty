function SearchBar({ value, onChange }) {
    return (
      <div className="my-4">
        <input
          type="text"
          placeholder="Search characters..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  
  export default SearchBar;
  