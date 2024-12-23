import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';

function About() {
  return (
    <>
    <GoToTop />
    <div className="about">
      <section className="base-info">
        <h1>ABOUT THE GAME</h1>
        <div className="text">
          <p>
            Rocket League is a 2015 vehicular soccer video game developed and
            published by Psyonix for various home consoles and computers. It has
            been offered as free-to-play since 2020 when Epic Games acquired
            Psyonix. A sequel to 2008's Supersonic Acrobatic Rocket-Powered
            Battle-Cars, Rocket League features up to eight players assigned to
            each of the two teams, using "rocket-powered" vehicles to hit a ball
            into their opponent's goal and score points over the course of a
            match. The game includes single-player and multiplayer modes that
            can be played both locally and online, including cross-platform play
            between all versions.
          </p>
          <p>
            Psyonix began formal development of Rocket League around 2013,
            refining the gameplay from Battle-Cars to address criticism and fan
            input. Psyonix also recognized their lack of marketing from
            Battle-Cars and engaged in both social media and promotions to
            market the game. Rocket League was first released on the PlayStation
            Store and Steam for PlayStation 4 and Windows respectively in July
            2015, with ports for Xbox One and Nintendo Switch being released
            later on. Physical retail versions for PlayStation 4 and Xbox One
            were distributed starting in 2016 by 505 Games and later by Warner
            Bros. Interactive Entertainment. Versions for macOS and Linux were
            also released in 2016, but support for their online services was
            dropped in 2020. Rocket League is developed under the games as a
            service model; later updates for the game enabled the ability to
            modify core rules and added new game modes, including ones based on
            ice hockey and basketball.
          </p>
          <p>
            Rocket League was praised for its gameplay improvements over
            Supersonic Acrobatic Rocket Powered Battle-Cars, as well as its
            graphics and overall presentation, although some criticism was
            directed towards the game's physics engine. It has since been
            considered one of the greatest video games ever made. The game
            earned many industry awards and saw over 10 million sales and 40
            million players by the beginning of 2018. Rocket League has also
            been adopted as an esport, with professional players participating
            through ESL and Major League Gaming along with Psyonix's own Rocket
            League Championship Series (RLCS).
          </p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default About