import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { FaUserNinja, } from "react-icons/fa"
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const UserMenu = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const[anchorElm,setAnchorElm]=useState<Element | null>(null);
    const handleLogout=()=>{
        dispatch(authActions.logout());
        setAnchorElm(null)
        navigate("/")
    }
    const handleGotoProfile=()=>{
        setAnchorElm(null)
        navigate("/profile")
    }
  return (
    <Box>
        <IconButton  onClick={(e)=>setAnchorElm(e.currentTarget)} color="primary">
            <FaUserNinja />
        </IconButton>
        {/* we need to anchor elm to taget(here iconbtn) and only when if anchorelm is set */}
        <Menu 
        onClose={()=>setAnchorElm(null)}
        anchorEl={anchorElm} open={Boolean(anchorElm)}>
            <MenuItem onClick={handleGotoProfile}>
                <Typography>Profile</Typography>
            </MenuItem>  
            <MenuItem onClick={handleLogout}><Typography>LogOut</Typography></MenuItem>           

        </Menu>
    </Box>
  )
}

export default UserMenu
