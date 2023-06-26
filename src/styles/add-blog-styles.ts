import { CSSProperties } from "@mui/material/styles/createMixins";
import { Styles } from "./homepage-style";

export const addBlogStyles:Styles = {
    container:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"100%",
  },
  blogHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center',
    padding:3,
    fontWeight:"bold",

  },
  formContainer:{
    display:"flex",
    flexDirection:"column",
  },
  titleContainer:{
    marginTop:'10px',
    marginBottom:'25px'
  },
  blogTitle:{
      fontSize:'3rem',
      fontWeight:'bold',
      color:'#4A96E9',
      textDecorationLine:'underline'
  },
  subtitle:{
    margin:'auto auto',
    width:'70%',
    
    },
  button:{
    backgroundColor:'white',
    border:'none',
    }
}

export const htmlElemStyles:{[key:string]:CSSProperties} = {
    h2:{
        fontsize:"40px",
        fontFamily:"Monteserrat",
        marginLeft:"50px",
        marginRight:"50px",
        marginTop:"40px",
        outline:"none",
    },
    p:{
        border:"none",
        fontFamily:"Monteserrat",
        marginLeft:"50px",
        marginRight:"50px",
        marginTop:"30px",
        outline:"none",
        minHeight:"300px",
        fontsize:"18px",
    }
}