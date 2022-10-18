import React from 'react';
import './testimonials.css';
import testimonials_profileimg from './../../../../assets/homepage/testimonial_profile.png';

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <h2>Testimonials</h2>
      <div className="testimonials_container">

        <div className="testimonials_card">
          <div className="testimonials_profile">
            <img src={testimonials_profileimg} />
          </div>
          <div className="testimonials_info">
            <span className="inverted_comma">“</span>
            <p>The item purchased was as per the image they had. Dimensions were also perfect. Looks very authentic. After sales support is extremely good too.</p>
            <span className="testimonials_name">Sofia brichet</span>
          </div>
        </div>

        <div className="testimonials_card">
          <div className="testimonials_profile">
            <img src={testimonials_profileimg} />
          </div>
          <div className="testimonials_info">
            <span className="inverted_comma">“</span>
            <p>The item purchased was as per the image they had. Dimensions were also perfect. Looks very authentic. After sales support is extremely good too.</p>
            <span className="testimonials_name">Sofia brichet</span>
          </div>
        </div>

      </div>
      <div className="testimonials_navigation">
        <div className="testimonials_active"></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Testimonials;
