import { Styles } from "./homepage-style";

export const headerStyles:Styles = {
    appBar:{
        position:"sticky",
        bgcolor:"#00235B"
    },
    tabContainer:{
       width:"100%" ,
       marginLeft:"auto",
       display:"flex",
       justifyContent:"flex-end",
       alignItems:"right"
    },
    loginBtn:{
        ml:2,
        bgcolor: "#210062",
        color:"azure",
        borderRadius:20,
        width:90,
        ":hover":{
            bgcolor:"#77037B"
        }
    },
    addLink:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:1,
        position:"absolute",
        right:"40%",
        width:"300px",
        padding:"5px",
        ":hover":{
            bgcolor:"rgba(0,0,0,0.5)",
            borderRadius:10,
            cursor:"pointer"
        }
    }
}