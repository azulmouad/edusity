import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() =>
            setPlayState(true)
          } /* Update Player State to show video */
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nusturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptate libero dignissimos nisi corrupti quos a, placeat ratione
          quasi fugiat ea modi voluptatum. Dolore magnam aperiam quibusdam
          laboriosam rem odio saepe, reiciendis in dignissimos distinctio atque
          nisi molestiae similique quae. Harum tempora accusamus est perferendis
          voluptate cum distinctio possimus accusantium?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          est. Odit, asperiores est molestiae aperiam inventore dignissimos
          illum sapiente nobis quis totam unde ipsa tempore eum debitis
          accusantium consequuntur dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          explicabo distinctio quia alias atque, hic fugiat aliquid consequuntur
          accusamus autem.
        </p>
      </div>
    </div>
  );
};

export default About;
