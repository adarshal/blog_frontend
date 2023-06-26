// @ts-nocheck
import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { profileStyles } from "../../../styles/profile-styles";
import BlogItem from "../../blogs/BlogItem";
import { useQuery } from "@apollo/client";
import { GET_USER_BLOGS } from "../../graphql/queries";


const Profile = () => {
  const{loading,data,error} =useQuery(GET_USER_BLOGS,{
    variables:{
      id:JSON.parse(localStorage.getItem("userData") as string).id,
    }
  });

  if(error){
    return <p>Error in fetching data</p>
  }
  return loading? (
    <LinearProgress />
  ) :data&&(
    <Box sx={profileStyles.container}>
      <Box sx={profileStyles.blogsContainer}>
        <Typography variant="h3" sx={profileStyles.text}>
          Mypost
        </Typography>
        <Box sx={profileStyles.cardsContainer}>
          {data.user.blogs.map((item) => (
            <BlogItem
            showActions={true}
              blog={{
                title: item.title,
                id: item.id,
                content: item.content,
                date: item.date,
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={profileStyles.profileContainer}>
        <Box sx={profileStyles.userContainer}>
          <Avatar sx={profileStyles.avatar}></Avatar>
          <Typography variant="h4">User Name</Typography>
          <Typography variant="h5">User EMAIL</Typography>
          <Typography variant="h4" fontFamily={"monospace"}>
            you wrote {10}blogsL
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
