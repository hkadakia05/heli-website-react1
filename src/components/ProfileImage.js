import React from 'react';
import './ProfileImage.css'; 

export default function ProfileImage() {
  return (
    <div className="photo">
      <img src={`${process.env.PUBLIC_URL}/images/IMG_9256.jpg`} alt="Heli Kadakia" />
    </div>
  );
}
