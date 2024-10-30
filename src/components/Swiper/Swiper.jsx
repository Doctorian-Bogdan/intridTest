import React from 'react';
import { useNavigate } from 'react-router-dom';
import photos from '../../../utils/constants.js';
import Slide from '../Slide/Slide.jsx';

function Swiper({ setActivePhoto, activePhoto }) {
  const navigate = useNavigate();

  function handleNextButtonClick() {
    if (activePhoto.id === photos.length - 1) {
      navigate('/video');
    } else {
      setActivePhoto((state) => photos[state.id + 1]);
    }
  }

  function handlePrevButtonClick() {
    if (activePhoto.id !== 0) {
      setActivePhoto((state) => photos[state.id - 1]);
    }
  }

  function handleScroll(e) {
    if (e.target.scrollWidth - e.target.clientWidth === e.target.scrollLeft) {
      navigate('/video');
    }
  }

  return (
    <div className="swiper">
      <div className="swiper__container">
        <button type="button" className="swiper__button swiper__button_left" onClick={handlePrevButtonClick}>
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 17.5L2 9.5L10 1.5"
              stroke="white"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button type="button" className="swiper__button swiper__button_right" onClick={handleNextButtonClick}>
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 17.5L10 9.5L2 1.5"
              stroke="white"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="swiper__window" onScroll={handleScroll}>
          <div className="swiper__slides">
            {
              photos.map((photo, i) => (
                // eslint-disable-next-line max-len
                <Slide photo={photo} setActivePhoto={setActivePhoto} activePhoto={activePhoto} key={i + photo} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
