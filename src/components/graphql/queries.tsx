import { gql } from "@apollo/client";
export const GET_BLOGS = gql`
  {
    blogs {
      id
      title
      content
      date
      user {
        name
      }
    }
  }
`;

export const GET_USER_BLOGS = gql`
  query user($id: ID!) {
    blogs {
      title
      content
      date
      id
    }
  }
`;

export const GET_BLOG_BYID = gql`
    query blog($id:ID!){
        blog(id:$id){
            title
            content
            date
            user{
                name 
                email
            }
            comments{
                text
                id
                user{
                    name
                    id
                }
            }
        }
        }
    
`;
