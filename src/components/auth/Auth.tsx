import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { authstyles } from "../../styles/auth-styles";
import { FaBlog } from "react-icons/fa";
import { CSSProperties } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { USER_LOGIN, USER_SIGNUP } from "../graphql/mutations";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import {useNavigate,} from "react-router-dom"
type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Auth = () => {
  const navigate=useNavigate();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  console.log(isLoggedIn);

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isBelowmd = useMediaQuery(theme.breakpoints.down("md"));
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onResReceived=(data:any)=>{
    if(data.signup){
      const {id,email,name}=data.signup;
      localStorage.setItem("userData",JSON.stringify({id,email,name}))
      // localStorage.setItem('userId', id);
      // localStorage.setItem('userEmail', email);
      // localStorage.setItem('userName', name);
    }else{
      const {id,email,name}=data.login;
      localStorage.setItem("userData",JSON.stringify({id,email,name}))
    }
    dispatch(authActions.login())
    return navigate("/blog")
  }
  const onSubmit = async ({ name, email, password }: Inputs) => {
    if (isSignup) {
      //signup req
      try {
       const res= await signup({
          variables: { name, email, password },
        })
        if(res.data){
          onResReceived(res.data)
        }
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      //login
      try {
       const res= await login({
          variables: {
            email: email,
            password: password,
          },
        })
        if(res.data){
          onResReceived(res.data)
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
    // console.log(data)
  };

  const [login] = useMutation(USER_LOGIN);
  const [signup] = useMutation(USER_SIGNUP);

  return (
    <Box sx={authstyles.container}>
      <Box sx={authstyles.logoTitle}>
        <FaBlog
          style={{ borderRadius: "50", padding: "10px", background: "sky" }}
        />
        <Typography sx={authstyles.logoText}>BlogsCyan</Typography>
      </Box>
      <Box
        sx={{
          ...authstyles.formContainer,
          width: isBelowmd ? "100px" : "300px",
        }}
      >
        <Typography sx={authstyles.logoText}>
          {isSignup ? "SignUp" : "Login"}
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          // handleSubmit comes from reacthook-form
          style={authstyles.form as CSSProperties}
        >
          {isSignup && (
            <>
              <InputLabel aria-label="name"> Name </InputLabel>
              <TextField
                margin="normal"
                InputProps={{ style: { borderRadius: 20 } }}
                aria-label="name"
                label="Name"
                {...register("name", { required: true })}
              />
            </>
          )}
          <InputLabel aria-label="email"> Email </InputLabel>
          <TextField
            error={Boolean(errors.email)}
            // checks err from formState: { errors }
            margin="normal"
            InputProps={{ style: { borderRadius: 20 } }}
            label="Email"
            type="email"
            {...register("email", {
              required: true,
              validate: (val: string) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  val
                ),
            })}
          />

          <InputLabel aria-label="password"> Passsword </InputLabel>
          <TextField
            helperText={
              Boolean(errors.password) ? "Minimum length should be 2" : ""
            }
            error={Boolean(errors.password)}
            margin="normal"
            label="Password"
            type="password"
            {...register("password", { required: true, minLength: 2 })}
          />
          <Button sx={authstyles.submitBtn} variant="contained" type="submit">
            Submit
          </Button>
          {/* @ts-ignore */}
          <Button
            onClick={() => setIsSignup(!isSignup)}
            //  @ts-ignore
            sx={{ ...authstyles.submitBtn, ...authstyles.switchBtn }}
            variant="contained"
          >
            Switch to {isSignup ? "Login" : "Signup"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Auth;
