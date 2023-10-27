import { useState } from "react";
import Spinner from "./Spinner";

const ImageComponent = ({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <Spinner />}
      {
        <img
          src={imageUrl}
          alt="이미지"
          style={{
            backgroundColor: isLoaded ? "transparent" : "#f1f1f1",
          }}
          onLoad={handleImageLoad}
        />
      }
    </>
  );
};

export default ImageComponent;
