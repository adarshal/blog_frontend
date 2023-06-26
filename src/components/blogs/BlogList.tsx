import { Box } from "@mui/material";
import { BlogType } from "../../types/types"
import { blogListStyles } from "../../styles/blog-list-styles";
import BlogItem from "./BlogItem";

type Props={
    blogs:BlogType[],
}
const BlogList = (props:Props) => {
        
  return (
    <Box sx={blogListStyles.container}>
        {props.blogs.length> 0 && props.blogs.map((blog:BlogType)=> <BlogItem blog={blog} />) }
    </Box>
  )
}

export default BlogList;
