import Featured from "../../components/featured/Featured";
import FeaturedRooms from "../../components/featuredRooms/FeaturedRooms";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
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
        <h1 className="homeTitle">Featured Rooms</h1>
        <FeaturedRooms />

        <MailList />
      </div>
    </div>
  );
};

export default Home;
