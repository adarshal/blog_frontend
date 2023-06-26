import { Styles } from "./homepage-style";

export const viewBlogStyles:Styles = {
    container: {
      display:"flex",
      flexDirection:'column',
        padding: 2,
       height:"100%",   
       bgcolor:"azure"    
      },
      profileHeader:{
        display:"flex",
      flexDirection:'column',
        padding: 1,
      },
      headerText:{
        fontFamily:"Monteserrat",  
        fontSize:"18px"      ,
        padding:1,
        gap:1
      },
      profileHeaderItems:{
        display:"flex",
        alignItems:"center",
        padding:1,
        gap:2,
      },
      blogTitle: {
        fontSize:"30px",
        textAlign:"center",
        textShadow:"2px 2px 12px #ccc",
        fontWeight: 'bold',
        marginBottom: 8,
      },
      author: {
        color: 'gray',
        marginBottom: 8,
      },
      blogContent: {
        marginTop: 8,
        padding:5,
        fontSize:"20px",
        textAlign:"justify",
        fontFamily:"Monteserrat",
      },
      commentBox:{
        padding:2,
        display:"flex"        ,
        alignContent:"center",
        gap:2
      },
      commentInputContainer:{
        padding:2,
        width:"30%",
        height:"40%"
      },
      inputLayout:{
        padding:2,
        display:"flex"        ,
        alignItems:"center",
      },
      textField:{
        width:"100%",
      },
      comments:{
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"space-between",
      },
      commentItem:{
        padding:1,
        display:"flex",
        gap:1,
        borderBottom:"1px solid black",
        height:"auto",
        margin:1,
        alignItems:"center"
      },
      commentText:{
        margin:2,
        marginLeft:6,
        marginRight:6,
        maxWidth:"97.5vw",
        fontSize:"16px",
        fontWeight:600
      }
}