import React from "react";

const ErrorPage = ({error}) =>{
    console.log(error);
    return (
        <div style={{ textAlign:"center", display:"flex" , alignItems:"center" , justifyContent:"center", flexDirection:"column" , height:"81vh"}}>
            <h1 style={{marginBottom:"20px"}}>Oops!</h1>
            <p>Sorry , an unexpected error has occurred.</p>
            <p style={{ marginBottom:"30px"}}>
                <i>{error.status && `${error.status} you must use VPN.`}</i>
            </p>
            <button style={{ border:"none" , backgroundColor:"white" , color : "blue" , cursor:"pointer" , fontSize:"16px" , textDecorationLine:"underline"}} onClick={() => location.reload()} > Try Again</button>
        </div>
    )
}

export default ErrorPage;