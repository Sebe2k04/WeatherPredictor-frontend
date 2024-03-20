import "./Home.scss";
import backgroundvideo from "../../assets/videos/rainy.mp4";
import sc from "../../assets/images/homeimg.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <div className="">
        <video autoPlay loop muted id="video" className="video">
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <div className="">
          <div className="pt-10">
            <h1 className="dancing-script font-bold tracking-wide flex align-middle justify-center text-center text-white text-[120px] pt-[200px]">
              <p>Weather Predictor</p>
            </h1>
          </div>
          <div className="flex justify-center">
          <Link to="/predictor" >
          <p className="btn pl-10 pr-10 pt-5 pb-5 border-4 rounded-3xl text-4xl text-white dancing-script">Run</p>
          </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
