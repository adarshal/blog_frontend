import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { viewBlogStyles } from "../../styles/blog-view-style";
import { FaCommentAlt } from "react-icons/fa";
import { BsCalendar3, BsSendFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BLOG_BYID } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ADD_COMMENT, DELETE_COMMENT } from "../graphql/mutations";
import {toast} from "react-hot-toast"
// type Props = {
//     blog: BlogType;
//   };func
function getInitials(name: string) {
  const nameParts = name.split(" ");
  let initials = "";

  for (let i = 0; i < nameParts.length; i++) {
    const part = nameParts[i];

    if (part.length > 0) {
      initials += part[0].toUpperCase();
    }
  }

  return initials;
}
const ViewBlog = () => {
  const user = JSON.parse(localStorage.getItem("userData") as string)?.id;    
  const id = useParams().id;
  const { data, error, loading ,refetch} = useQuery(GET_BLOG_BYID, {
    variables: {
      id,
    },
  });

  const [isAddingComment, setIsAddingComment] = useState(false);
  const { register, handleSubmit ,reset} = useForm();
  const [addComment, addCommentRes] = useMutation(ADD_COMMENT);
  const [deleteComment]=useMutation(DELETE_COMMENT)
  const commentHandler = async(data: any) => {
    const date=new Date();
    const text=data.comment;
    try {
      setIsAddingComment(true);
      const res=await addComment({variables:{
        text,
        user:user,
        date,
        blog:id
      }});
      console.log(res);      
      toast.promise( refetch(), {
      error:"Unexpected error",
      success:"Comment Added"    ,
      loading:"Adding Comment"
    })
    // Reset the form after successfully adding the comment
    reset();

    } catch (error:any) {
      return console.log(error.message)
    }finally {
      setIsAddingComment(false);
    }
  };

  const handelDelete=async(id:string)=>{
    try {
    const res=  await deleteComment({variables:{
      id,
    }})
    toast.promise( refetch(), {
      error:"Unexpected error",
      success:"Comment Deleted"    ,
      loading:"Deleting Comment"
    })
    } catch (error:any) {
      console.log(error.message);      
    }
  }
  if (loading) {
    return <LinearProgress />;
  }
  if (error) {
    return (
      <Dialog open={true}>
        <DialogContent>Error occured while fetching data!</DialogContent>
      </Dialog>
    );
  }
  return (
    data && (
      <Box sx={viewBlogStyles.container}>
        <Box sx={viewBlogStyles.profileHeader}>
          <Typography sx={viewBlogStyles.headerText}>
            {" "}
            {data.blog.user?.name}
          </Typography>
          <Box sx={viewBlogStyles.profileHeaderItems}>
            {/* */}
            <Typography sx={viewBlogStyles.headerText}>
              <FiMail /> {data.blog.user?.email}
            </Typography>
            <Box
              sx={{ ml: "auto", display: "flex", gap: 3, alignItems: "center" }}
            >
              <BsCalendar3 />
              <Typography fontFamily={"monospace"}>
                {" "}
                {new Date(Number(data.blog.date)).toDateString()}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography sx={viewBlogStyles.blogTitle}>{data.blog.title}</Typography>
        <Typography sx={viewBlogStyles.blogContent}>
          {data.blog.content}
        </Typography>
        <Box sx={viewBlogStyles.commentBox}>
          Comments:{" "}
          <IconButton>
            <FaCommentAlt size={"30px"} />{" "}
          </IconButton>
        </Box>
        <Box sx={viewBlogStyles.commentInputContainer}>
          <Typography fontFamily={"monospace"}>Add your comment</Typography>
          <Box sx={viewBlogStyles.inputLayout}>
            <TextField
              {...register("comment")}
              sx={viewBlogStyles.textField}
              InputProps={{
                style: {
                  width: "50vw",
                  borderRadius: "10px",
                },
                endAdornment: (
                  <IconButton
                  onClick={() => handleSubmit(commentHandler)()}
                    color="primary" 
                    disabled={isAddingComment}
                  >
                    <BsSendFill color="grey" />{" "}
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Box>
        {data.blog.comments.length > 0 && (
          <Box sx={viewBlogStyles.comments}>
            {data.blog.comments.map((item: any) => (
              <Box key={item.id} sx={viewBlogStyles.commentItem}>
                <Avatar
                  sx={{ padding: 1, color: "red", bgcolor: "transparent" }}
                >
                  {getInitials(item.user.name)}
                </Avatar>
                <Typography sx={viewBlogStyles.commentText}>
                  {item.text}
                </Typography>
                {user===item.user.id && <IconButton onClick={()=>handelDelete(item.id)}><MdDelete /> </IconButton>}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    )
  );
};

export default ViewBlog;
