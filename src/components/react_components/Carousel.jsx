import React, { useState } from 'react';
import './Carousel.css';

const Carrusel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carrusel">
      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt="Carrusel"
        className="image"
        onClick={openModal}
      />
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>
      
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="prevM" onClick={prevImage}>
              &#10094;
            </button>
            <img
              src={images[currentIndex]}
              alt="Imagen Completa"
              className="modal-image"
            />
            <button className="nextM" onClick={nextImage}>
              &#10095;
            </button>
            <button className="close" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;