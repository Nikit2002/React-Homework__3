import Article from "./Article";
import data from '../../data/data.json';

const Articles = () => {
  return (
    <>
    {data.map((item) => (
      <section key={item.id}>
      <Article data={item} />
      </section>
    ))}
      
    </>
  );
};

export default Articles;
