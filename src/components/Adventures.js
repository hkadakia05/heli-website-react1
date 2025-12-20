import React from 'react';

export default function Adventures() {
  return (
    <section className="adventures-section">
      <h2>My Adventures</h2>

      <div className="carousel">
        <div className="carousel-track">
          {/* first set */}
          <img src="/img/coast.jpeg" alt="Coast" />
          <img src="/img/run.jpg" alt="Run" />
          <img src="/img/l1rocket.jpg" alt="Rocket" />

          {/* duplicate set for seamless loop */}
          <img src="/img/coast.jpeg" alt="Coast" />
          <img src="/img/run.jpg" alt="Run" />
          <img src="/img/l1rocket.jpg" alt="Rocket" />
        </div>
      </div>

      <h2 className="connect">Lets Connect!</h2>
    </section>
  );
}
