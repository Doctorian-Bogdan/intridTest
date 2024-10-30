import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Swiper from '../Swiper/Swiper.jsx';
import photos from '../../../utils/constants.js';
import Video from '../Video/Video.jsx';

function App() {
  const [activePhoto, setActivePhoto] = useState(photos[0]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <div className="app__container">
                <img src={activePhoto.url} alt="фото" className="app__photo" />
              </div>
              <Swiper setActivePhoto={setActivePhoto} activePhoto={activePhoto} />
            </>
        )}
        />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
