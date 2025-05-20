import React from "react";
import { useLottie } from "lottie-react";

const Animation = () => {
  const options = {
    // Replace with your LottieFiles URL or any public JSON animation URL
    animationData:
      "https://assets5.lottiefiles.com/packages/lf20_5tkzkblw.json",
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="flex justify-center items-center my-10 min-h-[calc(100vh-390px)]">
      <div className="h-[500px] w-[500px] max-w-full">{View}</div>
    </div>
  );
};

export default Animation;
