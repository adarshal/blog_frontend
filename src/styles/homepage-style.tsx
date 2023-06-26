import {SxProps} from '@mui/material'

export type Styles={
    [key:string]:SxProps;
};

export const homepageStyles: Styles={
    container:{
        display:"flex",
        flexDirection: "column",        
        gap:10,        

    },
    wrapper:{
        display:'flex',
        justifyContent:'center',
        gap:4,
        alignItems:'center',
        padding:6,
    },
    text:{
        fontSize:{lg:50, md:40,sm:35 ,xs:20},
        fontFamily:"Montserrat",
        fontWeight:500,
        textShadow:"12px 10px 10px #ccc"
    },
    image:{
        boxShadow:"10px 10px 25px #000",
        borderRadius:20,
    },
    footerContainer:{
        display:"flex",
        alignItems:"center",
        height:"20vh",
        justifyContent: "center",
        gap:20,
        bgcolor:"grey",
    },
    footerBtn:{
        borderRadius:10,
        bgcolor:"sky",
        width:200,
        ":hover":{
            bgcolor:"grey"
        }
    },
    footerText:{
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "skyblue"
    }
}