import "./featuredRooms.css";

const FeaturedRooms = () => {
  return (
    <div className="fr">
      <div className="frItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="frImg"
        />
        <span className="frName">Aparthotel</span>
        <span className="frCity">Istanbul</span>
        <span className="frPrice">Starting from $120</span>
        <div className="frRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="frItem">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="frImg"
        />
        <span className="frName">Comfort Suites of Izmir</span>
        <span className="frCity">Izmir</span>
        <span className="frPrice">Starting from $140</span>
        <div className="frRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="frItem">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="frImg"
        />
        <span className="frName">Anakara Hotel</span>
        <span className="frCity">Ankara</span>
        <span className="frPrice">Starting from $99</span>
        <div className="frRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="frItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="frImg"
        />
        <span className="frName">Hilton Adana</span>
        <span className="frCity">Adana</span>
        <span className="frPrice">Starting from $105</span>
        <div className="frRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;
