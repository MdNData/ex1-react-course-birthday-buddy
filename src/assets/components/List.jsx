import { Person } from "./Person";

export const List = ({ data, handle }) => {
  return (
    <section className="container">
      <h1>{data.length} Birthday Today</h1>
      {data.map((person, key) => {
        return <Person data={person} key={key} />;
      })}
      <button onClick={handle} className="btn btn-block">
        Clear All
      </button>
    </section>
  );
};
