import React from "react";
import styles from "../styles/Signup.module.css";
import { Link } from "react-router-dom";
import {
  Box,
  Input,
  FormControl,
  
  Flex,
  Image,
} from "@chakra-ui/react";
const Signup = () => {
  return (
    <Flex className={styles.box1}>
      <Box className={styles.left_box}>
        <h1 className={styles.main_heading}>
          Create an <span style={{ color: "#0058a3" }}>IKEA Family</span>
          <br /> Profile
        </h1>
        <span
          style={{ color: "#48484" }}
          className={styles.span_Account_member}
        >
          Already have an account?<span style={{fontWeight:700}}><Link to="/login">{" "}Login</Link></span>
        </span>

        <Flex>
          <Image
            className={styles.image}
            src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg"
          />
          <Image
            className={styles.image2}
            src="https://www.ikea.com/in/en/profile/281cff11b1bbb9d08737f5d656d7f8d6.jpg"
          />
        </Flex>
        <Flex>
          <Image
            className={styles.image}
            src="https://www.ikea.com/in/en/profile/a620cf6567e1d802e42dad2d419da1a1.jpg"
          />
          <Image
            className={styles.image2}
            src="https://www.ikea.com/in/en/profile/558de95264a0f9501533593ab355259e.jpg"
          />
        </Flex>
        <Flex>
          <Image
            className={styles.image}
            src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg"
          />
          <Image
            className={styles.image2}
            src="https://www.ikea.com/in/en/profile/ddc28f908192eea06190ca5bf8657069.jpg"
          />
        </Flex>
        <Flex>
          <Image
            className={styles.image}
            src="https://www.ikea.com/in/en/profile/471c4b31a982119d5ad6018388835e64.jpg"
          />
          <Image
            className={styles.image2}
            src="https://www.ikea.com/in/en/profile/3e48e8734c5c5751bd6b21045258bfac.jpg"
          />
        </Flex>
        <Flex>
          <Image
            className={styles.image}
            src="https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg"
          />
          {/* <Image src="" /> */}
        </Flex>
      </Box>
      {/* /////Now from has to be fill */}
      <Box>
        <legend className={styles.legend}>
          Become a member of Fabolous Find today.Did we mention free to Join?
        </legend>
        <Flex>
          <input
            type="radio"
            id="huey"
            name="drone"
            value="huey"
            className={styles.label_radio}
          />

          <label for="huey">
            Yes! I want to enjoy discounts,preview and a lot more! Get the
            details.
          </label>
        </Flex>

        {/* /// box3 area */}

        <FormControl action="submit" className={styles.FormControl}>
          <br />
          <legend>
            {" "}
            <strong className={styles.strong_signUp}>Sign Up Area</strong>{" "}
          </legend>
          <br />
          <div>
            <Input type="text" placeholder="First Name" />
          </div>
          <br />
          <div>
            <Input type="text" placeholder="Last Name" />
          </div>
          <br />
          <div>
            <Input type="text" placeholder="Email" />
          </div>
          <br />
          <div>
            <Input type="text" placeholder="Password" />
          </div>
          <br />
          <div>
            <Input type="text" placeholder="Confirm Password" />
          </div>
          <br />
          <div>
            <button className={styles.btn_9}>Submit</button>
          </div>
          <br />
          <div>
            Already a Member?{" "}
            <Link path="/login" className={styles.login_value}>
              Login
            </Link>
          </div>{" "}
          <br />
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Signup;
