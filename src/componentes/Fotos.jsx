import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const Gallery = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(photos[0]);

  useEffect(() => {
    setCurrentImage(photos[0]);
  }, [photos]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="gallery">
      {photos.map((image) => (
        <div key={image.id} onClick={() => handleImageClick(image)}>
          <Image src={image.url} alt={image.name} />
        </div>
      ))}
      <div className="current-image">
        <Image src={currentImage.url} alt={currentImage.name} />
      </div>
    </div>
  );
};

export default Gallery;
