import React, { useEffect, useRef } from "react";
import style from "./FrontPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { border } from "@chakra-ui/react";

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
    AOS.init();
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
            width="320px"
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
        <div className={style.Compoent_2_blue_1} data-aos="fade-right">
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
          <div>
            <h1 className={style.image_farmouse_h1}>Inspiring homes</h1>
            <p className={style.farmouse_text}>
              <span data-aos="fade-right" className={style.hide_farmouse}>
                <ArrowForwardIcon />
              </span>
              A visit to a Swedish farmhouse
            </p>
          </div>
        </div>
      </div>

      <div className={style.Compoent_map}>
        <div className={style.Compoent_map_1}>
          <img
            src="https://www.ikea.com/global/en/images/japan_final_fa22b99d2e.jpg?f=g"
            alt="akash1"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.Compoent_map_1_h1}>IKEA everywhere!</h1>
            <p className={style.Compoent_map_1_p}>
              <span data-aos="fade-right" className={style.Compoent_map_1_hide}>
                <ArrowForwardIcon />
              </span>
              IKEA in Japan
            </p>
          </div>
        </div>

        <div className={style.Compoent_map_2}>
          <img
            src="https://www.ikea.com/global/en/images/brew_the_moment_photo_3x4_v9_265a83e4ec.jpg?f=g"
            alt="akash"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.Compoent_map_2_h1}>IKEA everyday rituals</h1>
            <p className={style.Compoent_map_2_p}>
              <span data-aos="fade-right" className={style.Compoent_map_2_hide}>
                <ArrowForwardIcon />
              </span>
              Coffee on a boat
            </p>
          </div>
        </div>
      </div>

      <div className={style.Compoent_room}>
        <div className={style.Compoent_room_1}>
          <img
            src="https://www.ikea.com/global/en/images/slice2_3_4_778c3bf40c.jpg?f=g"
            alt="1234"
          />

          <h1 className={style.image_text_h1}>smart plays solution</h1>
          <p className={style.image_text}>
            <span data-aos="fade-right" className={style.hide_arrow}>
              <ArrowForwardIcon />
            </span>
            Anna's everything room
          </p>
        </div>
      </div>

      <div className={style.Compoent_map}>
        <div className={style.Compoent_map_1}>
          <img
            src="https://www.ikea.com/global/en/images/trashcollectionstartpage_154a5a9baf.jpeg?f=g"
            alt="akash1"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.Compoent_map_1_h1_2ndsession}>
              IKEA Norway's conscious & clever campaign
            </h1>
            <p className={style.Compoent_map_1_p_2ndsession}>
              <span
                data-aos="fade-right"
                className={style.Compoent_map_1_hide_2ndsession}
              >
                <ArrowForwardIcon />
              </span>
              The trash collection
            </p>
          </div>
        </div>

        <div className={style.Compoent_map_2}>
          <video
            width="320px"
            style={{
              borderRadius: "11px",
              width: "100%",
              height: "600px",
              border: "1px solid black",
            }}
            playsInline
            loop
            muted
            controls
            alt="video"
            src="https://www.ikea.com/global/en/images/bathroom_slider_7a1e920bd7.mp4"
            ref={videoEl}
          />
          <div>
            <h1 className={style.Compoent_map_2_h1_2ndsession}>
              Design Timeline
            </h1>
            <p className={style.Compoent_map_2_p_2ndsession}>
              <span
                data-aos="fade-right"
                className={style.Compoent_map_2_hide_2ndsession}
              >
                <ArrowForwardIcon />
              </span>
              IKEA bathroom
            </p>
          </div>
        </div>
      </div>

      <div className={style.Compoent_map}>
        <div className={style.Compoent_map_1}>
          <img
            src="https://www.ikea.com/global/en/images/PH_186334_87409ee9fa.jpg?f=g"
            alt="akash1"
            data-aos="fade-up"
          />
        </div>

        <div className={style.Compoent_map_2}>
          <img
            src="https://www.ikea.com/global/en/images/Linus_Malmo_Living_Room5_65683d4ad5.jpg?f=g"
            alt="akash"
            data-aos="fade-up"
          />
        </div>
      </div>

      <div className={style.Compoent_mafia}>
        <div className={style.Compoent_mafia_1} data-aos="fade-right">
          <p>OBEGRANSAD collection</p>
          <h1>
            {" "}
            <span className={style.hide_arrow}>
              <ArrowForwardIcon />
            </span>
            Swedish House Mafia collab
          </h1>
        </div>

        <div className={style.Compoent_mafia_1}>
          <p>Inspiring homes</p>
          <h1>
            {" "}
            <span className={style.hide_arrow}>
              <ArrowForwardIcon />
            </span>
            A student starting small in the city
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
