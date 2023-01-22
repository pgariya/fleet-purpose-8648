import React from "react";

import style from "./CinumBun.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

const CinumBun = () => {
  return (
    <>
      <div className={style.bunContainer}>
        <div className={style.bunfrontNavbar}>
          <div className={style.bunfrontNavbarHeading}>IKEA</div>
          <div className={style.bunfrontNavbarLogo}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>

      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://www.ikea.com/global/en/images/PE_808355p_25d7434de9_ee050529f9.jpg?f=g)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={800}
              lineHeight={1.2}
              // border="2px solid black"
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Celebrating the cinnamon bun
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <div className={style.writedata}>
        <h1>
          Cinnamon bun, kanelbulle, cinnamon roll - whatever you like to call
          it, it’s so good that it's inspired a whole day to celebrate it! In
          Sweden, we pay homage to the famously delicious pastry on 4 October.
        </h1>
        <p>
          The cinnamon bun is Sweden’s national treasure. Dating back as far as
          the early 19th century, it has become a staple of another Swedish
          institution, the fika. Originally known as a “kafferep” (coffee
          party), it's a tradition that became popular in Sweden in the 1930s,
          when housewives would get together to chat over coffee and cookies.
          The earlier prohibitions of coffee inspired a secret pseudonym for the
          cherished coffee party: fika.
        </p>

        <h2>
          {" "}
          Today, to fika is to get together, whenever and wherever, to enjoy a
          chat over a drink and a sweet snack. It can be anything from a
          business meeting to an informal date as long as it includes company
          and a sweet treat. Fika and the cinnamon bun or “kanelbulle” as it’s
          known in Sweden, are the perfect union, a match made in heaven. The
          buttery sweetness and scent of cinnamon complement the rich, earthy
          flavour of freshly brewed coffee like no other. But of course, what
          would either be without a friend or two?
        </h2>
      </div>

      <Flex
        w={"full"}
        h={"50vh"}
        backgroundImage={
          "url(https://www.ikea.com/global/en/images/KAFFEREP_20220831_IKEA_BBQ_0464_1x1_27e306fce4_a7c17d2c1a.jpg?f=g)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.1}
              // border="2px solid black"
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Recipe: Grilled cinnamon buns with cream and berries
            </Text>

            <Text
              color={"white"}
              fontWeight={400}
              lineHeight={1.1}
              paddingLeft="38px"
              //   border={"1px solid red"}
              // border="2px solid black"
              fontSize={"18px"}
            >
              Serverse : 4
            </Text>

            <Text
              color={"white"}
              fontWeight={400}
              lineHeight={1.1}
              paddingLeft="38px"
              //   border={"1px solid red"}
              // border="2px solid black"
              fontSize={"18px"}
            >
              Time : 10 Minutes
            </Text>
          </Stack>
        </VStack>
      </Flex>

      <div className={style.recipe_data}>
        <div className={style.recipe_ingrediants}>
          <h1>Ingredients</h1>
          <p>4 KAFFEREP cinnamon buns, baked and preferably a day or two old</p>
          <p>Whipped cream (or ice cream)</p>
          <p>Berries of your choice</p>
          <p>Chopped almonds</p>
          <p>Maple syrup</p>
          <p>Powdered sugar</p>
        </div>
        <div className={style.recipe_steps}>
          <h1>Step by step</h1>
          <p>
            Grill the baked cinnamon buns in the oven until they're golden
            brown.
          </p>
          <p>
            Cut each bun in half and fill it with whipped cream or ice cream,
            berries and chopped almonds.
          </p>
          <p>
            Top with a little maple syrup and a sprinkling of powdered sugar.
          </p>
        </div>
      </div>


      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={"#936e55"}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <br />{' '}
            <Text color={'white'} as={'span'}>
            "A cinnamon bun can warm the coldest heart."
            </Text>{' '}
          </Heading>
        
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          fit="contain"
          src={
            'https://www.ikea.com/global/en/images/PE_808354p_9adda171da_740f034814.jpg?f=l'
          }
        />
      </Flex>
    </Stack>


    <div className={style.ikeaLogo1}>
    <div className={style.ikeaLogo_h11}>
      <h1>A world of inspiration for your home</h1>
    </div>
    <div className={style.ikeaLogo_img1}>
      {" "}
      <img
        src="https://www.ikea.com/global/en/images/ikea-logo.svg"
        alt="logo"
      />
    </div>
  </div>

  <div className={style.beutifulimage1}>
    <img
      src="https://www.ikea.com/global/en/images/footer-illustration.svg"
      alt="beuty"
    />
  </div>

  <div className={style.footerpart1}>
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


    </>
  );
};

export default CinumBun;
