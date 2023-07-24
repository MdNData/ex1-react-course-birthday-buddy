export const Person = ({ data }) => {
  {
    return (
      <article className="person">
        <img src={data.image} className="img" />
        <div>
          <h4>{data.name}</h4>
          <p>{data.age} Years</p>
        </div>
      </article>
    );
  }
};
