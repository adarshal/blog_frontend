import { gql } from "@apollo/client";

// Use ! after type if it is reqired like $email:String!
export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export const USER_SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export const ADD_BLOG = gql`
mutation  addBlog($title:String!, $content:String!, $date:String!, $user:ID!){
    addBlog(title:$title, content:$content ,date:$date ,user:$user ){
        title 
    }    
}
`;

export const ADD_COMMENT = gql`
mutation  addComment($text:String!,$blog:ID!, $date:String!, $user:ID!){
  addComment(text:$text,blog:$blog, date:$date, user:$user ){
        text 
    }    
}
`;

export const DELETE_COMMENT = gql`
mutation  deleteComment( $id:ID!){
  deleteComment(id:$id ){
        text 
    }    
}
`;

export const UPDATE_BLOG = gql`
mutation  updateBlog($id:ID!,$title:String!, $content:String!){
  updateBlog(id:$ID, title:$title ,content:$content ){
        id 
    }    
}
`;

export const DELETE_BLOG = gql`
mutation  deleteBlog( $id:ID!){
  deleteBlog(id:$id ){
        id 
    }    
}
`;