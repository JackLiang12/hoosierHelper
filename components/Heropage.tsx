import React, { useState } from "react";

const Heropage = () => {
  const text1 = "HOOSIER";
  const desc = "Fighting Hunger";
  const desc2 = "One Donation At A Time";
  const text2 = "HELPER";
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    // <div className="flex items-center w-[100vw] h-[100vh] top-0">
    //   <div className="grow p-[10rem] HeroTitle">
    //     <a className="text-9xl z-0">{text1}</a>
    //     <br></br>
    //     <a className="text-8xl ml-[10rem] z-0">{text2}</a>
    //     <p
    //       className="text-3xl justify-center flex cursor-pointer"
    //       onClick={clickHandler}
    //     >
    //       {click ? (
    //         <span>One Donation At A Time</span>
    //       ) : (
    //         <span>Fighting Hunger</span>
    //       )}
    //     </p>
    //   </div>
    //   <div className="grow flex justify-center items-center HeroImageContainer">
    //     <img className=" HeroImage" src="/images.png" />
    //   </div>
    // </div>
    <div className=" flex justify-center items-center sticky top-0 -z-10">
      <div className="absolute h-[50vh] w-[50vw] bg-white bg-opacity-20 flex items-center justify-center text-8xl min-w-fit border-2 border-gray rounded-3xl font-custom flex-col">
        <p>Hoosier Helper</p>
        <div className="wrapper text-5xl flex h-[3rem] overflow-hidden font-kanit">
          <div className="WordsAnimation mr-[10px] text-green-800">
            <span className="block">Helping</span>
            <span className="block">Saving</span>
            {/* <span className="block"></span> */}
            <span className="block">Feeding</span>
            <span className="block">Helping</span>
          </div>
          <p>Families</p>
        </div>
      </div>
      <img className=" w-[100vw] h-[100vh] object-cover" src="/images.png" />
    </div>
  );
};

export default Heropage;
