import React from 'react';
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';

export default function HELI() {
  return (
    <section className="hero">
      <ProfileImage />
      <div className="intro-text">
        <h1>HELI KADAKIA</h1>
        <p><strong>STUDENT</strong></p>
        <p>PROGRAMMER</p>
        <p><strong>SOFTWARE ENGINEER</strong></p>
        <SocialLinks />
      </div>
    </section>
  );
}
