import React, { useState } from "react";
import styles from "../../styles/Signup.module.css";
import { Box, Flex, Image, Input, Divider } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const initialState = {
  first_name: "",
  sur_name: "",
  mobile_number: "",
  gender: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [initialValue, setInitialValue] = useState(initialState);
  const [login_value, setLogin_value] = useState([]);

  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInitialValue({ ...initialValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin_value([...login_value, initialValue]);
    // navigate("/login");
  };

  if (login_value.length !== 0) {
    Navigate("/login");
  }

  // console.log(initialValue);
  localStorage.setItem("login_data", JSON.stringify(login_value));
  return (
    <Box className={styles.main_box}>
      <Navbar />
      <Flex className={styles.main_Flex}>
        <Box className={styles.main_box1}>
          <h1 className={styles.create_family}>
            Create an <span className={styles.span}>IKEA Family</span> Profile
          </h1>
          <p className={styles.p_components}>Already have an account</p>
          <br />
          <br />
          {/* //one */}
          <Flex>
            <Image
              className={styles.imgae1_left_Side}
              src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg"
              alt="img1"
            />
            <Image
              className={styles.imgae1_Right_Side}
              src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg"
              alt="img2"
            />
          </Flex>
          {/* //one */}
          <Flex>
            <Image
              className={styles.imgae1_left_Side}
              src="https://www.ikea.com/in/en/profile/281cff11b1bbb9d08737f5d656d7f8d6.jpg"
              alt="img1"
            />
            <Image
              className={styles.imgae1_Right_Side}
              src="https://www.ikea.com/in/en/profile/ddc28f908192eea06190ca5bf8657069.jpg"
              alt="img1"
            />
          </Flex>
          {/* //one */}
          <Flex>
            <Image
              className={styles.imgae1_left_Side}
              src="https://www.ikea.com/in/en/profile/a620cf6567e1d802e42dad2d419da1a1.jpg"
              alt="img1"
            />
            <Image
              className={styles.imgae1_Right_Side}
              src="https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg"
              alt="img1"
            />
          </Flex>
          {/* //one */}
          <Flex>
            <Image
              className={styles.imgae1_left_Side}
              src="https://www.ikea.com/in/en/profile/558de95264a0f9501533593ab355259e.jpg"
              alt="img1"
            />
            <Image
              className={styles.imgae1_Right_Side}
              src="	https://www.ikea.com/in/en/profile/3e48e8734c5c5751bd6b21045258bfac.jpg"
              alt="img1"
            />
          </Flex>
          {/* //one */}
          <Flex>
            <Image
              className={styles.imgae1_left_Side}
              src="	https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg"
              alt="img1"
            />
            <Image
              className={styles.imgae1_Right_Side}
              src="https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg"
              alt="img1"
            />
          </Flex>
          {/* //one */}

          {/* //one */}
        </Box>
        <Box className={styles.main_box2}>
          <legend className={styles.legend}>
            Become a member of IKEA Family today. Did we mention it's free to
            join?
          </legend>
          <input styles={{ color: "#111" }} type="radio" />
          <span className={styles.radio_span}>
            Yes, I want to enjoy discounts ,previews and a lot more!
          </span>
          {/* //Input area start by name cby class all other things */}
          <Box>
            <Input
              className={styles.input_part_section}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              name="first_name"
            />
            <br />
            <br />
            <Divider />
            <Input
              className={styles.input_part_section}
              onChange={handleChange}
              name="sur_name"
              type="text"
              placeholder="Surname"
            />
            <br />
            <br />
            <Divider />
            <Input
              className={styles.input_part_section}
              onChange={handleChange}
              name="mobile_number"
              type="tel"
              placeholder="IN (+91)"
            />
            <br />
            <br />
            <Divider />
            <Input
              className={styles.input_part_section}
              onChange={handleChange}
              name="gender"
              type="gender"
              placeholder="Gender"
            />
            <br />
            <br />
            <Divider />
            <Input
              className={styles.input_part_section}
              onChange={handleChange}
              type="email"
              placeholder="Email(username)"
              name="email"
            />
            <br />
            <br />
            <Divider />
            <Input
              className={styles.input_part_section}
              onChange={handleChange}
              type="password"
              placeholder="Passowrd"
              name="password"
            />
            <br />
            <br />
            <Divider />
            <button onClick={handleSubmit} className={styles.btn_14}>
              Submit
            </button>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Signup;
