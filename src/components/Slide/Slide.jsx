import React from 'react';

function Slide({ photo, setActivePhoto, activePhoto }) {
  function handlePhotoClick() {
    setActivePhoto(photo);
  }

  return (
    <button type="button" className={activePhoto === photo ? 'slide slide_active' : 'slide'} onClick={handlePhotoClick}>
      <img src={photo.url} alt="фото" className="slide__image" />
    </button>
  );
}

export default Slide;
