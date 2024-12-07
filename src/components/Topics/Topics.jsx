import Topic from "./Topic";
import data from '../../data/data.json';

const Topics = () => {
  return (
    <>
    {data.map((item) => (
        <li key={item.id}>
            <Topic data={item}/>
        </li>
    ))}
    </>
  );
};

export default Topics;