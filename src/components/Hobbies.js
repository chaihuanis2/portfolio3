import React, {useEffect} from 'react';
import './Hobbies.css';

function Hobbies(props) {
    let {setCurrentTab} = props;

    useEffect(() => {
        setCurrentTab(3);
    }, []);

    return (
      <section id="hobbies">
      <h2>Hobby</h2>
      <div className="hobbies-content">
      <p>Already during many years, my main hobby is yoga. I try to practise asanas, breathing techniques (Pranayama) and meditate every day. Yoga not only keeps my body fit and aligned, but also my mind fresh and calm. January 2024 I spent in Yoga Ashram in India, and got yoga teacher's licence.</p>
      <img src="yoga.png" alt="Hobby 1" />
      </div>
    </section>
    );
}

export default Hobbies;