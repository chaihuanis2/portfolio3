import React, {useEffect} from 'react';
import './Work.css';

function Work(props) {
    let {setCurrentTab} = props;

    useEffect(() => {
        setCurrentTab(2);
    }, []);

    return (
      <section id="work">
      <h2>Gaming Marketing Artist</h2>
      <div className="work-content">
        <p>I was lucky to be part of a creative team at Pocket Worlds and work together with amazing extremely talented artists. More that 3 years I dedicate myself to promote mobile games by creating eye-catchy video content. Here is my Show Reel and responsibilities 
          - animated motion graphics and static images for Highrise game performance marketing campaigns
          - ASO materials (icons, screenshots, trailer video)
          - test and analyse creative performances data, brainstorm on new concepts
          - raising Snapchat performance (specifying audience and geos)
</p>
        <video controls>
          <source src="reel2-small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    );
}

export default Work;