export function Plants({ data }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul>
        {data.map((plant) => {
          return (
            <li>
              <figure>{plant.image}</figure>
              <p>{plant.name}</p>
              <button>Click me</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
