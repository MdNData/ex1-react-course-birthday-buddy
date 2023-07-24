export const Person = ({ data }) => {
  {
    return (
      <article>
        <img src={data.image} style={{ width: "160px" }} />
        <h2>{data.name}</h2>
        <h3>{data.age} Years</h3>
      </article>
    );
  }
};
