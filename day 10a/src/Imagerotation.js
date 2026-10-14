import React, { useState } from 'react';

const ImageRotation = () => {
  const [rotation, setRotation] = useState(0);

  const rotateImage = () => {
    setRotation((prevRotation) => prevRotation + 90); // rotate by 90° each click
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Rotation
      </h1>
      <img
        src="image2.jpg"
        alt="Rotating"
        style={{
          height: "2000px",
          width: "2000px",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease"
        }}
      />
      <br />
      <button onClick={rotateImage} style={{ marginTop: "20px" }}>
        Rotate Image
      </button>
      <button onClick={() => setRotation((prevRotation) => prevRotation - 90)} style={{ marginTop: "20px", marginLeft: "10px" }}>
        LEFT ROTATE
      </button>
      <button onClick={() => setRotation((prevRotation) => prevRotation + 90)} style={{ marginTop: "20px", marginLeft: "10px" }}>
        RIGHT ROTATE
      </button>
    </div>
  );
};

export default ImageRotation;