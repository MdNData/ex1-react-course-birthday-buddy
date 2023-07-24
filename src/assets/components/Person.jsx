export const Person = ({ data }) => {
  {
    return (
      <article>
        <img src={data.image} style={{ width: "160px" }} />
        <h4>{data.name}</h4>
        <p>{data.age} Years</p>
      </article>
    );
  }
};
