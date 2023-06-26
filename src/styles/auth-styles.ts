import { Styles } from "./homepage-style";

export const authstyles:Styles={
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"auto",
        },
        logoTitle:{
            display:"flex",
            gap:1,
            alignItems:"center",
            justifyContent:"center",
            mt:1,
            mb:1,
        },
        logoText:{
            fontFamily:"Monteserrat",
            fontSize:"30px",
            textAlign:"center"
        },
        formContainer:{
            display:"flex",
            flexDirection:"column",
            border:"1px solid #ccc",
            borderRadius:5,
            padding:5,
            boxShadow:"5px 5px 10px #000",
            justifyContent:"center",
            margin:"auto",
            mt:5,
            mb:5,
        },
        form:{
            display:"flex",
            flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:4,
        padding:4,
        },
        submitBtn:{
           fontFamily:"Monteserrat",
           mt:1,
           mb:1,
           width:"150px",
           borderRadius:10,
           bgcolor:"#93C572",  
           color:"black",        
           ":hover":{
            color:"azure",
            bgcolor:"orange",
            boxShadow:"10px 10px 20px #ccc",
           }
        },
        switchBtn:{
            background:"transparent",
            color:"#273238",
            ":hover":{
                textDecoration:"underline",
            }
        }
}