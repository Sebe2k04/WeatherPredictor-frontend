import "./Home.scss";

import sc from '../../assets/images/homeimg.png'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 pt-[100px] p-10">
        <div className="">
          <h2 className="lato-black text-2xl pl-10">IOT Weather predictor</h2>
          <h4 className="pl-10 lato-regular tracking-wide text-md text-white">Using Arduino and temperature Sensor</h4>
          <p className="text-justify p-10">
            Developing a weather predictor using temperature sensors holds
            promise for revolutionizing how we anticipate and respond to
            atmospheric conditions. These sensors, strategically placed across various
            locations, continuously measure temperature fluctuations, feeding
            real-time data into the predictive models. Through machine learning
            techniques, these models can learn and adapt, refining their
            predictions over time.Moreover, the
            integration of temperature sensors into weather prediction systems
            enhances our understanding of climate dynamics, facilitating more
            informed decision-making in areas ranging from agriculture to urban
            planning. As advancements in sensor technology continue to evolve,
            so too will our ability to forecast and adapt to the ever-changing
            atmospheric conditions that shape our world.
          </p>
        </div>
        <div className="">
         <img src={sc} alt="" className="m-auto drop-shadow-xl w-[400px]"/>
        </div>
      </div>
      <div className="btn flex justify-center p-5 dancing-script font-bold ">
        <button className="bg-white pl-4 pr-4 pt-1 pb-1 rounded-xl tracking-wider animate-bounce shadow-xl text-xl">
          <Link to="/predictor">
            <p className="btntext">Get Started</p>

          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
