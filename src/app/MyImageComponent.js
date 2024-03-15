import React from "react";

const MyImageComponent = () => {
  // URL of the image you want to import
  const imageUrl =
    "https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg";

  return (
    <div>
      <h1>My Image Component</h1>
      {/* Render the image using the imported URL */}
      <img src={imageUrl} alt="My Image" />
    </div>
  );
};

export default MyImageComponent;
