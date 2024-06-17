// import React from 'react'
import { getDatabase, ref, set,push } from "firebase/database";
import app from "../firebaseConfig"
const Write = () => {
    function writedata(){
        let db=getDatabase();
        let dref=ref(db,"Users");
        let newUserRef=push(dref);
        set(newUserRef,{
            username: "hkkjhjkh",
            email: "jhghgjg@gmail.com",
        }).then(()=>{
            console.log("Data added!");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
        Write data
        <button onClick={writedata}>Add</button>
        </div>
    )
}

export default Write
