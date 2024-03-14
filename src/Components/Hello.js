import React from "react";

const Hello=(props)=>{
    // console.log(props);
    return (
        <div>
            <h1>Hello, I'm a software developer</h1>
            {/* {name==="Akshay" && <p>My name is {name}</p>} */}
            {props.children}
            <p>I'm also a book reader</p>
            <hr />
        </div>
    )
}

export default Hello