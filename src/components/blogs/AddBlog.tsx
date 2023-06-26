import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { addBlogStyles, htmlElemStyles } from "../../styles/add-blog-styles";
import { useMutation } from "@apollo/client";
import { ADD_BLOG } from "../graphql/mutations";
// let count =0;
const AddBlog = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [addBlog] = useMutation(ADD_BLOG);
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
        const date=new Date();
        const user=JSON.parse(localStorage.getItem("userData") as string).id;
        try {
            const res=await addBlog({
                variables: {
                  title,
                  content,
                  date,user
                },
              });
              const data=res.data;
              console.log(data);
              
        } catch (error:any) {
            console.log(error.message)
        }
      
    }
  };
  // console.log(count,"times renderd ");
  // count++;
  return (
    <Box sx={addBlogStyles.container}>
      <Box sx={addBlogStyles.blogHeader}>
        <Typography>Authored BY: Cya</Typography>
        <Button onClick={handleSubmit} color="success" variant="contained">
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
  );
};

export default AddBlog;
