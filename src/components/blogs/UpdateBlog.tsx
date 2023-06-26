import { Box, Button, LinearProgress, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { addBlogStyles, htmlElemStyles } from "../../styles/add-blog-styles";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_BLOG_BYID } from "../graphql/queries";
import { UPDATE_BLOG } from "../graphql/mutations";
import { toast } from "react-hot-toast";
// let count =0;
const UpdateBlog = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const id = useParams().id;
  const [updateBlog] =useMutation(UPDATE_BLOG);
  const { data, error, loading, refetch } = useQuery(GET_BLOG_BYID, {
    variables: {
      id,
    },
  });
  useEffect(() => {
    if (data && headingRef.current && contentRef.current) {
      headingRef.current.innerHTML = data.blog.title;
      contentRef.current.innerHTML = data.blog.content;
    }
  }, [id, data]);

  const handleSubmit = async () => {
    if (!headingRef || !contentRef) {
      return;
    }
    if (
      headingRef.current &&
      headingRef.current?.innerText.trim().length > 0 &&
      contentRef?.current &&
      contentRef.current?.innerText.trim().length > 0
    ) {
        const title= headingRef.current?.innerText;
        const content= contentRef.current?.innerText;
        try {
            const res=await updateBlog({
                variables: {
                  title,
                  content,
                  id
                },
              });
              toast.promise( refetch(), {
                error:"Unexpected error",
                success:"Blog Updated"    ,
                loading:"Updating Blog"
              })
              
        } catch (error:any) {
            console.log(error.message)
        } 
      
    }
  };
  if(loading){
    return 
        <LinearProgress color="warning"  />
  }
  return (
    data && (
      <Box sx={addBlogStyles.container}>
        <Box sx={addBlogStyles.blogHeader}>
          <Typography>Authored BY: Cya</Typography>
          <Button color="success" variant="contained">
            Publish
          </Button>
        </Box>
        <form>
          <Box sx={addBlogStyles.formContainer}>
            <h2
              ref={headingRef}
              style={htmlElemStyles.h2}
              placeholder="Title.."
              contentEditable
            >
              Title
            </h2>
            <p ref={contentRef} style={htmlElemStyles.p} contentEditable>
              {" "}
              Describe your story...
            </p>
          </Box>
        </form>
      </Box>
    )
  );
};

export default UpdateBlog;
