import React from 'react';

function Video() {
  return (
    <div className="video">
      <div className="video__container">
        <iframe className="video__content" title="видео с марго робби" src="https://vk.com/video_ext.php?oid=-98115717&id=456243320&hash=6ad700cdd4ce6aaa" width="640" height="360" frameBorder="0" allowFullScreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" />
      </div>
    </div>
  );
}

export default Video;
