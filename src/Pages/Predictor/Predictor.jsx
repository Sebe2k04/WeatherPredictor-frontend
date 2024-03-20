import { useEffect, useState } from "react";
import "./Predictor.scss";
import data from "../../data.json";
import poster from "../../assets/images/bgrainy.avif";
import w1 from "../../assets/images/w1.png";
import w2 from "../../assets/images/w2.png";
import w3 from "../../assets/images/w3.png";
import w4 from "../../assets/images/w4.png";
import w5 from "../../assets/images/w5.png";
import w6 from "../../assets/images/w6.png";
import w7 from "../../assets/images/w7.png";
import w8 from "../../assets/images/w8.png";
import w9 from "../../assets/images/w9.png";
import w10 from "../../assets/images/w10.png";
import w11 from "../../assets/images/w11.png";
import w12 from "../../assets/images/w12.png";
import backgroundvideo from "../../assets/videos/rainy.mp4";

const Predictor = () => {
  const date = new Date();
  const [API, setAPI] = useState(0);
  const [index, setIndex] = useState(10);
  useEffect(() => {
    fetch("http://localhost:9000/testapi")
      .then((res) => res.text())
      .then((res) => setAPI(res))
      .then(() => calculate())
      .catch((e) => console.log(e.message));
  }, []);

  const calculate = async () => {
    let num;
    num = Number(API);
    if (num > 20) {
      let result = Math.round(num) - 20;
      setIndex(result);
      console.log(result);
    }
  };

  return (
    <div className="">
      <video autoPlay loop muted id="video" className="video">
        <source src={backgroundvideo} type="video/mp4" />
      </video>
      <div className="">
        <div className="">
          <div className="pt-10">
            <h1 className="dancing-script font-bold tracking-wide flex align-middle justify-center text-center text-white text-[80px] ">
              <p>Weather Predictor</p>
            </h1>
          </div>
          <div className=" flex justify-center pt-10">
            <div className="maincard border-4  w-[60vw] h-[70vh]  rounded-[40px] p-8 grid grid-cols-2">
              <div className="p-5">
                <img
                  src={poster}
                  alt=""
                  className="w-full h-full  rounded-[40px]"
                />
              </div>
              <div className="pl-10 pt-10 text-2xl">
                <h1 className="text-center text-black text-6xl dancing-script font-bold">
                  Details
                </h1>

                <p className="pt-10 text-4xl text-black">{API} &#8451;</p>
                <p className="text-black">{`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`}</p>
                <p className="text-black pt-5">
                  Weather : {data[index].weather}
                </p>
                <p className="text-black">
                  Humidity : {data[index].humidity} &#8451;
                </p>
                <p className="text-black">
                  Chances for Rainfall : {data[index].rainfall}
                </p>
                <div className="flex justify-center">
                  <img
                    src={`${eval(data[index].img)}`}
                    alt=""
                    className="w-[150px] m-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20 ">
        <div className="grid grid-cols-2 gap-[100px] p-10 w-[60vw] text-2xl text-white">
          <div className="h-[50vh]  rounded-xl ">
            <div className="flex justify-center">
              <div className="cardcontent rounded-full z-10 border-4 border-white">
                <img
                  src={`${eval(data[index - 2].img)}`}
                  alt=""
                  className="w-[250px] p-5 drop-shadow-xl rounded-full"
                />
              </div>
            </div>
            <div className="card1 cardcontent h-[350px] mt-[-140px] rounded-2xl pt-[150px] border-4 border-white text-center">
              <p className=" pt-5">Weather : {data[index - 2].weather}</p>
              <p className="">Humidity : {data[index - 2].humidity} &#8451;</p>
              <p className="">
                Chances for Rainfall : {data[index - 2].rainfall}
              </p>
            </div>
          </div>

          <div className="h-[50vh]  rounded-xl ">
            <div className="flex justify-center">
              <div className="cardcontent rounded-full z-10 border-4 border-white">
                <img
                  src={`${eval(data[index + 2].img)}`}
                  alt=""
                  className="w-[250px] p-5 drop-shadow-xl rounded-full"
                />
              </div>
            </div>
            <div className="card1 cardcontent h-[350px] mt-[-140px] rounded-2xl pt-[150px] border-4 border-white text-center">
              <p className=" pt-5">Weather : {data[index + 2].weather}</p>
              <p className="">Humidity : {data[index + 2].humidity} &#8451;</p>
              <p className="">
                Chances for Rainfall : {data[index - +2].rainfall}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictor;
