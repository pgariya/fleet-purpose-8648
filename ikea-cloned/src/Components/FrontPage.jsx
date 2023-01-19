import React, { useEffect, useRef } from "react";
import style from "./FrontPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const FrontPage = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.frontNavbar}>
        <div className={style.frontNavbarHeading}>Akash</div>
        <div className={style.frontNavbarLogo}>
          <GiHamburgerMenu />
        </div>
      </div>

      <div className={style.Compoent_1}>
        <div className={style.Compoent_1Video}>
          <video
            style={{ borderRadius: "12px", width: "100%", height: "545px" }}
            playsInline
            loop
            muted
            controls
            alt="video"
            src="https://www.ikea.com/global/en/images/1973_orangev3_2b69a9b053.mp4"
            ref={videoEl}
          />
        </div>

        <div className={style.Compoent_1watch}>
          <div className={style.Compoent_1yellow}>
            <h1>
              Go Shopping <ArrowForwardIcon />
            </h1>

            <br />
            <br />
            <hr style={{ border: "2px solid grey" }} />
            <div className={style.ikea}>
              <p>Online Store : </p>
              <h2>ikea.in</h2>
              <IoIosArrowUp />
            </div>
          </div>
          <div className={style.Compoent_1watch_image}>
            <img
              src="https://www.ikea.com/global/en/images/clock_1153a706e3.png?f=xl"
              alt="watch"
            />
          </div>
        </div>
      </div>

      <div className={style.Compoent_2_blue}>
        <div className={style.Compoent_2_blue_1}>
          <ArrowForwardIcon color="white" fontSize="30px" />
          <p>IKEA Everyday Rituals</p>
          <h1>Dare to take a cold dip</h1>
        </div>
        <div className={style.Compoent_2_blue_2}>
          <video
            style={{ borderRadius: "12px", width: "100%" }}
            playsInline
            loop
            muted
            controls
            alt="video"
            src="https://www.ikea.com/global/en/images/swimstart_1a9c1adba8.mp4"
            ref={videoEl}
          />
        </div>
      </div>

      <div className={style.Compoent_farmhouse}>
        <div className={style.Compoent_farmhouse_1}>
          <img
            src="https://www.ikea.com/global/en/images/Livingrrom_16_8278620845.jpg?f=g"
            alt="123"
          />
        </div>
      </div>

      <div className={style.Compoent_map}>
        <div className={style.Compoent_map_1}>
          <img
            src="https://www.ikea.com/global/en/images/japan_final_fa22b99d2e.jpg?f=g"
            alt="akash1"
          />
        </div>

        <div className={style.Compoent_map_2}>
          <img
            src="https://www.ikea.com/global/en/images/brew_the_moment_photo_3x4_v9_265a83e4ec.jpg?f=g"
            alt="akash"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
