import React from "react";

function MediaStep({ type, image, Icon }) {
  if (type === "video") {
    return (
      <video
        src={image}
        autoPlay
        muted
        playsInline
        className="w-[92vw] h-[60vh] object-fill"
      />
    );
  } else if (type === "icon") {
    return <Icon className="w-[10vw] h-[10vh]  mb-[300px] animation-jump" />;
  } else {
    if (Array.isArray(image)) {
      return image.map((e, i) => (
        <img
          src={e}
          key={i}
          className="w-[270px] h-[270px] max-lg:w-[150px]  max-lg:h-[150px]"
        />
      ));
    } else {
      return <img src={image} className="w-[250px] h-[250px]" />;
    }
  }
}

export default MediaStep;
