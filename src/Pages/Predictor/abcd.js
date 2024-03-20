import React from 'react'

const abcd = () => {
  return (
    <div>
        <div className="">
      {/* <div className="flex justify-center" onClick={calculate}>
        <p className="pl-5 pr-5 pt-2 pb-2 bg-white shadow-md rounded-md">Test</p>
      </div> */}
      <div className="flex justify-center pt-10">
        <div className="p-2 w-[60vw] h-[70vh] bg-white rounded-xl p-8 grid grid-cols-2">
          <div className="rounded-xl">
            <img src={poster} alt="" className="w-full h-full rounded-xl p-10" />
          </div>
          <div className="pl-10 pt-10 text-2xl">
            <h1 className="text-center text-gray-600 text-6xl dancing-script font-bold">
              Details
            </h1>

            <p className="pt-10 text-4xl text-gray-500">{API} &#8451;</p>
            <p className="text-gray-400">{`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`}</p>
            <p className="text-gray-400 pt-5">Weather : {data[index].weather}</p>
            <p className="text-gray-400">Humidity : {data[index].humidity} &#8451;</p>
            <p className="text-gray-400">Chances for Rainfall : {data[index].rainfall}</p>
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
      <div className="flex justify-center pt-20">
        <div className="grid grid-cols-2 gap-10 p-10 w-[60vw]">
          <div className="h-[50vh]  rounded-xl">
            <div className="flex justify-center">
              <div className="bg-white rounded-full z-10">
                <img
                  src={`${eval(data[index-2].img)}`}
                  alt=""
                  className="w-[200px] p-5 drop-shadow-xl rounded-full"
                />
              </div>
              
            </div>
            <div className="card1 bg-white h-[250px] mt-[-120px] rounded-2xl pt-[100px] pl-20">
            <p className="text-black pt-5">Weather : {data[index-2].weather}</p>
            <p className="text-black">Humidity : {data[index-2].humidity} &#8451;</p>
            <p className="text-black">Chances for Rainfall : {data[index-2].rainfall}</p>
            </div>
          </div>

          <div className="h-[50vh]  rounded-xl">
          <div className="flex justify-center">
              <div className="bg-white rounded-full z-10">
                <img
                  src={`${eval(data[index+2].img)}`}
                  alt=""
                  className="w-[200px] p-5 drop-shadow-xl rounded-full"
                />
              </div>
            </div>
            
            <div className=" card2 bg-white h-[250px] mt-[-120px] rounded-2xl pt-[100px] pl-20">
            <p className="text-black pt-5">Weather : {data[index+2].weather}</p>
            <p className="text-black">Humidity : {data[index+2].humidity} &#8451;</p>
            <p className="text-black">Chances for Rainfall : {data[index+2].rainfall}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default abcd