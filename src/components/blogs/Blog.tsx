import { useQuery } from "@apollo/client"
import { GET_BLOGS } from "../graphql/queries"
import BlogList from "./BlogList"


const Blog = () => {
  const {loading,data,error,} =useQuery(GET_BLOGS)
  if(loading){
    return <p>Loading ...</p>
  }
  if(error){
    console.log("Error", error);
    return <p>Error in fetching </p>
  }
  console.log("herer",data);
  
  return (
    <div>
      Blogs
      <BlogList blogs={data.blogs} />
    </div>
  )
}

export default Blog
