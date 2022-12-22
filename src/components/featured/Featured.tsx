import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1588432534059-3e24e9933942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWRhbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="oda"
        />
        <div className="featuredTitles">
          <h1>Adana</h1>
          <h2>21 Hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGlzdGFuYnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="oda"
        />

        <div className="featuredTitles">
          <h1>İstanbul</h1>
          <h2>144 Hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1561392381-21a334cbdde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXptaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="oda"
        />

        <div className="featuredTitles">
          <h1>İzmir</h1>
          <h2>49 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
