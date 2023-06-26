
import { Styles } from "./homepage-style";
const colors=["red","#ccc","green","yellow"];

export function randomBgColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}
export const blogListStyles:Styles = {
    container:{
        display:"flex",
        justifyContent:"center",
        gap:10,
        flexWrap:"wrap",
        m:2,
    },
    card:{
       display:"flex" ,
       flexDirection:"column",
       height:"60vh",
       width:"500px",
       transition:"transform 1s",
       color:"green",
       ":hover":{
        color:"red",
        transform:"scale(1.02)",
        boxShadow:"10px 10px 20px #000"
       }
    },
    dateContainer:{
        display:"flex",
        alignItems:"center",
        gap:2,
    },
    cardHeader:{
        fontFamily:"Montserrat",
        fontSize:"72px",
        height:"auto",
        minHeight:"40px",
        padding:1,  
        cursor:"pointer"      
    },
    cartContent:{
        width:"80%",
        height:"100%",
        fontSize:"20px",
        fontWeight:"500"
    },
    title:{
        fontWeight:"600",
        m:1,
        fontfamily:"Monteserrat",
        textTransform:"uppercase",
        color:"white",
        fontSize:{lg:32, md:28,sm:22,xs:18},
        fontFamily:"Montserrat",
        textShadow:"2px 7px 20px #ccc",
        ":hover":{
            textUnderlineOffset:"5px",
            textDecoration:'underline'
        }
    },
    author:{
        display:"flex",
        alignItems:"center",
        gap:1,
        fontWeight:"bold",
        padding:2,
        color:"black",
    },
    contentText:{
        paddong:2,
        fontSize:"20px",
        fontWeight:"500"
    }
}