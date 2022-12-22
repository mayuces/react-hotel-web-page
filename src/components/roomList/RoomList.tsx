import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./roomList.css";

function RoomList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="rList">
      <Slider {...settings}>
        <div className="rListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="rListImg"
          />
          <div className="rListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
          </div>
        </div>
        <div className="rListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt=""
            className="rListImg"
          />
          <div className="rListTitles">
            <h1>Apartments</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="rListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt=""
            className="rListImg"
          />
          <div className="rListTitles">
            <h1>Resorts</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="rListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
            className="rListImg"
          />
          <div className="rListTitles">
            <h1>Villas</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="rListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
            className="rListImg"
          />
          <div className="rListTitles">
            <h1>Cabins</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default RoomList;
