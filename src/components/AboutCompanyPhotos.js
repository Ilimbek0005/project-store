import React, { useState } from 'react';

const AboutCompanyPhotos = () => {
  const photos = [
    '/images/photo1.png',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
  ];

  const [current, setCurrent] = useState(0);

  const nextPhoto = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <>
      {/* Изображение */}
      <img
        src={photos[current]}
        alt={`Фото ${current + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />

     
      <div
        style={{
          position: 'absolute',
          bottom: '-70px',
          right: '0',
          display: 'flex',
          gap: '15px',
        }}
      >
        <button
          onClick={prevPhoto}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            fontSize: '28px',
            color: '#0077c8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
          }}
        >
          ←
        </button>
        <button
          onClick={nextPhoto}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            fontSize: '28px',
            color: '#0077c8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
          }}
        >
          →
        </button>
      </div>
    </>
  );
};

export default AboutCompanyPhotos;