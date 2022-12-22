import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import RoomList from "../../components/roomList/RoomList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by room type</h1>
        <RoomList />
      </div>
    </div>
  );
};

export default Home;
