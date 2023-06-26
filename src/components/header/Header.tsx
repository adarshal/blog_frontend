import { AppBar, Box, Button, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { FaBlog } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { headerStyles } from "../../styles/header-styles";
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import UserMenu from "./user/UserMenu";
const Header = () => {
  const isLoggedIn=useSelector((state:any)=>state.isLoggedIn)
  const [activebar, setActivebar] = useState(0);
  const navigate=useNavigate();
  const handleAddBlog=()=>{
    navigate("/add")
  }
  return (
    <AppBar sx={headerStyles.appBar}>
      <Toolbar>
        <FaBlog
          style={{ borderRadius: "50", padding: "10px", background: "sky" }}
        />
        {isLoggedIn && ( <Box onClick={handleAddBlog} sx={headerStyles.addLink}>
          <Typography fontSize={20}>
            Add a new blog post!{" "}
          </Typography>
          <IconButton color="inherit">
            <FaBlog />
          </IconButton>
        </Box>) }
        <Box sx={headerStyles.tabContainer}>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            TabIndicatorProps={{style:{background:"yellow"}}}
            value={activebar}
            onChange={(e, val) => setActivebar(val)}
          >
            <Tab component={Link} to="/" label="Home" />
            <Tab component={Link} to="/blogs" label="blogs" />
          </Tabs>
          {/* //another method of using Link component ,not used  above beacise we wamt value to pass to tab */}
          {!isLoggedIn && <Link to="/auth">
          <Button sx={headerStyles.loginBtn}>
          Login<CiLogin />
          </Button>
          </Link>}
          {isLoggedIn && <UserMenu />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
