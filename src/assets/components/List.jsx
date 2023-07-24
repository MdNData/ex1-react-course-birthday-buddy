import { Person } from "./Person";

export const List = ({ data }) => {
  return (
    <section>
      <h1>{data.length} Birthday Today</h1>
      {data.map((person, key) => {
        return <Person data={person} key={key} />;
      })}
    </section>
  );
};
