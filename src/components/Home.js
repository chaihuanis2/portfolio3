import React, {useState, useEffect} from 'react';
import './Home.css';

function Home(props) {
    let {setCurrentTab} = props;

    useEffect(() => {
        setCurrentTab(1);
    }, []);

    return (
        <section id="home">
            <h1>Hi, it's Liza</h1>
            <img className="profile" src="pic.jpg" alt="Hobby 1" />
        </section>
    );
}

export default Home;