import React from 'react';

export default function Adventures() {
  return (
    <section className="adventures-section">
      <h2>My Adventures</h2>

      <div className="carousel">
        <div className="carousel-track">
          {/* first set */}
          <img src={`${process.env.PUBLIC_URL}/img/coast.jpeg`} alt="Coast" />
          <img src={`${process.env.PUBLIC_URL}/img/run.jpg`} alt="Run" />
          <img src={`${process.env.PUBLIC_URL}/img/l1rocket.jpg`} alt="Rocket" />


          {/* duplicate set for seamless loop */}
          <img src={`${process.env.PUBLIC_URL}/img/coast.jpeg`} alt="Coast" />
          <img src={`${process.env.PUBLIC_URL}/img/run.jpg`} alt="Run" />
          <img src={`${process.env.PUBLIC_URL}/img/l1rocket.jpg`} alt="Rocket" />
        </div>
      </div>

      <h2 className="connect">Lets Connect!</h2>
    </section>
  );
}
