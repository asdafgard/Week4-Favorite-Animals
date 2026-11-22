export default function PetSearch({ pets, searchTerm, onSearchChange }) {
  return (
    <section>
      <label htmlFor="pet-search" className="form-label fw-semibold">
        Search by animal type
      </label>

      <input
        id="pet-search"
        type="search"
        className="form-control mb-4"
        placeholder="Try koala, owl, or sloth"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-striped align-middle animal-table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Animal Type</th>
              <th scope="col">Specialty</th>
            </tr>
          </thead>

          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>
                  <img
                    src={pet.imageUrl}
                    alt={pet.name}
                    width="64"
                    height="80"
                    className="rounded object-fit-cover"
                  />
                </td>
                <th scope="row">{pet.name}</th>
                <td>{pet.animal}</td>
                <td>{pet.specialty}</td>
              </tr>
            ))}

            {pets.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No animals match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}