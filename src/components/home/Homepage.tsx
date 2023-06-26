import { Box, Typography } from "@mui/material";
import { homepageStyles } from "../../styles/homepage-style";


const Homepage = () => {
  return (
    <Box sx={homepageStyles.container}>
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}> write share blogs , reach millions of user worldwide </Typography>
        <img
          width="50%"
          height="50%"
          //@ts-ignore
          style={homepageStyles.image}
          src={"./assets/img/blog.jpg"}
          alt="blog"
        />
      </Box>
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}> write share blogs , reach millions of user worldwide </Typography>
        <img width="50%" height="50%" 
        //@ts-ignore
        style={homepageStyles.image}
        src="./assets/img/blog2.jpg" alt="blog" />
      </Box>
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}> write share blogs , reach millions of user worldwide</Typography>
        <img width="50%" height="50%" 
        //@ts-ignore
        style={homepageStyles.image}
        src="./assets/img/images.jpg" alt="blog" />
      </Box>
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}> write ggggggg blogs, , reach millions of user worldwide, , reach millions of user worldwide</Typography>{" "}
      </Box>
      
    </Box>
  );
};

export default Homepage;
