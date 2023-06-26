import {Box, Button, Typography} from "@mui/material"
import { homepageStyles } from "../../styles/homepage-style";

const Footer = () => {
  return(
    <Box sx={homepageStyles.footerContainer}>
        <Button variant="contained"  sx={homepageStyles.footerBtn} >View articles blog</Button>
        <Typography sx={homepageStyles.footerText}> Made with Love</Typography>
        <Button variant="contained"  sx={homepageStyles.footerBtn} >Publish</Button>
    
    </Box>
  )
  
}

export default Footer;
