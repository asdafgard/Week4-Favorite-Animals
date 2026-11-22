import { useState } from 'react';
import { pets } from './data.js';
import PetSearch from './PetSearch.jsx';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const query = searchTerm.trim().toLowerCase();

  const filteredPets = pets.filter((pet) =>
    pet.animal.toLowerCase().includes(query)
  );

  return (
    <main className="container py-5">
      <h1 className="display-5 fw-bold mb-4">My Favorite Animals</h1>

      <PetSearch
        pets={filteredPets}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </main>
  );
}