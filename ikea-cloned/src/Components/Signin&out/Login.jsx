import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthContext";

const initialValue = {
  emailEntered: "",
  passwordEntered: "",
};

const Login = () => {

  const {loginUser}=useContext(AuthContext)

  let Navigate = useNavigate();
  // const{login,setLogin} = useContext(SidebarContext);
  const [inputUser, setInputUser] = useState(initialValue);
  const [user, setUser] = useState([]);
  const getAdd = async () => {
    let res = await fetch(`https://server-jrrq.onrender.com/users`);
    let data = await res.json();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getAdd();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value, e.target.name);

    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    console.log(inputUser)
    let x = user.filter((el) => {
      if (
        inputUser.emailEntered === el.email &&
        inputUser.passwordEntered === el.password
      ) {
        loginUser(el.first_name,el.email)
        // setLogin(true);
        

        return true;
      }

    });
    console.log(x)
    if(x.length===0){
      alert("Invalid username or password");
    }
    else{
      
      alert("Login succesfull");
      Navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className={styles.mainscreen}>
        <div className={styles.toppart}>
          <div className={styles.herotext}>
            <h1>
              <img
                className={styles.logo}
                src="https://user-images.githubusercontent.com/106021674/212925458-e9515ee6-5aaa-4c72-8145-545ca8912606.jpg"
                alt="Logo"
              />
              Login Page
            </h1>
            <p>
              Faboulous Find is a clone of IKEA which is Swedish multinational
              conglomerate based in the Netherlands that designs and sells
              ready-to-assemble furniture, kitchen appliances, decoration, home
              accessories, and various other goods and home services. Started in
              1943 by Ingvar Kamprad, IKEA has been the world's largest
              furniture retailer since 2008
            </p>
          </div>
        </div>

        <div className={styles.bottompart}>
          <div className={styles.imgpart}>
            <img
              src="https://user-images.githubusercontent.com/106021674/212918713-93369401-cf6f-4b17-8789-9ee966e2f2bd.jpg"
              alt="file_name"
              className="heroimg"
            />
          </div>

          <div className={styles.formpart}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
              name="emailEntered"
                type="email"
                value={inputUser.emailEntered}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
              name="passwordEntered"
                type="password"
                value={inputUser.passwordEntered}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"yellow.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={handleLogin}>
                Log In
              </Button>
              <Link to="/signup">New User? Signup</Link>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
// custom-btn btn-12
export default Login;
