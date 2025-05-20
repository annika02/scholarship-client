import React, { useEffect, useState } from "react";
import { useLottie } from "lottie-react";

const Animation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets5.lottiefiles.com/packages/lf20_5tkzkblw.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="flex justify-center items-center my-10 min-h-[calc(100vh-390px)]">
      <div className="h-[500px] w-[500px] max-w-full">
        {animationData ? View : <p>Loading animation...</p>}
      </div>
    </div>
  );
};

export default Animation;
