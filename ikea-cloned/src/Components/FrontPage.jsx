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
        <div className={style.frontNavbarHeading}>IKEA</div>
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
          <div className={style.Compoent_map_2_vido}>
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
          </div>

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
            <span className={style.hide_arrow_mafia}>
              <ArrowForwardIcon />
            </span>
            Swedish House Mafia collab
          </h1>
        </div>

        <div className={style.Compoent_mafia_2}>
          <p>Inspiring homes</p>
          <h1>
            {" "}
            <span className={style.hide_arrow_mafia_2}>
              <ArrowForwardIcon />
            </span>
            A student starting small in the city
          </h1>
        </div>
      </div>

      <div className={style.third_green}>
        <div className={style.third_green_1} data-aos="fade-right">
          <ArrowForwardIcon color="white" fontSize="30px" />
          <p>IKEA Museum</p>
          <h1>This duo behind five decades of IKEA design</h1>
        </div>
        <div className={style.third_green_2}>
          <img
            src="https://www.ikea.com/global/en/images/hagberg_PH_143183_0bee7f9e25_f0c9d09b1f.jpg?f=xxxl"
            alt="green"
          />
        </div>
      </div>

      <div className={style.third_pink}>
        <div className={style.third_pink_1}>
          <img
            src="https://www.ikea.com/global/en/images/poster_festival_8739974424_216be0e966.jpg?f=g"
            alt="akash1"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.third_pink_1_h1}>Ideas for loving home</h1>
            <p className={style.third_pink_1_p}>
              <span data-aos="fade-right" className={style.third_pink_1_hide}>
                <ArrowForwardIcon />
              </span>
              Explore IKEA Festival
            </p>
          </div>
        </div>

        <div className={style.third_pink_2}>
          <img
            src="https://www.ikea.com/global/en/images/Us_and_Our_Planet_01_4_5_84135b89bb_f699818410.jpg?f=g"
            alt="akash"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.third_pink_2_h1}>A book to inspire change</h1>
            <p className={style.third_pink_2_p}>
              <span data-aos="fade-right" className={style.third_pink_2_hide}>
                <ArrowForwardIcon />
              </span>
              Us & Our Planet
            </p>
          </div>
        </div>
      </div>

      <div className={style.third_pink_div}>
        <div className={style.third_pink_1_div}>
          <img
            src="https://www.ikea.com/global/en/images/IKEA_MF_Eye_b355100fd0_c44aa36051.jpg?f=g"
            alt="akash1"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.third_pink_1_h1_div}>
              IKEA fastival at design week
            </h1>
            <p className={style.third_pink_1_p_div}>
              <span
                data-aos="fade-right"
                className={style.third_pink_1_hide_div}
              >
                <ArrowForwardIcon />
              </span>
              Highlights from Milano
            </p>
          </div>
        </div>

        <div className={style.third_pink_2_div}>
          <img
            src="https://www.ikea.com/global/en/images/IKEA_Foundation_3_58eac66272_6f1c817c8c.jpg?f=g"
            alt="akash"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.third_pink_2_h1_div}>
              The IKEA Foundation youth
            </h1>
            <p className={style.third_pink_2_p_div}>
              <span
                data-aos="fade-right"
                className={style.third_pink_2_hide_div}
              >
                <ArrowForwardIcon />
              </span>
              Change our story
            </p>
          </div>
        </div>
      </div>

      <div className={style.third_pink_div1}>
        <div className={style.third_pink_1_div1}>
          <img
            src="https://www.ikea.com/global/en/images/KASEBERGA_PH_185243_096302767d_310933bc70.jpg?f=g"
            alt="akash1"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.third_pink_1_h1_div1}>
              KASEBERGA collection IKE
            </h1>
            <p className={style.third_pink_1_p_div1}>
              <span
                data-aos="fade-right"
                className={style.third_pink_1_hide_div1}
              >
                <ArrowForwardIcon />
              </span>
              Surf style comes home
            </p>
          </div>
        </div>

        <div className={style.third_pink_2_div1}>
          <img
            src="https://www.ikea.com/global/en/images/PE_808354p_9adda171da_740f034814.jpg?f=g"
            alt="akash"
            data-aos="fade-up"
          />
          <div>
            <h1 className={style.third_pink_2_h1_div1}>
              Swedish tradition IKEA
            </h1>
            <p className={style.third_pink_2_p_div1}>
              <span
                data-aos="fade-right"
                className={style.third_pink_2_hide_div1}
              >
                <ArrowForwardIcon />
              </span>
              Cinnamon bun
            </p>
          </div>
        </div>
      </div>

      <div className={style.ikeaLogo}>
        <div className={style.ikeaLogo_h1}>
          <h1>A world of inspiration for your home</h1>
        </div>
        <div className={style.ikeaLogo_img}>
          {" "}
          <img
            src="https://www.ikea.com/global/en/images/ikea-logo.svg"
            alt="logo"
          />
        </div>
      </div>

      <div className={style.beutifulimage}>
        <img
          src="https://www.ikea.com/global/en/images/footer-illustration.svg"
          alt="beuty"
        />
      </div>

      <div className={style.footerpart}>
        <div>
          <h2>
            International sales <span style={{ color: "grey" }}>|</span>
          </h2>
        </div>
        <div>
          <h2>
            About IKEA <span style={{ color: "grey" }}>|</span>
          </h2>
        </div>
        <div>
          <h2>
            IKEA Museum <span style={{ color: "grey" }}>|</span>
          </h2>
        </div>
        <div>
          <h2>
            Work with us <span style={{ color: "grey" }}>|</span>
          </h2>
        </div>
        <div>
          <h2>Ethics & INtegrity </h2>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
