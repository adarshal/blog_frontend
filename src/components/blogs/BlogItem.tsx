import { Box, Card, CardActions, IconButton, Typography } from "@mui/material";
import { BlogType } from "../../types/types";
import { blogListStyles, randomBgColor } from "../../styles/blog-list-styles";
import {FcCalendar} from "react-icons/fc"
import {FaGraduationCap} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai"
import { useMutation } from "@apollo/client";
import { DELETE_BLOG } from "../graphql/mutations";
type Props = {
  blog: BlogType;
  showActions?: boolean;
};

const BlogItem = (props: Props) => {
  const navigate=useNavigate();
  const [deleteBlog] =useMutation(DELETE_BLOG)
  const handleClick=()=>{    
      navigate(`/blog/view/${props.blog.id}`)
  }
  const edithandler=()=>{
      return navigate(`blog/update/props.blog.id`)
  }
  const deletehandler=async ()=>{
      try {
       await deleteBlog({
        variables:{
          id:props.blog.id,
        }
       })
       navigate("/profile")
      } catch (error:any) {
        return console.log(error.message)
      }
  }

  return (
    <Card  sx={blogListStyles.card}>
      {props.showActions && <CardActions>
        <IconButton onClick={edithandler}><AiOutlineEdit /> </IconButton>
        <IconButton><AiOutlineSave /> </IconButton>
        <IconButton onClick={deletehandler}><AiOutlineDelete /> </IconButton>
        
      </CardActions>}
      <Box onClick={handleClick} sx={{...blogListStyles.cardHeader, bgcolor:randomBgColor()}}>
        <Box sx={blogListStyles.dateContainer}>
            <FcCalendar size={"30px"}/>
          <Typography fontFamily={"Monteserrat"} fontSize={{lg:"20px", md:"18px", sm:"16px",xs:"12px"} }variant="caption" color={"azure"}> 
            {new Date(Number(props.blog.date)).toDateString()}
            </Typography>
        </Box>
        <Typography variant="h4" sx={blogListStyles.title}>
          {props.blog.title}
        </Typography>      
        <Typography sx={blogListStyles.author}>{props.blog.user.name}</Typography> 
      </Box>
      <Box sx={blogListStyles.cardContent}>
          <Typography sx={blogListStyles.contentText}>
            {props.blog.content}
            <FaGraduationCap color="black" />
          </Typography>
        </Box>
    </Card>
  );
};

export default BlogItem;
