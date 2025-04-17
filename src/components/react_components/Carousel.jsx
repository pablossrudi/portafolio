import React, { useState } from 'react';
import './Carousel.css';

const Carrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen size
  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 1120) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };

    // Set initial count
    updateVisibleCount();

    // Add resize listener
    window.addEventListener('resize', updateVisibleCount);

    // Cleanup
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1 >= images.length) ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 < 0) ? Math.max(0, images.length - visibleCount) : prevIndex - 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Calculate visible images based on current visibleCount
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({
        src: images[index],
        index
      });
    }
    return visibleImages;
  };

  return (
    <div className="carrusel">
      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>

      <div className="carousel-container">
        {getVisibleImages().map((image, idx) => (
          <div key={idx} className="carousel-item">
            <img
              src={image.src}
              alt={`Carrusel ${idx + 1}`}
              className="image"
              onClick={() => openModal(image.index)}
            />
          </div>
        ))}
      </div>

      <button className="next" onClick={nextImage}>
        &#10095;
      </button>

      {isModalOpen && (
        <div className="modal">
          <button className="close" onClick={closeModal}>
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ffffff/multiply.png" alt="multiply" />
          </button>
          <button className="prevM" onClick={prevImage}>
            &#10094;
          </button>
          <button className="nextM" onClick={nextImage}>
            &#10095;
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt="Imagen Completa"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;