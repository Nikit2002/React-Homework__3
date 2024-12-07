const Article = ({ data }) => {
    return (
      <>
        <div>
            <h2>{data.title}</h2>
            <div>
              <p>{data.body}</p>
            </div>
        </div>
      </>
    );
  };
  
  export default Article;